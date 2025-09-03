import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export const PERSONAL_INFO = {
  name: 'Callum Cummins',
  title: 'Recent Computer Science Graduate',
  email: 'callumcummins28@gmail.com',
  location: 'United Kingdom',
  github: 'https://github.com/CallumC28',
  linkedin: 'https://www.linkedin.com/in/callum-cummins-330218362/',
  summary: 'Adaptable Computer Science graduate with strong Python skills and hands-on experience developing AI-driven applications, including building predictive ML models for real-world use cases.',
} as const

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
] as const

export const SKILLS = {
  'Programming & Development': [
    'Python',
    'JavaScript',
    'TypeScript',
    'PHP',
    'Java',
    'SQL',
    'HTML/CSS',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Flask',
    'scikit-learn',
    'PyTorch',
    'jQuery',
    'Tkinter',
  ],
  'AI & Machine Learning': [
    'scikit-learn',
    'PyTorch',
    'BERT',
    'Phpml',
    'Model Training',
    'Performance Optimisation',
    'Natural Language Processing (NLP)',
    'Hugging Face Transformers',
    'Computer Vision',
    'Pandas',
  ],
  'Web Development': [
    'Next.js',
    'Flask',
    'Tailwind CSS',
    'Chart.js',
    'RESTful APIs',
    'AJAX',
    'jQuery',
    'Responsive Design',
    'Database Design',
    'MySQL',
    'React',
    'SEO Optimisation',
  ],
  'Cloud & Tools': [
    'Git',
    'Google Cloud',
    'AWS',
    'XAMPP',
    'Composer',
    'Agile/SCRUM',
    'Vercel',
  ],
} as const

