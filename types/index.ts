export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  features: string[]
  github: string
  live: string
  image: string
  category: 'AI/ML' | 'Web Development' | 'Data Analysis'
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  type: 'work' | 'education'
}

export interface Education {
  id: number
  institution: string
  degree: string
  grade: string
  period: string
  modules: string[]
  dissertation?: string
}

export interface Certificate {
  name: string
  issuer: string
  date: string
  credential: string
}

export interface ContactInfo {
  icon: any
  label: string
  value: string
  href: string
}

export interface NavigationItem {
  name: string
  href: string
  id: string
}

export interface AnimationVariant {
  hidden: {
    opacity?: number
    x?: number
    y?: number
    scale?: number
  }
  visible: {
    opacity?: number
    x?: number
    y?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
      staggerChildren?: number
      delayChildren?: number
    }
  }
}

export interface FormData {
  name: string
  email: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  message?: string
}