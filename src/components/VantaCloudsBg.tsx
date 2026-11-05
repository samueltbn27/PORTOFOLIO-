import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import type CLOUDS from 'vanta/dist/vanta.clouds.min'

/**
 * Background awan 3D berbasis Vanta.js (three.js).
 * Palet otomatis menyesuaikan tema: siang (terang) / malam (gelap).
 */
const PALETTE_DAY = {
  backgroundColor: 0xffffff,
  skyColor: 0x68b8d7,
  cloudColor: 0xadc1de,
  cloudShadowColor: 0x183550,
  sunColor: 0xff9919,
  sunGlareColor: 0xff6633,
  sunlightColor: 0xff9933
}

const PALETTE_NIGHT = {
  backgroundColor: 0x070b14,
  skyColor: 0x0d1b2e,
  cloudColor: 0x2a3b5c,
  cloudShadowColor: 0x04070d,
  sunColor: 0xdbe4ff,
  sunGlareColor: 0x88aaff,
  sunlightColor: 0xaac4ff
}

export default function VantaCloudsBg({ dark }: { dark: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<{ setOptions: (o: object) => void; destroy: () => void } | null>(null)
  const darkRef = useRef(dark)
  const reduce = useReducedMotion()

  useEffect(() => {
    darkRef.current = dark
  }, [dark])

  useEffect(() => {
    let cancelled = false

    Promise.all([import('three'), import('vanta/dist/vanta.clouds.min')]).then(
      ([threeModule, vantaModule]) => {
        if (cancelled || !containerRef.current) return
        try {
          const THREE = (threeModule as { default?: unknown }).default ?? threeModule
          const mod = vantaModule as unknown as { default?: typeof CLOUDS }
          const createClouds = mod.default ?? (vantaModule as unknown as typeof CLOUDS)

          const effect = createClouds({
            el: containerRef.current,
            THREE,
            mouseControls: !reduce,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            speed: 1,
            ...(darkRef.current ? PALETTE_NIGHT : PALETTE_DAY)
          })
          effectRef.current = effect
        } catch (err) {
          // eslint-disable-next-line no-console
          console.warn('[Vanta] Gagal menginisialisasi awan 3D:', err)
        }
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.warn('[Vanta] Gagal memuat modul three/vanta:', err)
      }
    )

    return () => {
      cancelled = true
      effectRef.current?.destroy()
      effectRef.current = null
    }
  }, [reduce])

  useEffect(() => {
    const palette = dark ? PALETTE_NIGHT : PALETTE_DAY
    effectRef.current?.setOptions(palette)
  }, [dark])

  return <div ref={containerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}
