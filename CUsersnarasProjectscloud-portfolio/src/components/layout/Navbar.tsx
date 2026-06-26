import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

const navItems = [
  { label: 'Metrics', href: '#metrics' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-emerald-neon/10"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-emerald-glow group-hover:glow-emerald-sm transition-all" />
          <span className="font-mono text-sm text-emerald-glow">
            NR<span className="text-gray-500">@</span>cloud
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-gray-400 hover:text-emerald-glow transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-lg border border-emerald-neon/30 text-emerald-glow hover:bg-emerald-neon/10 transition-all"
        >
          Access Channel
        </a>
      </nav>
    </motion.header>
  )
}
