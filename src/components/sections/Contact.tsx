import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'
import { LINKS, PROFILE, EMAIL, PHONE } from '../../data/constants'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjkozvy'

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert("Transmission failed. Please try again or use the email link below.")
      }
    } catch (error) {
      alert("Network error. Please use the direct email link below.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-lg bg-surface-raised/60 border border-gray-700/50 text-gray-100 placeholder-gray-500 outline-none transition-all duration-300 focus:border-emerald-neon/60 focus:ring-2 focus:ring-emerald-neon/20 focus:glow-emerald-sm'

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono text-emerald-neon/70 uppercase tracking-widest">
            Access Channel
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Contact & <span className="text-gradient-emerald">Access Channel</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Initiate a secure connection. All inbound requests are routed through encrypted
            channels.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <GlassCard hover={false} className="glow-emerald">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <CheckCircle className="w-12 h-12 text-emerald-glow mb-4" />
                <h3 className="text-xl font-semibold text-white">Transmission Received</h3>
                <p className="text-gray-400 mt-2">
                  Your message has been queued. {PROFILE.name} will respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">
                    identity.name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">
                    identity.email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                    placeholder="you@company.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">
                    payload.message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                    placeholder="Describe your infrastructure challenge or opportunity..."
                    disabled={isSubmitting}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border font-medium transition-all ${
                    isSubmitting 
                    ? 'bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed'
                    : 'bg-emerald-neon/20 text-emerald-glow border-emerald-neon/40 hover:bg-emerald-neon/30 glow-emerald-sm'
                  }`}
                >
                  <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                  {isSubmitting ? 'Transmitting...' : 'Transmit Message'}
                </motion.button>
              </form>
            )}
          </GlassCard>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-mono">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-glow transition-colors">
              linkedin.com/in/narasimharaju-paidi
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-glow transition-colors">
              github.com/narasimharaju0
            </a>
            <a
              href={LINKS.email}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-glow transition-colors"
            >
              {EMAIL}
            </a>
            <a
              href={LINKS.phone}
              className="hover:text-emerald-glow transition-colors"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}