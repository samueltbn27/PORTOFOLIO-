import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../data/skills'
import { SectionHeading } from './BackgroundFX'
import Reveal from './Reveal'

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0]

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          kicker="Skills"
          title="What I work with"
          subtitle="Select a category to explore my skills."
        />

        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-[var(--border)]">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              aria-pressed={activeId === cat.id}
              className={`relative -mb-px border-b-2 pb-3 text-sm font-medium transition-colors ${
                activeId === cat.id
                  ? 'border-[var(--accent)] text-[var(--text)]'
                  : 'border-transparent text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {active.skills.map((skill, i) => (
                <Reveal key={skill.name} delay={0.05 * i}>
                  <div className="group flex h-full flex-col border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:shadow-[4px_4px_0_0_var(--border)]">
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex h-11 w-11 items-center justify-center border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-2)_60%,transparent)] text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                        <skill.icon size={19} />
                      </span>
                      <span className="label-mono text-[var(--muted)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold">{skill.name}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
