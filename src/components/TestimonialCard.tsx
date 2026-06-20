import { motion } from 'framer-motion'

interface Props {
  quote: string
  author: string
  role?: string
  stars?: number
  delay?: number
}

export function TestimonialCard({ quote, author, role, stars = 5, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
      whileHover={{ y: -4 }}
      className="relative bg-[#e0e5ec] rounded-lg p-8 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] text-center"
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
        <div className="push-pin" />
      </div>
      <div className="pt-4">
        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: stars }).map((_, i) => (
            <motion.svg
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 + i * 0.1 }}
              className="w-5 h-5 text-[#ff4757] fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>
        <p className="text-text-muted italic mb-4 leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <p className="font-bold text-text-primary">{author}</p>
        {role && <p className="text-text-muted text-sm font-mono">{role}</p>}
      </div>
    </motion.div>
  )
}
