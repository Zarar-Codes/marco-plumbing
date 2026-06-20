import { motion } from 'framer-motion'
import { useState } from 'react'
import { FileText, ChevronDown, Home, AlertTriangle, Wrench, Search } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { IconHousing } from '../components/UIComponents'
import { LED } from '../components/ManufacturingDetails'

const issues = [
  { icon: AlertTriangle, title: 'Old or Deteriorating Pipes', desc: 'Homes with galvanized steel or polybutylene pipes often need replacement before closing. We provide inspection reports buyers and lenders trust.' },
  { icon: Wrench, title: 'Water Heater Age & Condition', desc: 'Water heaters past their lifespan (10-15 years) are a common negotiation point. We can assess and quote replacements quickly.' },
  { icon: Home, title: 'Sewer Line & Drain Issues', desc: 'A camera inspection can reveal hidden sewer line problems that could cost thousands. We offer same-day inspections for time-sensitive deals.' },
  { icon: Search, title: 'Hidden Leaks & Moisture Damage', desc: 'We use thermal imaging and moisture meters to detect hidden leaks that could affect financing or inspection conditions.' },
]

const faqs = [
  { q: 'What plumbing issues should I look for during a home inspection?', a: 'Key issues include water heater age, visible pipe material (especially galvanized steel or polybutylene), signs of past leaks, water pressure, and drainage speed. We recommend a full plumbing inspection for any property built before 1990.' },
  { q: 'How fast can Marco Plumbing complete a plumbing inspection?', a: 'We offer same-day and next-day inspections for real estate transactions. Most standard inspections take 1-2 hours, and you\'ll receive a detailed report within 24 hours.' },
  { q: 'Do you provide quotes for repairs that come up during inspections?', a: 'Yes. We provide detailed, itemized quotes for any issues discovered during the inspection. These quotes are valid for 30 days and can be used for negotiating with sellers.' },
  { q: 'What areas do you serve for real estate plumbing inspections?', a: 'We serve all of Durham Region including Ajax, Whitby, Oshawa, Pickering, Clarington, Newcastle, Port Perry, Uxbridge, as well as Scarborough and Peterborough.' },
]

export default function RealEstate() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <PageTransition>
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <LED color="green" label="Real Estate Agents" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 drop-shadow-[0_2px_0_#ffffff]">
              <WordsPullUp text="Plumbing Knowledge for GTA Real Estate Agents" />
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Trusted plumbing expertise to help you navigate inspections, negotiations, and closings with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6] blueprint-grid">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-4 drop-shadow-[0_1px_0_#ffffff]">Common Plumbing Issues in Real Estate Transactions</h2>
            <p className="text-text-muted text-center mb-12 max-w-3xl mx-auto">
              Knowing what to look for can save your clients thousands of dollars and prevent deals from falling through.
            </p>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-6">
            {issues.map((issue, i) => (
              <FadeInWhenVisible key={issue.title} delay={i * 0.1}>
                <div className="bg-[#e0e5ec] rounded-lg p-8 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] flex items-start gap-5">
                  <div className="corner-screws" />
                  <IconHousing icon={issue.icon} />
                  <div>
                    <h3 className="font-bold text-text-primary mb-2">{issue.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{issue.desc}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-4 drop-shadow-[0_1px_0_#ffffff]">Free Plumbing Guide for Real Estate Agents</h2>
            <p className="text-text-muted text-center mb-8">Download our comprehensive PDF guide covering common plumbing issues, inspection tips, and negotiation advice for real estate professionals.</p>
          </FadeInWhenVisible>
          <div className="text-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-lg font-bold shadow-led-red"
            >
              <FileText size={20} />
              Download Free Guide (PDF)
            </motion.a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-3xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-8 drop-shadow-[0_1px_0_#ffffff]">Frequently Asked Questions</h2>
          </FadeInWhenVisible>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.05}>
                <div className="bg-[#e0e5ec] rounded-lg shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-bold text-text-primary text-sm pr-4">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className="text-accent shrink-0" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === i ? 'auto' : 0,
                      opacity: openFaq === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-text-muted text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
