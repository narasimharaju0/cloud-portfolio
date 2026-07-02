import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { GlowButton } from '../ui/GlowButton'
import { SocialLinks } from '../ui/SocialLinks'
import { TopologyMap } from '../ui/TopologyMap'


export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-emerald-glow border-emerald-neon/20">
                <span className="w-2 h-2 rounded-full bg-emerald-glow animate-pulse" />
                ARCHITECTURAL BLUEPRINT · v2.0
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient-emerald">Narasimha Raju</span>.
              <br />
              <span className="text-gradient-emerald">Multicloud Engineer</span> & DevOps
              Specialist.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              I design, automate, and manage resilient cloud infrastructure across AWS and Azure,
              streamlining delivery with high-throughput CI/CD pipelines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <GlowButton onClick={scrollToContact}>
                Initiate Contact
                <ArrowDown size={16} />
              </GlowButton>
              
              <a
                href="/resume/resume.pdf"
                download="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-700 hover:border-emerald-neon/50 hover:text-emerald-glow transition-all"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                Social Nodes
              </span>
              <SocialLinks floating />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-strong rounded-2xl p-4 glow-emerald"
          >
            <TopologyMap />
          </motion.div>
        </div>
      </div>
    </section>
  )
}