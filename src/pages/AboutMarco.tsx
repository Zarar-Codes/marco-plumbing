import { Phone, Mail, MapPin, Shield, Clock, Heart, Wrench } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { IconHousing } from '../components/UIComponents'
import { LED } from '../components/ManufacturingDetails'

const values = [
  { icon: Shield, title: 'Honest Pricing', desc: 'We believe in transparency. You get the full price before any work begins — no hidden fees, no surprises.' },
  { icon: Clock, title: 'Professionalism', desc: 'Licensed, insured, and trained plumbers who respect your home, your time, and your budget.' },
  { icon: Heart, title: 'No Upselling', desc: 'We give you options and honest recommendations. We never pressure you into services you don\'t need.' },
  { icon: Wrench, title: 'Community Giving', desc: 'We believe in giving back to the communities we serve through local sponsorships and charitable work.' },
]

export default function AboutMarco() {
  return (
    <PageTransition>
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <LED color="green" label="About Marco Plumbing" />
              <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 drop-shadow-[0_2px_0_#ffffff]">
                <WordsPullUp text="Built on Honesty, Quality & Trust" />
              </h1>
              <p className="text-text-muted leading-relaxed mb-6">
                Marco Plumbing was founded by Mark Fermo, a Master Plumber with decades of experience serving Durham Region and the GTA. What started as a small operation has grown into one of the area&rsquo;s most trusted plumbing companies — built on a foundation of honest pricing, quality workmanship, and genuine care for customers.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Today, we serve residential homeowners, commercial property managers, general contractors, and real estate professionals across Durham Region, Toronto, and surrounding areas. Every job — big or small — gets the same commitment to excellence.
              </p>
              <div className="font-mono text-sm text-text-muted">
                <p className="mb-1"><span className="text-accent font-bold">→</span> Licensed Master Plumber</p>
                <p className="mb-1"><span className="text-accent font-bold">→</span> Serving Since 2003</p>
                <p className="mb-1"><span className="text-accent font-bold">→</span> Gas Safe Registered</p>
                <p><span className="text-accent font-bold">→</span> Fully Insured</p>
              </div>
            </div>
            <FadeInWhenVisible>
              <div className="relative bg-[#e0e5ec] rounded-lg p-2 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
                <div className="corner-screws" />
                <div className="aspect-[3/4] bg-[#d1d9e6] rounded-lg overflow-hidden">
                  <img src="/images/mark-fermo.webp" alt="Mark Fermo - Master Plumber, Marco Plumbing" className="w-full h-full object-cover" />
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-12 drop-shadow-[0_1px_0_#ffffff]">Our Values</h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <FadeInWhenVisible key={v.title} delay={i * 0.1}>
                <div className="bg-[#e0e5ec] rounded-lg p-8 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] flex items-start gap-5">
                  <div className="corner-screws" />
                  <IconHousing icon={v.icon} />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{v.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto bg-[#e0e5ec] rounded-lg p-8 md:p-12 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
            <div className="corner-screws" />
            <h3 className="text-2xl font-bold text-text-primary mb-6 drop-shadow-[0_1px_0_#ffffff]">Contact Marco Plumbing</h3>
            <div className="space-y-4">
              <a href="tel:1-866-619-9700" className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
                <Phone size={18} className="text-accent" />
                <span className="font-mono font-bold">1-866-619-9700</span>
              </a>
              <a href="mailto:info@marcoplumbing.ca" className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
                <Mail size={18} className="text-accent" />
                info@marcoplumbing.ca
              </a>
              <div className="flex items-start gap-3 text-text-muted">
                <MapPin size={18} className="text-accent mt-0.5" />
                <span>Durham Region &amp; Greater Toronto Area, ON</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
