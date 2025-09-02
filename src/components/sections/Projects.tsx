'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Folder, Filter, Star, TrendingUp } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FadeInView } from '@/components/animations/FadeInView'
import { PROJECTS } from '@/lib/constants'

// Derive types from actual data so TS understands readonly tuples and so on
type Project = (typeof PROJECTS)[number]
type Category = 'AI/ML' | 'Web Development' | 'Data Analysis' | 'CyberSecurity'

// Normalise category to a readonly array of Category
const catsOf = (c: Project['category']): readonly Category[] =>
  (Array.isArray(c) ? c : [c]) as readonly Category[]

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | Category>('all')

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => catsOf(p.category).includes(filter))

  const categories = [
    { name: 'all' as const, label: 'All Projects', count: PROJECTS.length },
    {
      name: 'AI/ML' as const,
      label: 'AI/ML',
      count: PROJECTS.filter((p) => catsOf(p.category).includes('AI/ML')).length,
    },
    {
      name: 'Web Development' as const,
      label: 'Web Dev',
      count: PROJECTS.filter((p) => catsOf(p.category).includes('Web Development')).length,
    },
    {
      name: 'Data Analysis' as const,
      label: 'Data Analysis',
      count: PROJECTS.filter((p) => catsOf(p.category).includes('Data Analysis')).length,
    },
  ] as const

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <FadeInView>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-3 rounded-full bg-accent-500/10 mb-4"
            >
              <Folder className="w-8 h-8 text-accent-400" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of personal projects and coursework combining AI, web development, and user-centered design.
            </p>
          </div>
        </FadeInView>

        {/* Filter Buttons */}
        <FadeInView>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setFilter(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === category.name
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>{category.label}</span>
                  <Badge variant="outline" size="sm">
                    {category.count}
                  </Badge>
                </div>
              </motion.button>
            ))}
          </div>
        </FadeInView>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const cats = catsOf(project.category)
              const isAI = cats.includes('AI/ML')

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full group hover:border-primary-500/50 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-t-xl">
                      <div className="relative h-56 md:h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              // fallback to initials if the file is missing
                              const target = e.currentTarget
                              target.style.display = 'none'
                              const fb = target.parentElement?.querySelector('.fallback')
                              fb && fb.classList.remove('hidden')
                            }}
                          />
                        ) : null}

                        {/* Fallback initials (hidden until image error) */}
                        <div className="fallback absolute inset-0 hidden items-center justify-center text-4xl font-bold text-gray-600">
                          {project.title
                            .split(' ')
                            .map((w) => w[0])
                            .join('')
                            .slice(0, 3)}
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-4">
                            {project.github && (
                              <Button
                                size="sm"
                                icon={<Github size={16} />}
                                onClick={() => window.open(project.github, '_blank')}
                              >
                                Code
                              </Button>
                            )}
                            {project.live && (
                              <Button
                                size="sm"
                                variant="outline"
                                icon={<ExternalLink size={16} />}
                                onClick={() => window.open(project.live, '_blank')}
                              >
                                Demo
                              </Button>
                            )}
                          </div>
                        </div>

                        {/* Category Badges (support multiple) */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          {cats.map((cat) => (
                            <Badge
                              key={cat}
                              variant={cat === 'AI/ML' ? 'secondary' : 'primary'}
                              className="backdrop-blur-md"
                            >
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </CardTitle>

                        {isAI && (
                          <div className="flex items-center text-secondary-400">
                            <TrendingUp size={16} />
                            <Star size={14} className="ml-1" />
                          </div>
                        )}
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent>
                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 6).map((tech) => (
                            <Badge key={tech} variant="outline" size="sm">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 6 && (
                            <Badge variant="outline" size="sm">
                              +{project.technologies.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 5).map((feature, idx) => (
                            <li key={idx} className="text-xs text-gray-400 flex items-start">
                              <span className="text-primary-400 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <div className="flex space-x-3 w-full">
                        {project.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            icon={<Github size={16} />}
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            View Code
                          </Button>
                        )}
                        {project.live && (
                          <Button
                            size="sm"
                            className="flex-1"
                            icon={<ExternalLink size={16} />}
                            onClick={() => window.open(project.live, '_blank')}
                          >
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* GitHub */}
        <FadeInView>
          <div className="mt-16 text-center">
            <Card className="inline-block bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-500/20">
              <CardContent className="p-8">
                <Github className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Explore More Projects</h3>
                <p className="text-gray-400 mb-6">
                  Check out my GitHub for additional projects, contributions, and code samples.
                </p>
                <Button
                  icon={<Github size={20} />}
                  onClick={() => window.open('https://github.com/CallumC28', '_blank')}
                >
                  Visit GitHub Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
