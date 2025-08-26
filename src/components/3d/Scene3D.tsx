'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ParticleField } from './ParticleField'
import { FloatingCube } from './FloatingCube'
import { AIBrain } from './AIBrain'

export const Scene3D: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      className="w-full h-full"
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        <ParticleField />
        <FloatingCube position={[-3, 2, -2]} />
        <FloatingCube position={[3, -2, -3]} />
        <AIBrain position={[0, 0, -5]} />
      </Suspense>
    </Canvas>
  )
}