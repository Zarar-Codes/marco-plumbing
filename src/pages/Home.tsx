import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wrench, Building2, HardHat, Shield, Clock, Heart, ChevronRight, Phone, ArrowRight } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'

const MotionLink = motion.create(Link)
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { CountUp } from '../components/CountUp'
import { ServiceCard } from '../components/UIComponents'
import { TestimonialCard } from '../components/TestimonialCard'
import { CallbackForm } from '../components/CallbackForm'
import { LED, VentSlots } from '../components/ManufacturingDetails'

const services = [
  { icon: Wrench, title: 'Residential', desc: 'Up-front pricing, licensed plumbers, and a 1-year warranty on all residential plumbing services.', href: '/residential' },
  { icon: Building2, title: 'Commercial', desc: '24/7 availability with a single point of contact for businesses across Durham & the GTA.', href: '/commercial' },
  { icon: HardHat, title: 'New Construction', desc: 'Full-service mechanical construction for low-rise residential, commercial, and industrial projects.', href: '/new-construction' },
]

const trustItems = [
  { icon: Shield, label: 'Honest Upfront Pricing', desc: 'No hidden fees. Ever.' },
  { icon: Clock, label: '20+ Years Experience', desc: 'Serving Durham since 2003' },
  { icon: Wrench, label: 'No Upselling', desc: 'Options, not sales pitches.' },
  { icon: Heart, label: 'Community Giving', desc: 'We give back locally.' },
]

const testimonials = [
  { quote: 'Marco Plumbing saved our basement after a burst pipe. They arrived within 2 hours, gave us a fair price, and had everything fixed by the next day. Highly recommend!', author: 'Sarah M.', role: 'Whitby Homeowner', stars: 5 },
  { quote: 'As a real estate agent, I trust Marco Plumbing for all my clients\' inspection needs. They\'re thorough, honest, and always professional.', author: 'James K.', role: 'Real Estate Agent, Durham', stars: 5 },
  { quote: 'We use Marco for all our new construction projects. Their team integrates seamlessly with our schedule and delivers quality work every time.', author: 'Premium Homes Inc.', role: 'General Contractor', stars: 5 },
]

