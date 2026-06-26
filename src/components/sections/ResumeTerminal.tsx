import { useState, useRef, useEffect, type KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import { Download, Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react'
import { resumeData, terminalHelp } from '../../data/resume'
import { LINKS, EMAIL } from '../../data/constants'

interface TerminalLine {
  type: 'input' | 'output' | 'error'
  content: string
}

function formatResumeText(): string {
  const lines: string[] = [
    `═══════════════════════════════════════════════════════`,
    `  ${resumeData.name.toUpperCase()}`,
    `  ${resumeData.title}`,
    `═══════════════════════════════════════════════════════`,
    ``,
    `SUMMARY`,
    `───────`,
    resumeData.summary,
    ``,
    `EXPERIENCE`,
    `──────────`,
  ]

  resumeData.experience.forEach((exp) => {
    lines.push(`${exp.role} | ${exp.company} (${exp.duration})`)
    exp.highlights.forEach((h) => lines.push(`  • ${h}`))
    lines.push('')
  })

  lines.push('EDUCATION', '─────────')
  resumeData.education.forEach((edu) => {
    lines.push(`${edu.degree} — ${edu.field}`)
    lines.push(`  ${edu.institution}`)
  })

  lines.push('', 'CERTIFICATIONS', '──────────────')
  resumeData.certifications.forEach((c) => lines.push(`  • ${c}`))

  lines.push('', 'SKILLS', '──────')
  lines.push(resumeData.skills.join(' · '))

  lines.push('', 'CONTACT', '───────')
  lines.push(`  LinkedIn: ${resumeData.contact.linkedin}`)
  lines.push(`  GitHub:   ${resumeData.contact.github}`)

  return lines.join('\n')
}

export function ResumeTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to resume-terminal v1.0.0' },
    { type: 'output', content: "Type 'help' to see available commands." },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const newLines: TerminalLine[] = [{ type: 'input', content: `$ ${cmd}` }]

    switch (trimmed) {
      case 'help':
        newLines.push({ type: 'output', content: terminalHelp })
        break
      case 'resume':
        newLines.push({ type: 'output', content: formatResumeText() })
        break
      case 'json':
        newLines.push({ type: 'output', content: JSON.stringify(resumeData, null, 2) })
        break
      case 'clear':
        setLines([])
        return
      case 'whoami':
        newLines.push({
          type: 'output',
          content: `${resumeData.name} — ${resumeData.title}\n${resumeData.contact.linkedin}`,
        })
        break
      case 'skills':
        newLines.push({ type: 'output', content: resumeData.skills.join('\n') })
        break
      case 'contact':
        newLines.push({
          type: 'output',
          content: `LinkedIn: ${LINKS.linkedin}\nGitHub: ${LINKS.github}\nEmail: ${EMAIL}`,
        })
        break
      case '':
        return
      default:
        newLines.push({
          type: 'error',
          content: `Command not found: ${cmd}. Type 'help' for available commands.`,
        })
    }

    setLines((prev) => [...prev, ...newLines])
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input)
      if (input.trim()) {
        setHistory((prev) => [...prev, input])
        setHistoryIndex(-1)
      }
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex] ?? '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex] ?? '')
      } else {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <section id="resume" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-emerald-neon/70 uppercase tracking-widest">
            Interactive Viewer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Integrated <span className="text-gradient-emerald">Resume Terminal</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Linux-style terminal interface. Type{' '}
            <code className="text-emerald-glow bg-emerald-neon/10 px-1.5 py-0.5 rounded text-sm">
              help
            </code>{' '}
            or{' '}
            <code className="text-emerald-glow bg-emerald-neon/10 px-1.5 py-0.5 rounded text-sm">
              resume
            </code>{' '}
            to explore my technical background and credentials.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-xl overflow-hidden glow-emerald border-emerald-neon/25"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center justify-between px-4 py-3 bg-surface-raised/90 border-b border-emerald-neon/15">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button type="button" className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500" aria-label="Close">
                  <X className="w-3 h-3 opacity-0" />
                </button>
                <button type="button" className="w-3 h-3 rounded-full bg-yellow-500/80" aria-label="Minimize">
                  <Minus className="w-3 h-3 opacity-0" />
                </button>
                <button type="button" className="w-3 h-3 rounded-full bg-green-500/80" aria-label="Maximize">
                  <Square className="w-3 h-3 opacity-0" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <TerminalIcon size={14} className="text-emerald-glow" />
                narasimha@portfolio:~
              </div>
            </div>

            <a
              href={LINKS.resumeDownload}
              download
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-emerald-neon/15 text-emerald-glow border border-emerald-neon/30 hover:bg-emerald-neon/25 transition-all glow-emerald-sm"
            >
              <Download size={14} />
              Download PDF Resume
            </a>
          </div>

          <div className="p-4 h-[400px] overflow-y-auto font-mono text-sm bg-[#0d1110]">
            {lines.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap mb-1 ${
                  line.type === 'input'
                    ? 'text-emerald-glow'
                    : line.type === 'error'
                      ? 'text-red-400'
                      : 'text-gray-300'
                }`}
              >
                {line.content}
              </div>
            ))}

            <div className="flex items-center gap-2 mt-2">
              <span className="text-emerald-glow">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-gray-100 caret-emerald-glow"
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal command input"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
