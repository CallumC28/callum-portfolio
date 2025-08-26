'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Code, Brain } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FadeInView } from '@/components/animations/FadeInView'
import { EDUCATION, CERTIFICATES } from '@/lib/constants'
import { Coffee, Dumbbell, Mountain, BookOpen, Heart } from 'lucide-react'


export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "First Class Honours",
      description: "BSc Computer Science from Keele University",
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI Specialist",
      description: "Expertise in ML, PyTorch, BERT, and predictive modeling",
      color: "secondary"
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Proficient in modern web technologies and databases",
      color: "accent"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "AWS, Codecademy, and HackerRank certifications",
      color: "primary"
    }
  ]
  const funFacts = [
    {
      icon: Heart,
      title: "Team Player",
      detail: "Love collaborating, feedback loops, and clean hand-offs",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Discipline",
      detail: "Regular training; consistency > intensity",
    },
    {
      icon: Mountain,
      title: "Bouldering",
      detail: "University comps; problem-solving on the wall",
    },
    {
      icon: BookOpen,
      title: "Tutor & Mentor",
      detail: "Volunteer programming tutor for local students",
    },
    {
      icon: Coffee,
      title: "Coffee-Fueled",
      detail: "Productivity powered by pour-overs",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeInView>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-3 rounded-full bg-primary-500/10 mb-4"
            >
              <Brain className="w-8 h-8 text-primary-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming ideas into intelligent solutions through code, creativity, and continuous learning.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <FadeInView direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  As a recent Computer Science graduate with First Class Honours, I've dedicated myself to 
                  mastering the intersection of artificial intelligence and practical software development. 
                  My passion lies in creating intelligent systems that solve real-world problems.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Throughout my academic journey, I've developed expertise in machine learning, building 
                  everything from predictive models to sophisticated web applications. My dissertation project, 
                  the Gym Goer Web App, achieved a 4.2/5 user satisfaction rating and demonstrates my ability 
                  to combine AI capabilities with user-centered design.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  I'm particularly drawn to projects that challenge conventional approaches - whether it's 
                  fine-tuning BERT models for phishing detection with 97.7% accuracy or creating full-stack 
                  applications with intelligent features. I believe the future belongs to developers who 
                  can bridge the gap between cutting-edge AI research and practical implementation.
                </p>
              </div>
              
              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl glass hover:bg-white/5 transition-colors"
                  >
                    <highlight.icon className={`w-8 h-8 mx-auto mb-2 text-${highlight.color}-400`} />
                    <h4 className="text-sm font-semibold text-white mb-1">{highlight.title}</h4>
                    <p className="text-xs text-gray-400">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Education & Certifications */}
          <FadeInView direction="right">
            <div className="space-y-6">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-primary-400" />
                  Education
                </h3>
                
                <div className="space-y-4">
                  {EDUCATION.map((edu) => (
                    <Card key={edu.id} className="hover:border-primary-500/30">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{edu.degree}</CardTitle>
                            <p className="text-primary-400 font-medium">{edu.institution}</p>
                            <p className="text-sm text-gray-400">{edu.period}</p>
                          </div>
                          <Badge variant="primary">{edu.grade}</Badge>
                        </div>
                      </CardHeader>
                      
                      {edu.modules.length > 0 && (
                        <CardContent>
                          <p className="text-sm text-gray-400 mb-2">Key Modules:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.modules.map((module) => (
                              <Badge key={module} variant="outline" size="sm">
                                {module}
                              </Badge>
                            ))}
                          </div>
                          
                          {'dissertation' in edu && edu.dissertation && (
                            <div className="mt-4 p-3 rounded-lg bg-primary-500/10 border border-primary-500/20">
                              <p className="text-sm text-primary-300">
                                <strong>Dissertation:</strong> {edu.dissertation}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-secondary-400" />
                  Recent Certifications
                </h3>
                
                <div className="grid gap-3">
                  {CERTIFICATES.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg glass hover:bg-white/5 transition-colors"
                    >
                      <div>
                        <h4 className="text-white font-medium text-sm">{cert.name}</h4>
                        <p className="text-gray-400 text-xs">{cert.issuer}</p>
                      </div>
                      <Badge variant="secondary" size="sm">{cert.date}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Fun Facts */}
              <Card className="bg-gradient-to-br from-accent-500/10 to-primary-500/10 border-accent-500/20">
                <CardHeader>
                  <CardTitle className="gradient-text">Beyond Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {funFacts.map((f, i) => (
                      <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start space-x-3 rounded-lg glass px-4 py-3 hover:bg-white/5 transition-colors"
                      >
                        <div className="mt-0.5 p-2 rounded-md bg-primary-500/15">
                          <f.icon className="w-4 h-4 text-primary-300" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold">{f.title}</p>
                          <p className="text-gray-400 text-xs">{f.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* “currently” line */}
                  <div className="mt-4 text-xs text-gray-400">
                    Currently: refining my Movie-Explorer web app and studying AI concepts.
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