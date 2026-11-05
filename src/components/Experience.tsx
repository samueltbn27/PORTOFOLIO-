import { Award, Trophy, GraduationCap } from 'lucide-react'
import { experiences } from '../data/experience'
import { SectionHeading } from './BackgroundFX'
import Reveal from './Reveal'

const typeIcon = (type: string) => {
  if (type === 'Lomba') return Trophy
  if (type === 'Pelatihan') return GraduationCap
  return Award
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          kicker="Experience"
          title="Activities & achievements"
          subtitle="Organizations, training, competitions, and certifications."
        />

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent md:left-1/2" />

          <div className="space-y-10">
            {experiences.map((item, i) => {
              const Icon = typeIcon(item.type)
              const left = i % 2 === 0
              return (
                <Reveal key={item.id} delay={0.05 * i}>
                  <div
                    className={`relative flex flex-col gap-4 pl-14 md:w-1/2 md:pl-0 ${
                      left ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <span
                      className={`absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-lg shadow-[var(--glow)] md:top-2 ${
                        left ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                      }`}
                    >
                      <Icon size={16} />
                    </span>

                    <div className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-xl hover:shadow-[var(--glow)]">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] px-3 py-1 text-[11px] font-semibold text-[var(--accent)]">
                          {item.type}
                        </span>
                        <span className="text-xs font-medium text-[var(--muted)]">{item.period}</span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-bold">{item.role}</h3>
                      <p className="text-sm font-semibold text-[var(--accent)]">{item.organization}</p>
                      <ul className="mt-3 space-y-2">
                        {item.description.map((line) => (
                          <li key={line} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted)]">
                            <span className="mt-2 h-1 w-1 shrink-0 bg-[var(--accent)]" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
