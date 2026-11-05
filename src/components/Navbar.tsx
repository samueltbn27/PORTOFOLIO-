import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Download, ArrowUpRight } from 'lucide-react'
import { profile, cv } from '../data/profile'
import { Button } from './ui/button'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar({
  dark,
  onToggleTheme
}: {
  dark: boolean
  onToggleTheme: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-black/5'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8" aria-label="Utama">
        <button
          onClick={() => scrollTo('home')}
          className="font-display text-lg font-bold tracking-tight"
          aria-label="Back to top"
        >
          <span className="text-gradient">{profile.firstName}</span>
          {profile.lastName && (
            <span className="text-[var(--accent)]">.{profile.lastName}</span>
          )}
        </button>

        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? 'text-[var(--text)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-2)_80%,transparent)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          {cv.enabled && (
            <Button
              render={<a href={cv.path} download={cv.fileName} />}
              className="hidden h-auto gap-2 rounded-none px-4 py-2 text-sm sm:inline-flex"
            >
              <Download size={15} />
              Download CV
            </Button>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_60%,transparent)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="glass mx-4 mb-4 rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link.id
                        ? 'bg-[color-mix(in_srgb,var(--surface-2)_80%,transparent)] text-[var(--accent)]'
                        : 'text-[var(--text)] hover:bg-[color-mix(in_srgb,var(--surface-2)_60%,transparent)]'
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight size={15} className="opacity-40" />
                  </button>
                </motion.li>
              ))}
            </ul>
            {cv.enabled && (
              <Button
                variant="outline"
                render={<a href={cv.path} download={cv.fileName} />}
                className="mt-3 h-auto w-full gap-2 rounded-none px-4 py-2.5 text-sm"
              >
                <Download size={15} />
                Download CV
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
