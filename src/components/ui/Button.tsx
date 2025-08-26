'use client'

import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Pull base props from motion.button to avoid type conflicts
type MotionButtonProps = React.ComponentProps<typeof motion.button>

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps extends Omit<MotionButtonProps, 'children'> {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon,
    disabled,
    type,
    children,
    whileHover,
    whileTap,
    ...props
  },
  ref
) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ' +
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black ' +
    'disabled:opacity-50 disabled:cursor-not-allowed'

  const variants: Record<Variant, string> = {
    primary:
      'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 ' +
      'text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25',
    secondary:
      'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 ' +
      'text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25',
    outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 hover:text-primary-300',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
  }

  const sizes: Record<Size, string> = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const isDisabled = disabled || isLoading

  return (
    <motion.button
      ref={ref}
      type={type ?? 'button'}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={isDisabled}
      aria-disabled={isDisabled || undefined}
      aria-busy={isLoading || undefined}
      // only animate when enabled
      whileHover={isDisabled ? undefined : whileHover ?? { scale: 1.02 }}
      whileTap={isDisabled ? undefined : whileTap ?? { scale: 0.98 }}
      {...props}
    >
      {isLoading && (
        <span
          className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
          aria-hidden
        />
      )}
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  )
})
