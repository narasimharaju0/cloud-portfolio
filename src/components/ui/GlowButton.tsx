import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const variants = {
  primary:
    'bg-emerald-neon/15 text-emerald-glow border-emerald-neon/40 hover:bg-emerald-neon/25 glow-emerald-sm',
  secondary:
    'bg-transparent text-gray-300 border-gray-600 hover:border-emerald-neon/40 hover:text-emerald-glow',
  ghost: 'bg-transparent text-emerald-glow border-transparent hover:bg-emerald-neon/10',
}

export function GlowButton({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
  type = 'button',
}: GlowButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border font-medium text-sm transition-all duration-300 ${variants[variant]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http')
    const isDownload = href.includes('/resume/')

    return (
      <motion.a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        download={isDownload || undefined}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
