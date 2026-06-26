import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { metrics } from '../../data/metrics'

export function Metrics() {
  return (
    <section id="metrics" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-emerald-neon/70 uppercase tracking-widest">
            FinOps Counter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Metrics & <span className="text-gradient-emerald">Impact Dashboard</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Real-world performance indicators from enterprise multicloud operations — measured,
            enforced, and continuously optimized.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <GlassCard key={metric.id} delay={i * 0.1} className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-neon/5 rounded-full blur-2xl group-hover:bg-emerald-neon/10 transition-all" />

                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-emerald-neon/10 border border-emerald-neon/20">
                    <Icon className="w-5 h-5 text-emerald-glow" />
                  </div>
                  {metric.trend && (
                    <span className="text-[10px] font-mono text-emerald-neon/60 px-2 py-1 rounded bg-emerald-neon/5">
                      {metric.trend}
                    </span>
                  )}
                </div>

                <motion.p
                  className="text-3xl md:text-4xl font-bold text-gradient-emerald font-mono"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {metric.value}
                </motion.p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">{metric.label}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
