'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypeWriterProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delayBetweenTexts?: number
  className?: string
  showCursor?: boolean
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  className,
  showCursor = true,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursorBlink, setShowCursorBlink] = useState(true)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenTexts)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delayBetweenTexts])

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursorBlink(prev => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={className}>
      {currentText}
      {showCursor && (
        <motion.span
          animate={{ opacity: showCursorBlink ? 1 : 0 }}
          transition={{ duration: 0 }}
          className="text-primary-400"
        >
          |
        </motion.span>
      )}
    </span>
  )
}