const blogPosts = [
  { title: 'What to Do When Your Basement Floods: A Step-by-Step Emergency Guide', excerpt: 'From shutting off the main water valve to calling a plumber, here\'s everything you need to know about handling basement floods.', date: 'Oct 12, 2024', category: 'Emergency Tips' },
  { title: 'The Top 5 Plumbing Issues Real Estate Agents Should Watch For', excerpt: 'A guide for real estate agents on spotting common plumbing problems during home inspections.', date: 'Sep 28, 2024', category: 'Real Estate' },
  { title: 'How to Prevent Frozen Pipes This Winter', excerpt: 'Protect your home from costly pipe bursts this winter with these proven prevention tips.', date: 'Sep 15, 2024', category: 'Seasonal' },
]

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="min-h-[70vh] lg:min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#d1d9e6] opacity-30 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#babecc] opacity-20 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(46,213,115,0.6)] animate-pulse" />
                <LED color="green" label="24/7 ONLINE" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.1] mb-4 md:mb-6 drop-shadow-[0_2px_0_#ffffff]">
                <WordsPullUp text="Honest Plumbing Service Means We Get It Right" />
              </h1>
              <div className="flex items-center gap-3 mb-5 md:mb-8">
                <div className="w-2 h-2 rounded-full bg-accent shadow-led-red" />
                <span className="font-mono text-sm text-text-muted tracking-wider">Up-front pricing · Licensed plumbers · 1-year warranty</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ y: 2, boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff' }}
                  className="px-8 py-4 bg-[#e0e5ec] rounded-lg shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] font-bold text-text-primary flex items-center gap-2"
                >
                  Get a Free Quote <ArrowRight size={18} />
                </MotionLink>
                <motion.a
                  href="tel:1-866-619-9700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-accent text-white rounded-lg font-bold flex items-center gap-2 shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]"
                >
                  <Phone size={18} /> 24/7 Emergency
                </motion.a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="relative bg-[#2d3436] rounded-2xl p-8 shadow-dark-panel scanlines carbon-fiber"
              >
                <div className="absolute top-4 right-4">
                  <VentSlots />
                </div>
                  <div className="space-y-4">
                  <div className="flex justify-center mb-2">
                    <img src="/images/mark-fermo.webp" alt="Marco Plumbing" className="h-10 object-contain brightness-0 invert opacity-80" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(46,213,115,0.6)] animate-pulse" />
                    <span className="font-mono text-xs text-green-400 tracking-wider">SYS.ONLINE</span>
                    <span className="text-white/20 mx-2">|</span>
                    <span className="font-mono text-xs text-white/40">STATUS: OPERATIONAL</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['PRESSURE', 'TEMP', 'FLOW'].map((label) => (
                      <div key={label} className="bg-[#1a1a2e]/50 rounded-lg p-3">
                        <span className="font-mono text-[10px] text-white/40 block mb-1">{label}</span>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                          className="h-1.5 rounded-full bg-gradient-to-r from-accent to-accent/50"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0 rounded-full border-2 border-white/10" />
                    <div className="absolute inset-2 rounded-full border border-white/5" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0"
                    >
                      <div className="w-3 h-3 rounded-full bg-accent absolute top-1 left-1/2 -translate-x-1/2 shadow-led-red" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-400 absolute top-4 left-1/2 -translate-x-1/2" />
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-white/30">SCANNING</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-white/20">
                    <span>RADAR: ACTIVE</span>
                    <span>UPTIME: 99.9%</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Short */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div className="relative bg-[#e0e5ec] rounded-lg p-2 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
                <div className="corner-screws" />
                <div className="aspect-[4/3] bg-[#d1d9e6] rounded-lg overflow-hidden">
                  <img src="/images/mark-fermo.webp" alt="Mark Fermo - Master Plumber" className="w-full h-full object-cover" />
                </div>
              </div>
            </FadeInWhenVisible>
            <div>
              <FadeInWhenVisible>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 drop-shadow-[0_1px_0_#ffffff]">
                  Plumbing Services in Durham Region Since 2003
                </h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  Founded by Mark Fermo, Master Plumber, Marco Plumbing has been serving Durham Region and the GTA with honest, upfront plumbing services. We specialize in residential, commercial, and new construction plumbing — with a commitment to quality workmanship and transparent pricing.
                </p>
              </FadeInWhenVisible>
              <div className="flex flex-wrap gap-3">
                {['Gas Safe Licensed', '5-Star Rated', '1-Year Warranty', 'Insured'].map((badge) => (
                  <div key={badge} className="px-4 py-2 bg-[#e0e5ec] rounded-md shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff] font-mono text-xs font-bold text-text-muted">
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 px-4 blueprint-grid">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary text-center mb-4 drop-shadow-[0_1px_0_#ffffff]">
              Our Services
            </h2>
            <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
              From emergency repairs to full-scale new construction, we handle it all.
            </p>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary text-center mb-4 drop-shadow-[0_1px_0_#ffffff]">
              Why Choose Marco
            </h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {trustItems.map((item, i) => (
              <FadeInWhenVisible key={item.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d1d9e6] shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                    <item.icon size={24} strokeWidth={1.5} className="text-accent" />
                  </div>
                  <p className="font-mono text-sm font-bold text-text-primary mb-1">{item.label}</p>
                  {item.label === '20+ Years Experience' ? (
                    <p className="text-text-muted text-xs">
                      <CountUp end={20} suffix="+" /> years serving Durham
                    </p>
                  ) : (
                    <p className="text-text-muted text-xs">{item.desc}</p>
                  )}
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary text-center mb-12 drop-shadow-[0_1px_0_#ffffff]">
              What Our Clients Say
            </h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} {...t} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary text-center mb-4 drop-shadow-[0_1px_0_#ffffff]">
              Latest from Our Blog
            </h2>
            <p className="text-text-muted text-center mb-12">Plumbing tips, guides, and industry insights.</p>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <FadeInWhenVisible key={post.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group bg-[#e0e5ec] rounded-lg overflow-hidden shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]"
                >
                  <div className="corner-screws" />
                  <div className="h-48 bg-[#d1d9e6] relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-text-muted/20 to-text-muted/10" />
                    <div className="absolute top-3 left-3">
                      <div className="bg-[#f5e6a3] px-2 py-1 font-mono text-[10px] font-bold text-[#2d3436] rotate-[-2deg] shadow-sm">
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[10px] tracking-widest text-accent uppercase font-bold">{post.category}</span>
                    <h3 className="font-bold text-text-primary mt-2 mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{post.excerpt}</p>
                    <span className="inline-block mt-4 text-sm font-semibold text-accent group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-10 md:py-16 px-4 bg-[#2d3436]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInWhenVisible>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(46,213,115,0.6)] animate-pulse" />
              <span className="font-mono text-xs text-green-400 tracking-wider uppercase">Financing Available</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow-md">
              Flexible Financing Options
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Don&rsquo;t let unexpected plumbing costs stress you out. We offer financing options through Financeit to help you get the repairs you need today.
            </p>
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-bold shadow-led-red"
            >
              Learn More <ChevronRight size={18} />
            </MotionLink>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Callback Form */}
      <CallbackForm />
    </PageTransition>
  )
}
