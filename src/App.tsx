import { useEffect, useState } from 'react'
import BackgroundFX from './components/BackgroundFX'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechTicker from './components/TechTicker'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

const getInitialTheme = (): boolean => {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark') return true
  if (stored === 'light') return false
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
}

export default function App() {
  const [dark, setDark] = useState(getInitialTheme)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  const toggleTheme = () => setDark((d) => !d)

  return (
    <div className="relative min-h-screen">
      <LoadingScreen done={!loading} />
      <BackgroundFX dark={dark} />
      <ScrollProgress />
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <TechTicker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
