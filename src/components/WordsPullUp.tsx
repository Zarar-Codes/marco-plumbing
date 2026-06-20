import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  text: string
  className?: string
  once?: boolean
}

export function WordsPullUp({ text, className = '', once = true }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const words = text.split(' ')

  return (
    <motion.p ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            delay: i * 0.06,
            ease: [0.175, 0.885, 0.32, 1.275],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}
