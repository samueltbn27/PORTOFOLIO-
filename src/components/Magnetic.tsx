import { useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Magnetic button: mendekat ke kursor secara halus (desktop saja).
 */
export default function Magnetic({
  children,
  strength = 0.32,
  className
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * strength,
      y: (e.clientY - (rect.top + rect.height / 2)) * strength
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        setOffset({ x: 0, y: 0 })
      }}
      className={className}
      style={{
        display: 'inline-block',
        transform: hover && !reduce ? `translate(${offset.x}px, ${offset.y}px)` : 'translate(0,0)',
        transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      {children}
    </div>
  )
}
