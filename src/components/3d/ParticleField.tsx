'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const ParticleField: React.FC = () => {
  const meshRef = useRef<THREE.Points>(null)
  
  const particlesCount = 2000
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount; i++) {
      // Random positions in a sphere
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      
      // Colors - blue to purple gradient
      const colorFactor = Math.random()
      colors[i * 3] = 0.2 + colorFactor * 0.6     // Red
      colors[i * 3 + 1] = 0.4 + colorFactor * 0.4 // Green
      colors[i * 3 + 2] = 1                       // Blue
    }
    
    return [positions, colors]
  }, [])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      
      // Animate individual particles
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + positions[i3]) * 0.001
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}