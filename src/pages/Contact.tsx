import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle, Camera, Play, Check } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { IconHousing } from '../components/UIComponents'
import { LED } from '../components/ManufacturingDetails'
import emailjs from '@emailjs/browser'

// ⚠️ Replace these with your EmailJS credentials after signing up at https://emailjs.com
const EMAILJS_SERVICE_ID = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY = 'your_public_key'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.get('name') as string,
          email: data.get('email') as string,
          phone: data.get('phone') as string,
          message: data.get('message') as string,
          subject: 'Contact Form - Marco Plumbing Website',
        },
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitted(true)
      setError(false)
    } catch {
      setError(true)
    }
  }

  return (
    <PageTransition>
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <LED color="green" label="Contact Us" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 drop-shadow-[0_2px_0_#ffffff]">
              <WordsPullUp text="Get in Touch with Marco Plumbing" />
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              Have a plumbing issue? Need a quote? Call, email, or fill out the form and we&rsquo;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeInWhenVisible>
              <div className="bg-[#e0e5ec] rounded-lg p-8 md:p-12 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
                <div className="corner-screws" />
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(46,213,115,0.6)] animate-pulse" />
                      <span className="font-mono text-xs tracking-widest text-green-600 uppercase">Available 24/7</span>
                    </div>
                    <a href="tel:1-866-619-9700" className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors">
                      <Phone size={20} className="text-accent" />
                      <span className="font-mono text-2xl font-bold">1-866-619-9700</span>
                    </a>
                  </div>

                  <div className="space-y-4">
                    <a href="mailto:info@marcoplumbing.ca" className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
                      <Mail size={18} className="text-accent" />
                      info@marcoplumbing.ca
                    </a>
                    <div className="flex items-start gap-3 text-text-muted">
                      <MapPin size={18} className="text-accent mt-0.5" />
                      <span>Durham Region &amp; Greater Toronto Area, ON</span>
                    </div>
                    <div className="flex items-start gap-3 text-text-muted">
                      <Clock size={18} className="text-accent mt-0.5" />
                      <div>
                        <p className="font-mono text-sm font-bold">24/7 Emergency Service</p>
                        <p className="text-xs">Regular hours: Mon-Fri 8AM-6PM</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs tracking-widest text-text-muted uppercase mb-3">Follow Us</p>
                    <div className="flex items-center gap-3">
                      <IconHousing icon={Globe} />
                      <IconHousing icon={MessageCircle} />
                      <IconHousing icon={Camera} />
                      <IconHousing icon={Play} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="bg-[#e0e5ec] rounded-lg p-8 md:p-12 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
                <div className="corner-screws" />
                <h3 className="text-2xl font-bold text-text-primary mb-6">Send Us a Message</h3>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d1d9e6] shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                      <Check size={32} className="text-green-500" />
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(46,213,115,0.6)] animate-pulse" />
                      <span className="font-mono text-sm text-green-600 tracking-wider uppercase">Message Sent</span>
                    </div>
                    <p className="text-text-muted">We&rsquo;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <>
                    {error && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm font-mono">
                        Failed to send. Please try again or call us directly.
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" name="name" placeholder="Full Name *" required className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none" />
                        <input type="email" name="email" placeholder="Email *" required className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none" />
                      </div>
                      <input type="tel" name="phone" placeholder="Phone" className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none" />
                      <textarea name="message" placeholder="How can we help? *" required rows={5} className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none resize-none" />
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ y: 2, boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff' }}
                        className="w-full py-4 bg-[#e0e5ec] rounded-lg shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] font-bold text-accent text-lg"
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </FadeInWhenVisible>
          </div>

          <FadeInWhenVisible>
            <div className="mt-16 bg-[#e0e5ec] rounded-lg p-2 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
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
                  title="Marco Plumbing Service Area"
                />
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </PageTransition>
  )
}
