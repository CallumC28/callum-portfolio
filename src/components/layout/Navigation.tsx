'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import { scrollToElement, cn } from '@/lib/utils'

interface NavigationProps {
  isMobile?: boolean
  onItemClick?: () => void
}

export const Navigation: React.FC<NavigationProps> = ({
  isMobile = false,
  onItemClick,
}) => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.map(item => item.id)
      let current = 'home'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent, href: string, id: string) => {
    e.preventDefault()
    scrollToElement(id, 80)
    onItemClick?.()
  }

  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-4">
        {NAVIGATION_ITEMS.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.href}
            onClick={(e) => handleClick(e, item.href, item.id)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "text-lg font-medium transition-colors duration-200 py-2 px-4 rounded-lg",
              activeSection === item.id
                ? "text-primary-400 bg-primary-500/10 border-l-4 border-primary-500"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            )}
          >
            {item.name}
          </motion.a>
        ))}
      </nav>
    )
  }

  return (
    <nav className="flex items-center space-x-8">
      {NAVIGATION_ITEMS.map((item) => (
        <motion.a
          key={item.id}
          href={item.href}
          onClick={(e) => handleClick(e, item.href, item.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "relative text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-lg",
            activeSection === item.id
              ? "text-primary-400"
              : "text-gray-300 hover:text-white"
          )}
        >
          {item.name}
          {activeSection === item.id && (
            <motion.div
              layoutId="activeSection"
              className="absolute inset-0 bg-primary-500/10 border border-primary-500/20 rounded-lg -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </motion.a>
      ))}
    </nav>
  )
}