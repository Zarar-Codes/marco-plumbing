import { motion } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { LED } from '../components/ManufacturingDetails'

const testimonials = [
  { quote: "Marco took me on as an apprentice with no experience. The mentorship program taught me real skills — not just plumbing, but running a business with integrity.", author: 'Derek', role: 'Former Apprentice', stars: 5 },
  { quote: "What sets Marco apart is how they train. They focus on doing the job right, not just fast. That stuck with me throughout my career.", author: 'Ramos', role: 'Journeyman Plumber', stars: 5 },
]

const coreValues = [
  'Hands-on training with experienced Master Plumbers',
  'Focus on code compliance and best practices',
  'Business ethics and customer service training',
  'Pathway to journeyman certification',
]

export default function AboutMentorship() {
  return (
    <PageTransition>
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <LED color="green" label="Plumbing Mentorship" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 drop-shadow-[0_2px_0_#ffffff]">
              <WordsPullUp text="Training the Next Generation of Plumbers" />
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              We believe in training the next generation of plumbers to do things the right way. Our mentorship program combines hands-on field experience with professional development to create well-rounded, skilled tradespeople.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-4 drop-shadow-[0_1px_0_#ffffff]">Why Our Program Works</h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {coreValues.map((v, i) => (
              <FadeInWhenVisible key={v} delay={i * 0.1}>
                <div className="bg-[#e0e5ec] rounded-lg p-6 shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-led-red shrink-0" />
                  <span className="text-text-muted">{v}</span>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-text-primary text-center mb-12 drop-shadow-[0_1px_0_#ffffff]">From Our Apprentices</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeInWhenVisible key={t.author} delay={i * 0.15}>
                <div className="relative bg-[#e0e5ec] rounded-lg p-8 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
                  <div className="absolute -top-2 left-8">
                    <div className="push-pin" />
                  </div>
                  <div className="pt-4">
                    <p className="text-text-muted italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <p className="font-bold text-text-primary">{t.author}</p>
                    <p className="text-text-muted text-sm font-mono">{t.role}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-2xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-8 drop-shadow-[0_1px_0_#ffffff]">Apply for the Mentorship Program</h2>
            <p className="text-text-muted text-center mb-8">Interested in joining our team? Fill out the form below and we&rsquo;ll be in touch.</p>
          </FadeInWhenVisible>
          <div className="bg-[#e0e5ec] rounded-lg p-8 md:p-12 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
            <div className="corner-screws" />
            <form className="space-y-5">
              <input type="hidden" name="_subject" value="Mentorship Application - Marco Plumbing" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" name="first_name" placeholder="First Name *" required className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none" />
                <input type="text" name="last_name" placeholder="Last Name *" required className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none" />
              </div>
              <input type="email" name="email" placeholder="Email *" required className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none" />
              <input type="tel" name="phone" placeholder="Phone *" required className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none" />
              <textarea name="message" placeholder="Tell us about yourself and why you&rsquo;re interested in plumbing..." rows={4} className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none resize-none" />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ y: 2, boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff' }}
                className="w-full py-4 bg-[#e0e5ec] rounded-lg shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] font-bold text-accent text-lg"
              >
                Submit Application
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
