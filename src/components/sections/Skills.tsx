'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Brain, Globe, Cloud, Zap } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FadeInView } from '@/components/animations/FadeInView'
import { SKILLS } from '@/lib/constants'

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Programming & Development')

  const skillCategories = [
    {
      name: 'Programming & Development',
      icon: Code,
      color: 'primary',
      description: 'Languages and frameworks I use to build full-stack applications'
    },
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'secondary',
      description: 'ML frameworks and libraries I use for predictive modeling and AI apps'
    },
    {
      name: 'Web Development',
      icon: Globe,
      color: 'accent',
      description: 'Modern front-end and back-end technologies for responsive web apps'
    },
    {
      name: 'Cloud & Tools',
      icon: Cloud,
      color: 'primary',
      description: 'Cloud platforms, deployment tools, and workflows I rely on'
    }
  ]

  // helper to group skills by type
  const groupSkills = (skills: readonly string[]) => {
    const groups: Record<string, string[]> = {
      Languages: [],
      Frameworks: [],
      Libraries: [],
      Databases: [],
      Tools: []
    }

    skills.forEach(skill => {
      if (['Python','JavaScript','TypeScript','PHP','Java','SQL','HTML/CSS'].includes(skill)) {
        groups.Languages.push(skill)
      } else if (['React','Next.js','Tailwind CSS', 'Flask',].includes(skill)) {
        groups.Frameworks.push(skill)
      } else if (['scikit-learn','PyTorch','BERT','Phpml','Chart.js','AJAX', 'jQuery', 'Pandas', 'Hugging Face Transformers', 'Tkinter',].includes(skill)) {
        groups.Libraries.push(skill)
      } else if (['MySQL','Database Design'].includes(skill)) {
        groups.Databases.push(skill)
      } else {
        groups.Tools.push(skill)
      }
    })

    return groups
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeInView>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-3 rounded-full bg-secondary-500/10 mb-4"
            >
              <Zap className="w-8 h-8 text-secondary-400" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hands-on experience in programming, AI/ML, and web development with a proven ability
              to turn concepts into production-ready solutions.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <FadeInView direction="left">
              <div className="space-y-3 sticky top-32">
                {skillCategories.map((category) => (
                  <motion.button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 rounded-xl transition-all duration-300 text-left ${
                      activeCategory === category.name
                        ? `glass border-${category.color}-500/50 bg-${category.color}-500/10`
                        : 'glass hover:bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-${category.color}-500/20`}>
                        <category.icon className={`w-5 h-5 text-${category.color}-400`} />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          activeCategory === category.name ? `text-${category.color}-300` : 'text-white'
                        }`}>
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </FadeInView>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <FadeInView direction="right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl gradient-text">
                        {activeCategory}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-6">
                        {/* Grouped Skills */}
                        {Object.entries(groupSkills(SKILLS[activeCategory as keyof typeof SKILLS] || []))
                          .filter(([_, arr]) => arr.length > 0)
                          .map(([group, items], index) => (
                          <motion.div
                            key={group}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 rounded-lg glass"
                          >
                            <h4 className="text-white font-semibold mb-3">{group}</h4>
                            <div className="flex flex-wrap gap-2">
                              {items.map((item) => (
                                <Badge
                                  key={item}
                                  variant="outline"
                                  className="text-sm py-1 px-3"
                                >
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        ))}

                        {/* Context / Featured Work */}
                        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20">
                          <h4 className="text-lg font-semibold text-white mb-2">How I use these</h4>
                          <p className="text-gray-300 text-sm">
                            {activeCategory === 'Programming & Development' && 
                              "I use languages like Python, JavaScript, and PHP to build full-stack applications and integrate AI models into production systems."}
                            {activeCategory === 'AI & Machine Learning' && 
                              "I’ve built predictive models with PyTorch, BERT, and scikit-learn, applying them to real-world problems like phishing detection and workout progression tracking."}
                            {activeCategory === 'Web Development' && 
                              "I design responsive, performant applications using React, Next.js, and Tailwind, often integrating APIs and visualizations with Chart.js."}
                            {activeCategory === 'Cloud & Tools' && 
                              "I deploy projects to AWS, GCP, and Vercel, manage databases, and follow Agile workflows with Git and Docker for collaboration and scalability."}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  )
}
