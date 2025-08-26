'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FadeInView } from '@/components/animations/FadeInView'
import { EXPERIENCE } from '@/lib/constants'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeInView>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-3 rounded-full bg-primary-500/10 mb-4"
            >
              <Briefcase className="w-8 h-8 text-primary-400" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Work Experience</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building practical skills through hands-on experience and real-world problem solving.
            </p>
          </div>
        </FadeInView>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" />

            <div className="space-y-12">
              {EXPERIENCE.map((exp: any, index: number) => (
                <motion.div
                  key={exp.id ?? index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-primary-500 border-4 border-black z-10" />

                  {/* Experience Card */}
                  <div className="ml-16 w-full">
                    <Card className="hover:border-primary-500/30 transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
                          <div>
                            <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>

                            <div className="flex items-center text-primary-400 font-medium mb-2">
                              <Briefcase className="w-4 h-4 mr-2" />
                              {exp.company}
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {exp.period}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {exp.location}
                              </div>
                            </div>
                          </div>

                          {exp.type && (
                            <Badge variant="outline" className="whitespace-nowrap">
                              {exp.type}
                            </Badge>
                          )}
                        </div>

                        {exp.description && (
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        )}
                      </CardHeader>

                      <CardContent>
                        {/* Highlights */}
                        {Array.isArray(exp.highlights) && exp.highlights.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">
                              Key Contributions
                            </h4>
                            <ul className="space-y-2">
                              {exp.highlights.slice(0, 6).map((h: string, i: number) => (
                                <li key={i} className="text-sm text-gray-300 flex items-start">
                                  <CheckCircle className="w-4 h-4 text-primary-400 mr-2 mt-[2px]" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech / Tools */}
                        {Array.isArray(exp.tech) && exp.tech.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-2">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.slice(0, 8).map((t: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {t}
                                </Badge>
                              ))}
                              {exp.tech.length > 8 && (
                                <Badge variant="outline" className="text-xs">
                                  +{exp.tech.length - 8} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
