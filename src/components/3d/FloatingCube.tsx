'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface FloatingCubeProps {
  position: [number, number, number]
}

export const FloatingCube: React.FC<FloatingCubeProps> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3
      
      // Rotation animation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      
      // Scaling animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.scale.set(scale, scale, scale)
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  )
}