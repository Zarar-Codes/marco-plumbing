import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export function EmergencyBanner() {
  return (
    <>
      <div className="hidden md:block bg-[#2d3436] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-6">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(255,71,87,0.8)]"
            />
            <span className="font-mono text-xs tracking-widest text-white/80">24/7 EMERGENCY SERVICE</span>
          </div>
          <a href="tel:1-866-619-9700" className="font-mono text-sm font-bold text-white hover:text-accent transition-colors">
            1-866-619-9700
          </a>
        </div>
      </div>

      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#2d3436] border-t-2 border-accent shadow-dark-panel"
      >
        <a
          href="tel:1-866-619-9700"
          className="flex items-center justify-center gap-3 py-3 px-4 text-white font-bold text-sm"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-accent shadow-led-red"
          />
          <Phone size={16} className="text-accent" />
          <span>EMERGENCY 4-HOUR CALLOUT – 1-866-619-9700</span>
        </a>
      </motion.div>
    </>
  )
}