export const PROJECTS = [
  {
    id: 1,
    title: 'Gym Goer Web App - Dissertation Project',
    description: 'Full-stack fitness tracking application with predictive ML capabilities using custom AI models for exercise progress prediction.',
    technologies: ['PHP', 'PHPml', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Chart.js'],
    features: [
      'Custom AI model using SVR/Linear regression',
      'Google Maps and OpenWeather API integration as well as own RESTful API for saving running routes',
      'Agile development with user feedback iterations',
      '4.2/5 user satisfaction rating',
      '90% recommendation rate'
    ],
    github: 'https://github.com/CallumC28/Gym-Goer-Web-App',
    live: '',
    image: '/project-screenshots/gym-app.png',
    category: ['AI/ML', 'Web Development'],
  },
  {
    id: 2,
    title: 'Phishing Email Detector',
    description: 'Advanced email security application using BERT for phishing detection with high accuracy classification.',
    technologies: ['Python', 'PyTorch', 'BERT', 'Tkinter', 'Pandas', 'Hugging Face'],
    features: [
      'Fine-tuned BERT model on CUDA GPUs',
      '97.7% validation accuracy',
      'OCR and clipboard input support',
      'End-to-end data pipeline',
      'Real-time classification'
    ],
    github: 'https://github.com/CallumC28/Phishing-Email-Detector-In-Progress',
    live: '',
    image: '/project-screenshots/phishing-detector.png',
    category: ['AI/ML', 'Data Analysis']
  },
  {
    id: 3,
    title: 'Movie Explorer',
    description: 'Modern React application with AI-powered movie summaries and responsive design.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'OpenAI API', 'TMDB API', 'Axios'],
    features: [
      'Real-time AI movie summaries',
      'Trending and top-rated movies',
      'Modern component-based architecture',
      'Responsive design',
      'Numerous dynamic filtering options'
    ],
    github: 'https://github.com/CallumC28/Movie-Explorer',
    live: 'https://movie-explorer-tau-lemon.vercel.app/',
    image: '/project-screenshots/movie-explorer.png',
    category: ['Web Development', 'AI/ML'],
  },
  {
    id: 4,
    title: 'Online-Grocery-Web-App',
    description: 'Done as part of my Advanced Web Development coursework this comprehensive e-commerce platform with secure authentication and order management.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'SQL', 'jQuery'],
    features: [
      'Secure user authentication',
      'Role-based access control',
      'Dynamic product filtering',
      'Order management system',
      'SEO optimisation'
    ],
    github: 'https://github.com/CallumC28/Online-Grocery-Web-App',
    live: '',
    image: '/project-screenshots/grocery-store.png',
    category: 'Web Development',
  },
  {
    id: 5,
    title: 'Phishing Email Detector – Flask Web App',
    description: 'A simple Flask web app that uses a trained AI model to detect whether an email is phishing or legitimate, with clear results anyone can understand.',
    technologies: ['HTML/CSS', 'Python', 'Flask', 'FastAPI'],
    features: [
      'API integration',
      'Saved Fine-tuned BERT model',
      'Dynamic email content analysis',
      'User-friendly results presentation',
      'Real-time email classification'
    ],
    github: 'https://github.com/CallumC28/Flask_Phishing_Email_Detector',
    live: '',
    image: '/project-screenshots/flask-detector.png',
    category: ['Web Development', 'AI/ML'],
  },
  {
    id: 6,
    title: 'Password-Strength-Tester',
    description: 'A simple GUI tool that analyses password strength and provides real-time feedback. It uses entropy, complexity metrics, and custom rules to evaluate the security of a password.',
    technologies: ['Python', 'Tkinter', 'dataclasses', 'zxcvbn'],
    features: [
      'Strength Score (1-10): Based on entropy and guessability',
      'Tooltips - Explain entropy and strength scoring clearly',
      'Flags short, repetitive, or overly simple passwords',
      'User-friendly interface',
      'Entropy Bits Calculation: Reflects how hard a password is to brute-force'
    ],
    github: 'https://github.com/CallumC28/Password-Strength-Tester',
    live: '',
    image: '/project-screenshots/password.png',
    category: 'CyberSecurity',
  },
    {
    id: 7,
    title: 'Face Recognition',
    description: 'A python tool to capture faces and store them for it to then recognise saved faces with confidence metrics.',
    technologies: ['Python', 'CV2', 'InsightFace', 'NumPy'],
    features: [
      'Real-time face detection and recognition',
      'Cropped face images automatically saved in enrolled_images/',
      'User-friendly interface',
      'Supports multiple faces for recognition',
      'Cosine similarity scoring for recognition confidence'
    ],
    github: 'https://github.com/CallumC28/face_recognition',
    live: '',
    image: '',
    category: 'AI/ML',
  },
    {
    id: 8,
    title: 'Job Market Analyser',
    description: 'A tool that provides insights into job market trends, including demand for specific skills and salary expectations.',
    technologies: ['Python', 'Pandas', 'BeautifulSoup', 'Flask', 'JavaScript', 'HTML/CSS'],
    features: [
      'Data visualisation of job trends',
      'Skill demand analysis',
      'Web scraper pulls job listings from python.org/jobs',
      'User-friendly interface',
      'Job listing results with titles, companies, locations, and clickable links'
    ],
    github: 'https://github.com/CallumC28/Job_Analyser',
    live: '',
    image: '/project-screenshots/job.png',
    category: 'Data Analysis',
  },
  {
    id: 9,
    title: 'Password Cracker',
    description: 'Educational Flask web app demonstrating password security concepts including hashing, salting, dictionary attacks, and brute-force methods.',
    technologies: ['Python', 'Flask', 'Hashlib', 'HTML/CSS'],
    features: [
      'Generates SHA-256 and salted hashes for input wordlist passwords',
      'Implements dictionary-based password cracking',
      'Brute-force cracking for short passwords (≤ configurable length)',
      'Interactive web-based report with detailed metrics',
      'Configurable wordlist support for experiments'
    ],
    github: 'https://github.com/CallumC28/password_cracker',
    live: '',
    image: '/project-screenshots/cracker.png',
    category: ['CyberSecurity', 'Web Development'],
  },
] as const

export const EXPERIENCE = [
  {
    id: 1,
    title: 'Summer Labourer',
    company: 'Self Employed Handyman (Family Business)',
    location: 'Buckley',
    period: 'Summers 2021 - 2024',
    description: 'Assisted with construction and landscaping projects including patios, fencing, and general repairs.',
    responsibilities: [
      'Followed strict safety procedures',
      'Communicated effectively with clients',
      'Adapted to on-site challenges',
      'Maintained high quality standards'
    ],
    type: 'work',
  },
  {
    id: 2,
    title: 'Apprentice (Traineeship)',
    company: 'ATS',
    location: 'Flint',
    period: 'Mar - Aug 2019',
    description: 'Handled workshop organisation, customer service, and inventory management in automotive environment.',
    responsibilities: [
      'Workshop organisation and maintenance',
      'Customer tyre checks and consultations',
      'Inventory sorting and management',
      'Safety protocol adherence'
    ],
    type: 'work',
  },
] as const

export const EDUCATION = [
  {
    id: 1,
    institution: 'Keele University',
    degree: 'BSc Computer Science',
    grade: 'First Class Honours',
    period: 'Sep 2021 - July 2025',
    modules: [
      'Software Development Management',
      'Advanced Databases and Applications',
      'Communications and Networks',
      'Computational and Artificial Intelligence'
    ],
    dissertation: 'First Class grade of 80%. Gym Goer Web App: Developed a full-stack fitness tracking application with predictive ML capabilities, achieving 4.2/5 user satisfaction and 90% recommendation rate.',
  },
  {
    id: 2,
    institution: 'Coleg Cambria',
    degree: 'Level 3 Extended Diploma in IT',
    grade: 'Merit, Merit, Distinction (MMD)',
    period: 'Sep 2019 - July 2021',
    modules: [
      'Computer Systems',
      'Computer Networks',
      'Cyber Security',
      '3D Animation',
      'Game Design',
      'IT Project Management',
    ],
  },
] as const

export const CERTIFICATES = [
  {
    name: 'Exploring Artificial Intelligence: Use Cases and Applications',
    issuer: 'AWS Training & Certification',
    date: 'Aug 2025',
    credential: '/certificates/AI_Use_Cases_Applications_Cert.pdf',
  },
  {
    name: 'Getting Started with Natural Language Processing',
    issuer: 'Codecademy',
    date: 'Aug 2025',
    credential: '/certificates/NLP_Intro_Cert _ Codecademy.pdf',
  },
  {
    name: 'Learn Prompt Engineering',
    issuer: 'Codecademy',
    date: 'Aug 2025',
    credential:'/certificates/Promp_Engineering_Cert _ Codecademy.pdf',
  },
  {
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    date: 'Aug 2025',
    credential: 'https://www.hackerrank.com/certificates/iframe/cd753798aed8',
  },
] as const

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'CallumC28',
    href: PERSONAL_INFO.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'callum-cummins',
    href: PERSONAL_INFO.linkedin,
  },
] as const

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
} as const