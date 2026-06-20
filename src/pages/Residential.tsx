import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Clock, AlertTriangle, Droplets, Thermometer, Wrench, Zap, Fan, ChevronRight } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'

const MotionLink = motion.create(Link)
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { IconHousing, RecessedIcon } from '../components/UIComponents'
import { TestimonialCard } from '../components/TestimonialCard'
import { CallbackForm } from '../components/CallbackForm'
import { LED } from '../components/ManufacturingDetails'

const valueProps = [
  { icon: Shield, title: 'Up-Front Pricing', desc: 'We give you the price before any work begins — no surprises, no hidden fees.' },
  { icon: Clock, title: '4-Hour Emergency Response', desc: 'Available 24/7 for emergency plumbing services across Durham & the GTA.' },
  { icon: AlertTriangle, title: 'Options, Not Upsells', desc: 'We present you with choices and let you decide what works for your home and budget.' },
]

const services = [
  { icon: Droplets, title: 'Emergency Leaks & Pipe Repairs', desc: 'Rapid response for burst pipes, major leaks, and water damage prevention.' },
  { icon: Wrench, title: 'Drain & Sewer Repairs', desc: 'Complete drain cleaning, sewer line repair, and drain snaking services.' },
  { icon: Thermometer, title: 'Water Heater Repairs & Installs', desc: 'Tank and tankless water heater installation, repair, and maintenance.' },
  { icon: Zap, title: 'Backwater Valves', desc: 'Installation and repair of backwater valves to protect your home from sewer backups.' },
  { icon: Fan, title: 'Toilet Installs & Repairs', desc: 'Professional toilet installation, repair, and replacement services.' },
  { icon: AlertTriangle, title: 'Frozen Pipe Thawing', desc: 'Safe and effective frozen pipe thawing to prevent bursts and water damage.' },
]

const testimonials = [
  { quote: "Our basement flooded at 2 AM. Marco's team arrived within an hour, fixed the burst pipe, and helped with cleanup. True lifesavers!", author: 'Jennifer L.', role: 'Homeowner, Oshawa', stars: 5 },
  { quote: "Marco replaced our old water heater. The pricing was exactly as quoted, and the installation was flawless. Highly recommend.", author: 'Mike R.', role: 'Homeowner, Whitby', stars: 5 },
]

export default function Residential() {
  return (
    <PageTransition>
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <LED color="green" label="Residential Services" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mt-4 mb-6 drop-shadow-[0_2px_0_#ffffff]">
              <WordsPullUp text="Upfront & Transparent Residential Plumbing Services in Durham & GTA" />
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              From emergency repairs to scheduled maintenance, Marco Plumbing provides honest, reliable residential plumbing services across Durham Region and the Greater Toronto Area.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-[#d1d9e6] rounded-md shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] font-mono text-xs text-text-muted">Licensed</div>
              <div className="px-4 py-2 bg-[#d1d9e6] rounded-md shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] font-mono text-xs text-text-muted">Insured</div>
              <div className="px-4 py-2 bg-[#d1d9e6] rounded-md shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] font-mono text-xs text-text-muted">1-Year Warranty</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((v, i) => (
              <FadeInWhenVisible key={v.title} delay={i * 0.1}>
                <div className="bg-[#e0e5ec] rounded-lg p-8 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] text-center">
                  <div className="corner-screws" />
                  <IconHousing icon={v.icon} className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-text-primary mb-2">{v.title}</h3>
                  <p className="text-text-muted text-sm">{v.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-12 drop-shadow-[0_1px_0_#ffffff]">Residential Services</h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeInWhenVisible key={s.title} delay={i * 0.05}>
                <motion.div whileHover={{ y: -4 }} className="bg-[#e0e5ec] rounded-lg p-6 shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] flex items-start gap-4">
                  <div className="corner-screws" />
                  <RecessedIcon icon={s.icon} />
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">{s.title}</h3>
                    <p className="text-text-muted text-sm">{s.desc}</p>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-text-primary text-center mb-12 drop-shadow-[0_1px_0_#ffffff]">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} {...t} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 bg-[#2d3436]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(46,213,115,0.6)] animate-pulse" />
            <span className="font-mono text-xs text-green-400">FINANCING AVAILABLE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">Financing Options Available</h2>
          <p className="text-white/60 mb-8">Don&rsquo;t let cost stop you from getting the repairs you need. Ask us about financing.</p>
          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-bold"
          >
            Learn More <ChevronRight size={18} />
          </MotionLink>
        </div>
      </section>

      <CallbackForm />
    </PageTransition>
  )
}
