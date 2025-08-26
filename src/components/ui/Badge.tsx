'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animated?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  animated = true,
}) => {
  const baseStyles = "inline-flex items-center rounded-full font-medium transition-all duration-200"
  
  const variants = {
    default: "bg-gray-800 text-gray-300 border border-gray-700",
    primary: "bg-primary-500/20 text-primary-300 border border-primary-500/30",
    secondary: "bg-secondary-500/20 text-secondary-300 border border-secondary-500/30",
    accent: "bg-accent-500/20 text-accent-300 border border-accent-500/30",
    outline: "bg-transparent text-gray-300 border border-gray-600 hover:border-primary-500/50 hover:text-primary-300",
  }
  
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  }

  const MotionComponent = animated ? motion.span : 'span'

  return (
    <MotionComponent
      {...(animated && {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.2 },
      })}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </MotionComponent>
  )
}