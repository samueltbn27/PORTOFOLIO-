import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const FINE_POINTER = window.matchMedia?.('(pointer: fine)').matches ?? false

/**
 * Custom cursor (desktop, pointer halus, motion aktif).
 */
export default function CustomCursor() {
  const reduce = useReducedMotion()
  const enabled = FINE_POINTER && !reduce
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      window.requestAnimationFrame(() => setRingPos({ x: e.clientX, y: e.clientY }))
    }
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovering(!!t.closest('a, button, [data-cursor="hover"], input, textarea, select, [role="button"]'))
    }
    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => {
      setPos({ x: -100, y: -100 })
      setRingPos({ x: -100, y: -100 })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  const ringScale = hovering ? 1.6 : pressed ? 0.8 : 1

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
        }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[199] hidden md:block"
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${ringScale})`,
          transition: 'transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <div className="h-9 w-9 rounded-full border border-[var(--accent)]/60" />
      </div>
    </>
  )
}
