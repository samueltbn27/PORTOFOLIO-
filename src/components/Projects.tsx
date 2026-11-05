import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { projects, projectCategories, type Project } from '../data/projects'
import { SectionHeading } from './BackgroundFX'
import { Button } from './ui/button'

export default function Projects() {
  const [filter, setFilter] = useState<Project['category'] | 'all'>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          kicker="Portfolio"
          title="Selected work"
          subtitle="A selection of projects spanning web, mobile, academic work, and data analysis."
        />

        <div className="mb-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          {projectCategories.map((cat) => {
            const count =
              cat.id === 'all' ? projects.length : projects.filter((p) => p.category === cat.id).length
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                aria-pressed={filter === cat.id}
                className={`group flex items-baseline gap-1.5 text-sm font-medium transition-colors ${
                  filter === cat.id
                    ? 'text-[var(--text)]'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {cat.label}
                <span className="label-mono text-xs text-[var(--muted)]">({count})</span>
                {filter === cat.id && <span className="h-1 w-1 bg-[var(--accent)]" />}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex flex-col border border-[var(--border)] bg-[var(--surface)] backdrop-blur-md transition-colors duration-300 hover:border-[var(--accent)]/50"
              >
                <button
                  onClick={() => setSelected(project)}
                  className="shine relative block aspect-[16/10] overflow-hidden"
                  aria-label={`View details of ${project.title}`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 transition-transform duration-500 group-hover:scale-105`}
                    >
                      <div className="absolute inset-0 flex items-end justify-end p-4">
                        <div className="w-3/4 rounded-lg border border-white/25 bg-black/20 p-3 backdrop-blur-sm">
                          <div className="mb-2 flex gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-1 w-2/3 rounded bg-white/40" />
                            <div className="h-1 w-1/2 rounded bg-white/30" />
                          </div>
                          <div className="mt-3 flex items-end gap-1">
                            <div className="h-4 w-2 rounded-sm bg-white/70" />
                            <div className="h-7 w-2 rounded-sm bg-white/80" />
                            <div className="h-5 w-2 rounded-sm bg-white/60" />
                            <div className="h-9 w-2 rounded-sm bg-white/90" />
                            <div className="h-6 w-2 rounded-sm bg-white/65" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-left">
                    <div className="flex items-start justify-between">
                      <span className="label-mono text-white/90">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {project.year && (
                        <span className="label-mono text-white/80">{project.year}</span>
                      )}
                    </div>
                    <div>
                      <p className="label-mono mb-1 text-white/70">
                        {projectCategories.find((c) => c.id === project.category)?.label}
                      </p>
                      <h3 className="font-display text-xl font-bold leading-tight text-white shadow-sm">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="label-mono text-[11px] text-[var(--muted)]">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="label-mono text-[11px] text-[var(--accent)]">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex items-center gap-4 border-t border-[var(--border)] pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-2)]"
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                      >
                        <Github size={14} />
                        Repo
                      </a>
                    )}
                    <button
                      onClick={() => setSelected(project)}
                      className="ml-auto text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Detail ${selected.title}`}
          >
            <button
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              aria-label="Close dialog"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="label-mono text-[var(--muted)]">
                    {projectCategories.find((c) => c.id === selected.category)?.label}
                    {selected.year ? ` · ${selected.year}` : ''}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{selected.title}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--border)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-sm leading-relaxed text-[var(--muted)]">{selected.longDescription}</p>

              {selected.highlights.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {selected.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <span className="label-mono mt-0.5 text-[var(--accent)]">/</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-[var(--border)] pt-5">
                {selected.tech.map((t) => (
                  <span key={t} className="label-mono text-xs text-[var(--muted)]">
                    {t}
                  </span>
                ))}
              </div>

              {(selected.liveUrl || selected.repoUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {selected.liveUrl && (
                    <Button
                      render={<a href={selected.liveUrl} target="_blank" rel="noreferrer noopener" />}
                      className="h-auto gap-2 rounded-xl bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--glow)]"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </Button>
                  )}
                  {selected.repoUrl && (
                    <Button
                      variant="outline"
                      render={<a href={selected.repoUrl} target="_blank" rel="noreferrer noopener" />}
                      className="h-auto gap-2 rounded-xl px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <Github size={15} />
                      GitHub Repository
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
