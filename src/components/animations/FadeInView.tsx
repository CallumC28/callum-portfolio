'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FadeInViewProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className,
}) => {
  const directionVariants = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
  }

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ 
        once: true, 
        margin: "-100px" 
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}