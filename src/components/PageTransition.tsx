import { motion } from 'framer-motion'
const pageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
