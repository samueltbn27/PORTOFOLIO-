import { BookOpen, CalendarDays, MapPin } from 'lucide-react'
import { education } from '../data/experience'
import { SectionHeading } from './BackgroundFX'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          kicker="Education"
          title="Education history"
          subtitle="A look at my academic background."
        />

        <div className="space-y-6">
          {education.map((item, i) => (
            <Reveal key={item.id} delay={0.08 * i}>
              <div className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-xl hover:shadow-[var(--glow)] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[var(--accent)]">
                      <BookOpen size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">{item.program}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold">{item.school}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
                    <CalendarDays size={13} />
                    {item.period}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {item.location && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                      <MapPin size={12} />
                      {item.location}
                    </span>
                  )}
                  {item.note && (
                    <span className="inline-flex items-center rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                      {item.note}
                    </span>
                  )}
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Focus areas</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.focus.map((f) => (
                      <span key={f} className="rounded-md bg-[color-mix(in_srgb,var(--surface-2)_70%,transparent)] px-2.5 py-1 text-xs font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{item.activities}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
