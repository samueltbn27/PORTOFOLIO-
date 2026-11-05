import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { Button } from './ui/button'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const lineVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } }
}

const wordVariants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease }
  }
}

function StaggerWords({ text, gradient }: { text: string; gradient?: boolean }) {
  const reduce = useReducedMotion()
  if (reduce) return <span>{text}</span>
  return (
    <motion.span
      variants={lineVariants}
      initial="hidden"
      animate="show"
      className="inline-block"
      aria-label={text}
    >
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className={`inline-block ${gradient ? 'text-gradient' : ''}`}
        >
          {word}
          {i < text.split(' ').length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const socials = [
    { icon: Github, href: profile.contact.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.contact.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profile.contact.email}`, label: 'Email' }
  ].filter((s) => s.href)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        {/* Kiri */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-xl font-medium text-[var(--text)] sm:text-2xl"
          >
            Hi, I&apos;m <span className="font-bold text-gradient">{profile.name}</span> 👋
          </motion.p>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
          >
            <StaggerWords text="Web Developer" />
            <br />
            <StaggerWords text="& Data Analyst" gradient />
          </motion.h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="label-mono mt-5 text-[var(--muted)]"
          >
            {profile.statusLine}
          </motion.p>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.38 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.52 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button
              onClick={() => scrollTo('projects')}
              className="group h-auto gap-2 rounded-xl bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-6 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--glow)]"
            >
              View My Projects
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo('contact')}
              className="h-auto gap-2 rounded-xl px-6 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact Me
            </Button>
          </motion.div>

          {socials.length > 0 && (
            <motion.div
              initial={reduce ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex items-center gap-5"
            >
              <span className="label-mono text-[var(--muted)]">Find me —</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  aria-label={s.label}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          )}
        </div>

        {/* Kanan: foto / monogram */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative w-full max-w-[320px]">
            <div className="border border-[var(--border)] bg-[var(--surface)] backdrop-blur-md">
              <div className="flex aspect-square items-center justify-center overflow-hidden">
                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center bg-linear-to-br from-[var(--accent)] to-[var(--accent-2)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.28),transparent_55%)]" />
                    <span className="relative font-display text-8xl font-bold text-white">
                      {profile.initials}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
