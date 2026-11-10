'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

const COLORS = ['#f43f5e', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899']
const PIECES = 60

type RoletaConfettiProps = {
  burstKey: number
}

export function RoletaConfetti({ burstKey }: RoletaConfettiProps) {
  const pieces = useMemo(() => {
    if (burstKey === 0) return []
    return Array.from({ length: PIECES }, (_, index) => ({
      id: index,
      x: (Math.random() - 0.5) * 120,
      delay: Math.random() * 0.4,
      duration: 2 + Math.random() * 1.5,
      size: 6 + Math.random() * 6,
      rotate: (Math.random() - 0.5) * 900,
      color: COLORS[index % COLORS.length],
      round: Math.random() > 0.5,
    }))
  }, [burstKey])

  if (pieces.length === 0) return null

  return (
    <div
      aria-hidden
      key={burstKey}
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          initial={{ x: `${50 + piece.x * 0.3}vw`, y: '-5vh', opacity: 1, rotate: 0 }}
          animate={{
            x: `${50 + piece.x}vw`,
            y: '105vh',
            opacity: [1, 1, 0],
            rotate: piece.rotate,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn',
          }}
          style={{
            position: 'absolute',
            width: piece.size,
            height: piece.round ? piece.size : piece.size * 0.5,
            borderRadius: piece.round ? '50%' : 2,
            backgroundColor: piece.color,
          }}
        />
      ))}
    </div>
  )
}
