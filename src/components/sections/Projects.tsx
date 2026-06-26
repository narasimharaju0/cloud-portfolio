import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'
import { GlowButton } from '../ui/GlowButton'
import { projects } from '../../data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-emerald-neon/70 uppercase tracking-widest">
            Production Blueprints
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-gradient-emerald">Production Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Infrastructure-as-Code storytelling — from FinOps SaaS engines to enterprise data
            center orchestration.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <GlassCard
              key={project.id}
              delay={i * 0.15}
              className={`relative ${project.highlight ? 'glow-emerald border-emerald-neon/30' : ''}`}
            >
              {project.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-glow to-transparent" />
              )}

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-4 h-4 text-emerald-neon/60" />
                    <span className="text-xs font-mono text-emerald-neon/60">
                      PROJECT::{project.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-emerald-glow/80 font-mono">{project.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed">{project.story}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-surface-raised border border-gray-700/50 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {project.repoUrl && (
                  <div className="flex-shrink-0">
                    <GlowButton href={project.repoUrl} className="glow-emerald">
                      <ExternalLink size={16} />
                      View Repository
                    </GlowButton>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
