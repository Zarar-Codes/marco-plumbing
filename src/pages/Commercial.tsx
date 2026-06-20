import { motion } from 'framer-motion'
import { Building2, Clock, Headphones, Wrench, Droplets, Thermometer, Fan, Zap, Factory, ShoppingBag, Stethoscope } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { IconHousing, RecessedIcon } from '../components/UIComponents'
import { TestimonialCard } from '../components/TestimonialCard'
import { CallbackForm } from '../components/CallbackForm'
import { LED } from '../components/ManufacturingDetails'

const usps = [
  { icon: Clock, title: '24/7 Availability', desc: 'We never close. Emergency commercial service is always available.' },
  { icon: Headphones, title: 'Single Point of Contact', desc: 'One number, one team, one invoice — simplified service management.' },
  { icon: Wrench, title: 'Options to Solve Problems', desc: 'We provide multiple solutions so you can choose what fits your business best.' },
]

const services = [
  { icon: Zap, title: 'Emergency Commercial Service', desc: '24/7 emergency plumbing for businesses across Durham & GTA.' },
  { icon: Building2, title: 'Condo Building Repairs', desc: 'Comprehensive plumbing maintenance and repair for multi-unit residential buildings.' },
  { icon: Fan, title: 'Office Buildings', desc: 'Complete commercial plumbing services for office buildings and complexes.' },
  { icon: ShoppingBag, title: 'Restaurants', desc: 'Grease trap maintenance, drain cleaning, and full-service commercial kitchen plumbing.' },
  { icon: Factory, title: 'Industrial', desc: 'Heavy-duty plumbing solutions for industrial facilities and warehouses.' },
  { icon: Thermometer, title: 'Backflow Prevention', desc: 'Backflow prevention device installation, testing, and certification.' },
  { icon: Droplets, title: 'Water Heaters', desc: 'Commercial water heater installation, repair, and maintenance.' },
  { icon: Stethoscope, title: 'Drain Jetting & Camera Inspection', desc: 'Hydro-jetting and video camera inspection for commercial drains and sewers.' },
]

const testimonials = [
  { quote: "Marco Plumbing handles all our properties. Their single-point-of-contact system makes my job so much easier.", author: 'David P.', role: 'Property Manager, Durham Region', stars: 5 },
  { quote: "Our restaurant kitchen drain was constantly backing up. Marco's team installed a new grease trap and we haven't had an issue since.", author: 'Maria G.', role: 'Restaurant Owner, Pickering', stars: 5 },
]

export default function Commercial() {
  return (
    <PageTransition>
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <LED color="green" label="Commercial Services" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mt-4 mb-6 drop-shadow-[0_2px_0_#ffffff]">
              <WordsPullUp text="Trusted by Businesses Across Durham & the GTA" />
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Marco Plumbing provides reliable, professional commercial plumbing services. We understand that downtime costs your business money — so we respond fast and fix it right the first time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {usps.map((u, i) => (
              <FadeInWhenVisible key={u.title} delay={i * 0.1}>
                <div className="bg-[#e0e5ec] rounded-lg p-8 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] text-center">
                  <div className="corner-screws" />
                  <IconHousing icon={u.icon} className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-text-primary mb-2">{u.title}</h3>
                  <p className="text-text-muted text-sm">{u.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-12 drop-shadow-[0_1px_0_#ffffff]">Commercial Services</h2>
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
          <h2 className="text-3xl font-extrabold text-text-primary text-center mb-12 drop-shadow-[0_1px_0_#ffffff]">Trusted by Businesses</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} {...t} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      <CallbackForm />
    </PageTransition>
  )
}
