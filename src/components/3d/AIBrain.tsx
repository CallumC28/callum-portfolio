'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface AIBrainProps {
  position: [number, number, number]
}

export const AIBrain: React.FC<AIBrainProps> = ({ position }) => {
  const groupRef = useRef<THREE.Group>(null)

  // Build network once
  const { nodePositions, connections } = useMemo(() => {
    const nodePositions: THREE.Vector3[] = []
    const connections: [number, number][] = []
    const layers = [8, 12, 16, 12, 8]
    const spacing = 1.5
    let idx = 0

    for (let l = 0; l < layers.length; l++) {
      const count = layers[l]
      const radius = count * 0.12
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2
        const x = Math.cos(a) * radius
        const y = Math.sin(a) * radius
        const z = (l - layers.length / 2) * spacing
        nodePositions.push(new THREE.Vector3(x, y, z))

        if (l < layers.length - 1) {
          const nextCount = layers[l + 1]
          const nextStart = nodePositions.length
          for (let j = 0; j < nextCount; j++) {
            if (Math.random() > 0.3) connections.push([idx, nextStart + j])
          }
        }
        idx++
      }
    }
    return { nodePositions, connections }
  }, [])

  // Refs we update every frame
  const nodeMeshes = useRef<THREE.Mesh[]>([])
  const nodeMats = useRef<THREE.MeshStandardMaterial[]>([])
  const connMeshes = useRef<THREE.Mesh[]>([])
  const connMats = useRef<THREE.MeshStandardMaterial[]>([])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // group float/rotate
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.22
      groupRef.current.rotation.x = Math.sin(t * 0.35) * 0.15
      groupRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.12
    }

    // 1) Morph node positions (live)
    nodePositions.forEach((p, i) => {
      // gentle wobble (feels organic)
      p.x += Math.sin(t * 1.4 + i * 0.7) * 0.002
      p.y += Math.cos(t * 1.1 + i * 0.5) * 0.002
      p.z += Math.sin(t * 1.3 + i * 0.9) * 0.002
      const mesh = nodeMeshes.current[i]
      if (mesh) mesh.position.copy(p)
    })

    // 2) Update connections to follow nodes
    const up = new THREE.Vector3(0, 1, 0)
    connections.forEach(([s, e], i) => {
      const start = nodePositions[s]
      const end = nodePositions[e]
      const mesh = connMeshes.current[i]
      if (!mesh) return

      const dir = new THREE.Vector3().subVectors(end, start)
      const len = dir.length()
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
      const quat = new THREE.Quaternion().setFromUnitVectors(up, dir.clone().normalize())

      mesh.position.copy(mid)
      mesh.quaternion.copy(quat)
      // cylinder built with height=1 → scale Y to length
      mesh.scale.set(1, len, 1)
    })

    // 3) Firing: emissive & opacity pulses
    nodeMats.current.forEach((mat, i) => {
      if (!mat) return
      const flicker = 0.3 + 0.25 * Math.max(0, Math.sin(t * 5 + i * 0.9))
      mat.emissiveIntensity = flicker
    })
    connMats.current.forEach((mat, i) => {
      if (!mat) return
      const pulse = (Math.sin(t * 2 + i * 0.4) + 1) * 0.5 // 0..1
      mat.opacity = 0.15 + pulse * 0.45
      mat.emissiveIntensity = 0.08 + pulse * 0.25
    })
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Nodes */}
      {nodePositions.map((p, i) => (
        <mesh
          key={`node-${i}`}
          ref={(m) => {
            if (m) nodeMeshes.current[i] = m
          }}
          position={p} // initial; we keep it updated in useFrame
        >
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            ref={(m) => {
              if (m) nodeMats.current[i] = m
            }}
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
            roughness={0.35}
            metalness={0.1}
            transparent
            opacity={0.95}
          />
        </mesh>
      ))}

      {/* Connections (height=1, scaled each frame) */}
      {connections.map(([s, e], i) => (
        <mesh
          key={`conn-${i}`}
          ref={(m) => {
            if (m) connMeshes.current[i] = m
          }}
          // position/quaternion/scale are kept updated in useFrame
        >
          <cylinderGeometry args={[0.005, 0.005, 1, 8]} />
          <meshStandardMaterial
            ref={(m) => {
              if (m) connMats.current[i] = m
            }}
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.12}
            transparent
            opacity={0.25}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* Soft inner glow */}
      <pointLight position={[0, 0, 0]} intensity={0.6} distance={6} color="#8b5cf6" />
      <pointLight position={[2, 2, 2]} intensity={0.35} distance={8} color="#06b6d4" />
    </group>
  )
}
