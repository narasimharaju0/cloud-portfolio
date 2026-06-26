import { motion } from 'framer-motion'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import { LINKS } from '../../data/constants'

const socials = [
  { href: LINKS.github, icon: GitHubIcon, label: 'GitHub' },
  { href: LINKS.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
]

interface SocialLinksProps {
  floating?: boolean
  size?: 'sm' | 'md'
}

export function SocialLinks({ floating = false, size = 'md' }: SocialLinksProps) {
  const iconSize = size === 'sm' ? 18 : 22
  const padding = size === 'sm' ? 'p-2.5' : 'p-3'

  return (
    <div className={`flex items-center gap-3 ${floating ? '' : ''}`}>
      {socials.map(({ href, icon: Icon, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={floating ? { opacity: 0, scale: 0 } : undefined}
          animate={floating ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.15, y: -3 }}
          className={`${padding} glass rounded-xl text-emerald-glow hover:glow-emerald-sm hover:border-emerald-neon/40 transition-all duration-300`}
        >
          <Icon size={iconSize} />
        </motion.a>
      ))}
    </div>
  )
}
