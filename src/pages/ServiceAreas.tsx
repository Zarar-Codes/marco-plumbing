import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { LED } from '../components/ManufacturingDetails'

const areas = ['Port Perry', 'Scarborough', 'Uxbridge', 'Whitby', 'Peterborough', 'Ajax', 'Clarington', 'Newcastle', 'Pickering', 'Oshawa']

export default function ServiceAreas() {
  return (
    <PageTransition>
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <LED color="green" label="Service Areas" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 drop-shadow-[0_2px_0_#ffffff]">
              <WordsPullUp text="Proudly Serving Durham Region & the GTA" />
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              From Port Perry to Peterborough, Scarborough to Clarington — Marco Plumbing provides fast, reliable service across Durham Region and the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-12 drop-shadow-[0_1px_0_#ffffff]">Communities We Serve</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, i) => (
              <FadeInWhenVisible key={area} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '12px 12px 24px #babecc, -12px -12px 24px #ffffff' }}
                  className="bg-[#e0e5ec] rounded-lg p-6 shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] text-center group cursor-default"
                >
                  <div className="corner-screws" />
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#d1d9e6] shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center">
                    <MapPin size={20} strokeWidth={1.5} className="text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="font-bold text-text-primary text-sm">{area}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-extrabold text-text-primary text-center mb-4 drop-shadow-[0_1px_0_#ffffff]">Service Area Map</h2>
            <p className="text-text-muted text-center mb-8">We cover all areas shown below. Call for same-day service in most locations.</p>
          </FadeInWhenVisible>
          <div className="bg-[#e0e5ec] rounded-lg p-2 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
            <div className="corner-screws" />
            <div className="aspect-[21/9] bg-[#d1d9e6] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977207413!2d-79.54286169433591!3d43.71837147934957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sDurham%20Region%2C%20ON!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Durham Region Service Area"
              />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
