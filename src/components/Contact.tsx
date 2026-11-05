import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Linkedin, Mail, AlertCircle, CheckCircle2 } from 'lucide-react'
import { contactConfig, contactInfo } from '../data/contact'
import { profile } from '../data/profile'
import { SectionHeading } from './BackgroundFX'
import Magnetic from './Magnetic'
import { Button } from './ui/button'

type Status =
  | { state: 'idle' }
  | { state: 'sending' }
  | { state: 'success' }
  | { state: 'error'; message: string }

const initialForm = { name: '', email: '', subject: '', message: '' }

const contactLinks = [
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'Samuel Tambunan', href: contactInfo.linkedin }
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({})
  const [status, setStatus] = useState<Status>({ state: 'idle' })

  const validate = () => {
    const next: Partial<typeof initialForm> = {}
    if (!form.name.trim()) next.name = 'Full name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.subject.trim()) next.subject = 'Subject is required.'
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // Tanpa endpoint, gunakan mailto: sebagai alternatif yang jujur.
    if (!contactConfig.endpoint) {
      const subject = encodeURIComponent(form.subject)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
      setStatus({ state: 'success' })
      return
    }

    setStatus({ state: 'sending' })
    try {
      const res = await fetch(contactConfig.endpoint, {
        method: contactConfig.method,
        headers: contactConfig.headers,
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(`Server responded with status ${res.status}`)
      setStatus({ state: 'success' })
      setForm(initialForm)
    } catch (err) {
      setStatus({
        state: 'error',
        message: err instanceof Error ? err.message : 'Something went wrong while sending your message.'
      })
    }
  }

  const inputClass = (hasError?: string) =>
    `w-full rounded-xl border bg-[color-mix(in_srgb,var(--surface-2)_60%,transparent)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/70 outline-none transition-colors focus:border-[var(--accent)] ${
      hasError ? 'border-red-400/70' : 'border-[var(--border)]'
    }`

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          kicker="Contact"
          title="Get in touch"
          subtitle="Have a question, a project, or want to discuss something? Send a message through the form below."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info kontak */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 backdrop-blur-md">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--glow)] blur-3xl" />
              <p className="font-display text-xl font-bold">{profile.name}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{profile.role} · {profile.location}</p>
            </div>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                  <link.icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm font-semibold">{link.value}</span>
                </span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-md sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className={inputClass(errors.name)}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                    <AlertCircle size={13} /> {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className={inputClass(errors.email)}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                    <AlertCircle size={13} /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="e.g. Project collaboration"
                className={inputClass(errors.subject)}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle size={13} /> {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or question…"
                className={`${inputClass(errors.message)} resize-none`}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle size={13} /> {errors.message}
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button
                  type="submit"
                  disabled={status.state === 'sending'}
                  className="h-auto gap-2 rounded-xl bg-linear-to-r from-[var(--accent)] to-[var(--accent-2)] px-7 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--glow)] disabled:cursor-not-allowed"
                >
                  {status.state === 'sending' ? 'Sending…' : 'Send Message'}
                  <Send size={15} />
                </Button>
              </Magnetic>

              {status.state === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm font-semibold text-emerald-400"
                  role="status"
                >
                  <CheckCircle2 size={16} />
                  {contactConfig.endpoint ? 'Message sent. Thank you!' : 'Opening your email client…'}
                </motion.p>
              )}
              {status.state === 'error' && (
                <p className="flex items-center gap-2 text-sm font-semibold text-red-400" role="alert">
                  <AlertCircle size={16} />
                  {status.message}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
