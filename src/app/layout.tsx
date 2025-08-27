import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Callum Cummins - Graduate',
  description: 'Recent Computer Science graduate specialising in AI/ML, web development, and data analysis. Experienced in Python, JavaScript, React, and machine learning technologies.',
  keywords: 'AI Engineer, Machine Learning, Full Stack Developer, Python, JavaScript, React, Data Analysis, Computer Science',
  authors: [{ name: 'Callum Cummins' }],
  creator: 'Callum Cummins',
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: 'Callum Cummins - AI Engineer & Full Stack Developer',
    description: 'Computer Science graduate specialising in AI/ML, web development, and data analysis.',
    url: 'https://callumcummins.dev',
    siteName: 'Callum Cummins Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Callum Cummins - AI Engineer & Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Callum Cummins - AI Engineer & Full Stack Developer',
    description: 'Computer Science graduate specialising in AI/ML, web development, and data analysis.',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <header>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </header>
      <body className={`${inter.className} min-h-screen bg-black text-white mesh-bg`}>
        <ScrollProgress />
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
