'use client'

import { useState } from 'react'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section-new'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  profileData,
  aboutData,
  resumeData,
  portfolioData,
  blogData,
  contactData,
} from '@/lib/portfolio-data'

// ---- Custom Elizabeth Data ----
profileData.name = 'Elizabeth Eneres Malima'
profileData.title = 'Aspiring Software Developer'
profileData.avatar = '/profile.jpeg'
profileData.email = 'lizziemalima@gmail.com'
profileData.phone = '0774611287 / 0711394548'
profileData.location = 'Harare, Zimbabwe'
profileData.social = {
  github: 'https://github.com/Lizzie28',
  linkedin: '',
}

aboutData.intro = `I’m a self-learning developer exploring web development, AI, and accessible technology. I enjoy learning by building small projects, experimenting with ideas, and improving through feedback. I’m especially interested in how technology can solve real-world problems and create meaningful impact.`

resumeData.education = [
  {
    degree: 'Student',
    institution: 'Current studies in self-learning & web development',
    date: '2024 - Present',
    description: 'Focusing on frontend development, React/Next.js, Tailwind, and exploring AI and accessible tech.'
  }
]

resumeData.experience = [
  {
    title: 'Learning & Practice Projects',
    company: 'Self-initiated',
    date: '2024 - Present',
    description: 'Building small web apps and experimenting with AI-powered features to grow skills and understanding.'
  }
]

portfolioData.projects = [
  {
    title: 'Practice Projects & Experiments',
    description: 'Projects I’m currently building to improve my frontend, database, and UI/UX skills.',
    link: ''
  }
]

blogData.posts = [
  {
    title: 'Learning in Public',
    category: 'Journey',
    date: '2026',
    readTime: '5 min',
    image: '/web-development-coding.png',
    excerpt: 'Sharing my journey of learning web development, experimenting with projects, and growing my skills.',
    tags: ['Learning', 'Web Development', 'Growth'],
    slug: 'learning-in-public'
  }
]

contactData.email = 'lizziemalima@gmail.com'
contactData.github = 'https://github.com/Lizzie28'
contactData.linkedin = '' // add if you have

// --------------------------------

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          {/* Main Content */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            {/* Navigation */}
            <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
              {['about', 'resume', 'portfolio', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${
                    activeSection === section
                      ? 'text-foreground bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              {activeSection === 'about' && <AboutSection data={aboutData} />}
              {activeSection === 'resume' && <ResumeSection data={resumeData} />}
              {activeSection === 'portfolio' && <PortfolioSection data={portfolioData} />}
              {activeSection === 'blog' && <BlogSection data={blogData} />}
              {activeSection === 'contact' && <ContactSection data={contactData} />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
