'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TypeWriter } from '@/components/animations/TypeWriter'
import { PERSONAL_INFO, ANIMATION_VARIANTS } from '@/lib/constants'
import { scrollToElement } from '@/lib/utils'

export const Hero: React.FC = () => {
  const titles = [
    'AI Engineer',
    'Full Stack Developer',
    'Data Analyst',
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10" />
      
      <div className="container mx-auto px-4 z-20">
        <motion.div
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="mb-8 inline-block"
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-4xl font-bold text-white">
                    {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={ANIMATION_VARIANTS.item}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </motion.h1>

          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-8"
          >
            <TypeWriter
              texts={titles}
              speed={100}
              deleteSpeed={50}
              delayBetweenTexts={2000}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={ANIMATION_VARIANTS.item}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {PERSONAL_INFO.summary} Passionate about creating innovative solutions 
            that bridge the gap between artificial intelligence and real-world applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToElement('projects')}
              icon={<Github size={20} />}
            >
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToElement('contact')}
            >
              Get In Touch
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              icon={<Download size={20} />}
              onClick={() => window.open('/Callum Cummins CV.pdf', '_blank')}
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToElement('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  )
}