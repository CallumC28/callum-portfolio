'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { PERSONAL_INFO, CONTACT_INFO } from '@/lib/constants'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building intelligent solutions and crafting exceptional digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Experience'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>{PERSONAL_INFO.email}</span>
              </motion.a>
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                <Github size={16} />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>© {currentYear} {PERSONAL_INFO.name}. Made with</span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span>and lots of coffee ☕</span>
            </div>
            
            <div className="flex items-center space-x-6">
              {CONTACT_INFO.slice(2).map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <contact.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}