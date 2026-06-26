import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'
import { skillCategories } from '../../data/skills'

export function Skills() {
  const [expanded, setExpanded] = useState<string | null>('cloud')

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id))
  }

  return (
    <section id="expertise" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-emerald-neon/70 uppercase tracking-widest">
            Skill Matrices
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Core Expertise & <span className="text-gradient-emerald">Cloud Nodes</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Interactive infrastructure capability matrices — expand each node to inspect deployed
            skill stacks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon
            const isOpen = expanded === category.id

            return (
              <GlassCard key={category.id} delay={i * 0.1} hover={false} className="!p-0 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggle(category.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-emerald-neon/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-neon/10 border border-emerald-neon/25">
                      <Icon className="w-5 h-5 text-emerald-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{category.title}</h3>
                      <p className="text-xs text-gray-500 font-mono mt-0.5">
                        {category.skills.length} modules deployed
                      </p>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5 text-emerald-neon/60" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 flex flex-wrap gap-2">
                        {category.skills.map((skill, j) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: j * 0.04 }}
                            className="px-3 py-1.5 text-xs font-mono rounded-lg bg-emerald-neon/8 border border-emerald-neon/20 text-emerald-glow/90 hover:glow-emerald-sm hover:border-emerald-neon/40 transition-all cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
