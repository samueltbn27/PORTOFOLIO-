import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { contactInfo } from '../data/contact'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

const socials = [
  { icon: Github, href: contactInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email' }
].filter((s) => s.href)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            aria-label="Back to top"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent)]">
              <ArrowUp size={18} />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Back to top</span>
          </button>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {socials.length > 0 && (
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          )}

          <p className="label-mono text-center text-[var(--muted)]">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
