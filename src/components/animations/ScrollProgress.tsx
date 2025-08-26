'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}