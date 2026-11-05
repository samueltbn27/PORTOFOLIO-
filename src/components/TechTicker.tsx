import { skillCategories } from '../data/skills'

export default function TechTicker() {
  const items = skillCategories.flatMap((c) => c.skills)

  return (
    <div className="relative border-y border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_60%,transparent)] py-5">
      <div className="marquee">
        <div className="marquee-track items-center gap-10">
          {[...items, ...items].map((skill, i) => (
            <span
              key={`${skill.name}-${i}`}
              className="inline-flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              <skill.icon size={18} className="text-[var(--accent)]" />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
