import { motion } from 'framer-motion'
import { Building2, FileCheck, Projector } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { IconHousing } from '../components/UIComponents'
import { CallbackForm } from '../components/CallbackForm'
import { LED, VentSlots } from '../components/ManufacturingDetails'

const features = [
  { icon: FileCheck, title: 'Design-Build', desc: 'We work with architects and builders from the design phase to ensure plumbing systems meet all code requirements and project specifications.' },
  { icon: Building2, title: 'Code Compliance', desc: 'All work meets or exceeds Ontario Building Code and local municipality requirements. Fully permitted and inspected.' },
  { icon: Projector, title: 'Project Management', desc: 'Dedicated project managers coordinate with your team to keep construction on schedule and within budget.' },
]

const partners = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5']

export default function NewConstruction() {
  return (
    <PageTransition>
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <LED color="green" label="New Construction" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mt-4 mb-6 drop-shadow-[0_2px_0_#ffffff]">
              <WordsPullUp text="Full-Service Mechanical Construction" />
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              From low-rise residential developments to commercial and industrial projects, Marco Plumbing provides complete mechanical construction services. We partner with builders, developers, and general contractors to deliver code-compliant, on-time plumbing systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-[#d1d9e6] rounded-md shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] font-mono text-xs text-text-muted">Design-Build</div>
              <div className="px-4 py-2 bg-[#d1d9e6] rounded-md shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] font-mono text-xs text-text-muted">Code Compliant</div>
              <div className="px-4 py-2 bg-[#d1d9e6] rounded-md shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] font-mono text-xs text-text-muted">Project Managed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FadeInWhenVisible key={f.title} delay={i * 0.1}>
                <div className="bg-[#e0e5ec] rounded-lg p-8 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] text-center">
                  <div className="corner-screws" />
                  <IconHousing icon={f.icon} className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-text-primary mb-2">{f.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-4 drop-shadow-[0_1px_0_#ffffff]">Project Gallery</h2>
            <p className="text-text-muted text-center mb-12">Recent construction projects we&rsquo;ve been proud to be part of.</p>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="relative bg-[#e0e5ec] rounded-lg p-2 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
                  <div className="corner-screws" />
                  <div className="aspect-[4/3] bg-[#d1d9e6] rounded-lg overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-text-muted/30 to-text-muted/10 flex items-center justify-center text-text-muted font-mono text-sm">
                      Project Photo {i}
                    </div>
                    <div className="absolute top-2 right-2">
                      <VentSlots />
                    </div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h3 className="text-xl font-bold text-text-primary text-center mb-8 drop-shadow-[0_1px_0_#ffffff]">Trusted By</h3>
          </FadeInWhenVisible>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => (
              <div key={p} className="px-8 py-4 bg-[#e0e5ec] rounded-lg shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] font-mono text-sm text-text-muted">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallbackForm />
    </PageTransition>
  )
}
