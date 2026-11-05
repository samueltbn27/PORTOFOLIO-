import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/certifications'
import { SectionHeading } from './BackgroundFX'
import Reveal from './Reveal'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          kicker="Certifications"
          title="Certifications & achievements"
          subtitle="Credentials earned through bootcamps, competency programs, and official courses."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={0.05 * i} className="h-full">
              <div className="group flex h-full flex-col border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:shadow-[4px_4px_0_0_var(--border)]">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-2)_60%,transparent)] text-[var(--accent)]">
                    <BadgeCheck size={20} />
                  </span>
                  <span className="label-mono text-[var(--muted)]">{cert.date}</span>
                </div>

                <h3 className="mt-4 font-display text-base font-bold leading-snug">{cert.title}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{cert.issuer}</p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {cert.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[color-mix(in_srgb,var(--surface-2)_70%,transparent)] px-2.5 py-1 text-[11px] font-medium text-[var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex items-center justify-center border border-[var(--border)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
