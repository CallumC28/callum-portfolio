'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
  glass?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  gradient = false,
  glass = true,
}) => {
  const baseStyles = "rounded-xl p-6 transition-all duration-300"
  const glassStyles = glass ? "glass backdrop-blur-md border border-white/10" : "bg-gray-900/50 border border-gray-700/50"
  const gradientStyles = gradient ? "bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10" : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      } : undefined}
      className={cn(
        baseStyles,
        glassStyles,
        gradientStyles,
        hover && "hover:border-primary-500/30",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
  gradient = false,
}) => {
  return (
    <h3 className={cn(
      "text-xl font-bold mb-2",
      gradient ? "gradient-text" : "text-white",
      className
    )}>
      {children}
    </h3>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("text-gray-300", className)}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("mt-4 pt-4 border-t border-white/10", className)}>
      {children}
    </div>
  )
}