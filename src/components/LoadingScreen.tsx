import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export default function LoadingScreen({ done }: { done: boolean }) {
  const reduce = useReducedMotion()

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center gap-6 bg-[var(--bg)]"
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-1.5"
          >
            <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--accent)] [animation-delay:0ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--accent-2)] [animation-delay:120ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--accent)] [animation-delay:240ms]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
