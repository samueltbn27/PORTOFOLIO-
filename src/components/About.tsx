import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import { SectionHeading } from './BackgroundFX'

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setDisplay(target)
      return
    }
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v))
    })
    return () => controls.stop()
  }, [inView, target, reduce])

  return (
    <p ref={ref} className="font-display text-3xl font-bold leading-none text-[var(--accent)] sm:text-4xl">
      {display}
      {suffix}
    </p>
  )
}

const quickInfo = [
  { label: 'University', value: profile.university },
  { label: 'Major', value: profile.major },
  { label: 'Location', value: profile.location },
  { label: 'Focus', value: profile.focus }
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="01" kicker="About" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <blockquote className="border-l-2 border-[var(--accent)] pl-5">
              <p className="font-display text-xl font-medium leading-snug text-[var(--text)]">
                {profile.bio}
              </p>
            </blockquote>
          </Reveal>

          <div>
            {profile.aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p className="mb-5 text-[15px] leading-relaxed text-[var(--muted)]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {quickInfo.map((info, i) => (
            <Reveal key={info.label} delay={0.06 * i} className="h-full">
              <div className="flex h-full flex-col justify-between gap-3 bg-[var(--surface)] p-5 backdrop-blur-md">
                <p className="label-mono text-[var(--muted)]">{info.label}</p>
                <p className="text-sm font-semibold leading-snug">{info.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-10 gap-y-8 lg:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.06 * i}>
              <div>
                <CountUp value={stat.value} />
                <p className="mt-2 text-xs font-medium text-[var(--muted)]">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
