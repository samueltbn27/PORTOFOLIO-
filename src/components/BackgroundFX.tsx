import { motion } from 'framer-motion'
import VantaCloudsBg from './VantaCloudsBg'

/**
 * Background: awan 3D (Vanta.js) di belakang seluruh konten.
 */
export default function BackgroundFX({ dark }: { dark: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <VantaCloudsBg dark={dark} />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 115%, var(--scrim-c) 0%, transparent 60%), linear-gradient(180deg, var(--scrim-a) 0%, var(--scrim-b) 45%, var(--scrim-c) 100%)'
        }}
      />
    </div>
  )
}

export function SectionHeading({
  index,
  kicker,
  title,
  subtitle
}: {
  index: string
  kicker: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 max-w-3xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="label-mono text-[var(--accent)]">{index}</span>
        <span className="label-mono text-[var(--muted)]">{kicker}</span>
        <span className="h-px flex-1 bg-[var(--border)]" />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">{subtitle}</p>}
    </motion.div>
  )
}
