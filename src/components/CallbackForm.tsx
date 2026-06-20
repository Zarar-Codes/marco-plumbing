import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Check } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ⚠️ Replace these with your EmailJS credentials after signing up at https://emailjs.com
const EMAILJS_SERVICE_ID = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY = 'your_public_key'

export function CallbackForm() {
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
          subject: 'Callback Request - Marco Plumbing Website',
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
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#e0e5ec] rounded-lg p-8 md:p-12 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
          <div className="corner-screws" />
          {!submitted ? (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-text-primary mb-2"
              >
                Request a Callback
              </motion.h2>
              <p className="text-text-muted mb-8 font-mono text-sm">
                We&rsquo;ll call you back the next business day.
              </p>
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm font-mono">
                  Failed to send. Please try again or call us directly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none focus:shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff] transition-shadow"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none transition-shadow"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    required
                    className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none transition-shadow"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your plumbing issue..."
                    rows={4}
                    className="w-full px-5 py-3.5 bg-[#d1d9e6] rounded-md shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] text-text-primary placeholder-text-muted/50 font-mono text-sm outline-none resize-none transition-shadow"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ y: 2, boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff' }}
                  className="w-full py-4 bg-[#e0e5ec] rounded-lg shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] font-bold text-accent flex items-center justify-center gap-3 text-lg"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d1d9e6] shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Check size={32} className="text-green-500" />
                </motion.div>
              </div>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(46,213,115,0.6)] animate-pulse" />
                <span className="font-mono text-sm text-green-600 tracking-wider uppercase">Message Sent</span>
              </div>
              <p className="text-text-muted">We&rsquo;ll get back to you within 24 hours.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
