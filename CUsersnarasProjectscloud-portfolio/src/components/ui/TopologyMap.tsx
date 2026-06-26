import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Node {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

interface Edge {
  from: number
  to: number
}

const NODES: Node[] = [
  { id: 0, x: 50, y: 20, size: 14, delay: 0 },
  { id: 1, x: 25, y: 45, size: 10, delay: 0.2 },
  { id: 2, x: 75, y: 45, size: 10, delay: 0.4 },
  { id: 3, x: 15, y: 72, size: 8, delay: 0.6 },
  { id: 4, x: 40, y: 70, size: 9, delay: 0.3 },
  { id: 5, x: 60, y: 70, size: 9, delay: 0.5 },
  { id: 6, x: 85, y: 72, size: 8, delay: 0.7 },
  { id: 7, x: 50, y: 88, size: 7, delay: 0.8 },
]

const EDGES: Edge[] = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 5 },
  { from: 2, to: 6 },
  { from: 4, to: 7 },
  { from: 5, to: 7 },
  { from: 3, to: 4 },
  { from: 5, to: 6 },
]

export function TopologyMap() {
  const nodeMap = useMemo(() => new Map(NODES.map((n) => [n.id, n])), [])

  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[400px]">
      <div className="absolute inset-0 grid-neon rounded-2xl opacity-60" />

      <motion.div
        className="absolute inset-0 rounded-2xl border border-emerald-neon/10"
        animate={{
          boxShadow: [
            '0 0 30px rgba(16,185,129,0.08)',
            '0 0 50px rgba(16,185,129,0.15)',
            '0 0 30px rgba(16,185,129,0.08)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {EDGES.map(({ from, to }, i) => {
          const a = nodeMap.get(from)!
          const b = nodeMap.get(to)!
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(16,185,129,0.25)"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: i * 0.08 }}
            />
          )
        })}

        {EDGES.map(({ from, to }, i) => {
          const a = nodeMap.get(from)!
          const b = nodeMap.get(to)!
          return (
            <motion.circle
              key={`pulse-${from}-${to}`}
              r="0.6"
              fill="#34d399"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                cx: [a.x, b.x],
                cy: [a.y, b.y],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          )
        })}
      </svg>

      {NODES.map((node) => (
        <motion.div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: node.delay, type: 'spring', stiffness: 180 }}
        >
          <motion.div
            className="rounded-full bg-emerald-neon/20 border border-emerald-neon/50 flex items-center justify-center"
            style={{ width: node.size * 3, height: node.size * 3 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3 + node.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: node.delay,
            }}
          >
            <div
              className="rounded-full bg-emerald-glow glow-emerald-sm"
              style={{ width: node.size, height: node.size }}
            />
          </motion.div>
          {node.id === 0 && (
            <motion.span
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-emerald-glow/80 whitespace-nowrap"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              control-plane
            </motion.span>
          )}
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-4 left-4 font-mono text-xs text-emerald-neon/60"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        k8s://cluster-us-east-1 · nodes: {NODES.length} · status: healthy
      </motion.div>
    </div>
  )
}
