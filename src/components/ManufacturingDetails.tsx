import { motion } from 'framer-motion'

export function Screws() {
  return (
    <>
      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#babecc] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#babecc] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />
      <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#babecc] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />
      <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#babecc] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />
    </>
  )
}

export function LED({ color = 'red', label = '', active = true }: { color?: 'red' | 'green'; label?: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        animate={active ? { opacity: [1, 0.4, 1] } : { opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className={`w-[10px] h-[10px] rounded-full shadow-[0_0_10px_rgba(255,71,87,0.6)] ${
          color === 'red' ? 'bg-accent shadow-led-red' : 'bg-green-500 shadow-led-green'
        }`}
      />
      {label && <span className="font-mono text-xs text-text-muted tracking-wider uppercase">{label}</span>}
    </div>
  )
}

export function VentSlots() {
  return (
    <div className="vent-slots">
      <div className="vent-slot" />
      <div className="vent-slot" />
      <div className="vent-slot" />
    </div>
  )
}
