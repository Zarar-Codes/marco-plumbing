import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

const MotionLink = motion.create(Link)

export function IconHousing({ icon: Icon, className = '' }: { icon: LucideIcon; className?: string }) {
  return (
    <div className={`w-14 h-14 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] flex items-center justify-center ${className}`}>
      <Icon size={24} strokeWidth={1.5} className="text-[#ff4757]" />
    </div>
  )
}

export function RecessedIcon({ icon: Icon, className = '' }: { icon: LucideIcon; className?: string }) {
  return (
    <div className={`w-12 h-12 rounded-full bg-[#d1d9e6] shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center ${className}`}>
      <Icon size={20} strokeWidth={1.5} className="text-[#ff4757]" />
    </div>
  )
}

export function ServiceCard({ icon: Icon, title, desc, href = '#', delay = 0 }: { icon: LucideIcon; title: string; desc: string; href?: string; delay?: number }) {
  return (
    <MotionLink
      to={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
      whileHover={{ y: -6, boxShadow: '12px 12px 24px #babecc, -12px -12px 24px #ffffff, inset 1px 1px 0 rgba(255,255,255,0.5)' }}
      className="group relative bg-[#e0e5ec] rounded-lg p-8 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] transition-shadow duration-300"
    >
      <div className="corner-screws" />
      <div className="flex flex-col items-center text-center gap-4">
        <motion.div
          className="w-16 h-16 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] flex items-center justify-center"
          whileHover={{ rotate: 12, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon size={28} strokeWidth={1.5} className="text-[#ff4757]" />
        </motion.div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
        <span className="text-accent font-semibold text-sm mt-2 group-hover:underline">
          Learn More →
        </span>
      </div>
    </MotionLink>
  )
}
