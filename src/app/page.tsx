import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { Scene3D } from '@/components/3d/Scene3D'

export default function Home() {
  return (
    <div className="relative">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 -z-10">
        <Scene3D />
      </div>
      
      {/* Page Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}