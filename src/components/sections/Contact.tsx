'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { FadeInView } from '@/components/animations/FadeInView'
import { CONTACT_INFO } from '@/lib/constants'

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeInView>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-3 rounded-full bg-secondary-500/10 mb-4"
            >
              <MessageSquare className="w-8 h-8 text-secondary-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
          </div>
        </FadeInView>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Information */}
          <FadeInView direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and potential collaborations. I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {CONTACT_INFO.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="block"
                  >
                    <Card className="hover:border-primary-500/50 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-primary-500/20">
                            <contact.icon className="w-5 h-5 text-primary-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{contact.label}</h4>
                            <p className="text-gray-400 text-sm">{contact.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>

              {/* Availability Status */}
              <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div>
                      <p className="font-semibold text-white">Available for opportunities</p>
                      <p className="text-sm text-gray-400">Open to full-time positions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
