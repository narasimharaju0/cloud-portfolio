import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { LINKS, PROFILE, EMAIL } from '../../data/constants'

export function Footer() {
  return (
    <footer className="border-t border-emerald-neon/10 glass mt-8">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 font-mono">
          © {new Date().getFullYear()} {PROFILE.name} · Infrastructure-as-Code Portfolio
        </p>

        <div className="flex items-center gap-6">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-glow transition-colors"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-glow transition-colors"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href={LINKS.email}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-glow transition-colors"
          >
            <Mail size={16} />
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
