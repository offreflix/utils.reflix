'use client'

import { motion, MotionValue } from 'framer-motion'
import { RoletaItem } from '../roleta.types'

type RoletaWheelProps = {
  items: RoletaItem[]
  rotation: MotionValue<number>
  spinning: boolean
  canSpin: boolean
  onSpin: () => void
}

const RADIUS = 100
const MAX_LABEL_CHARS = 18

function polar(angleDeg: number, radius: number) {
  // 0° aponta para o topo e cresce no sentido horário.
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: radius * Math.cos(rad), y: radius * Math.sin(rad) }
}

function slicePath(startDeg: number, endDeg: number) {
  const start = polar(startDeg, RADIUS)
  const end = polar(endDeg, RADIUS)
  const largeArc = endDeg - startDeg > 180 ? 1 : 0
  return `M 0 0 L ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${end.x} ${end.y} Z`
}

function sliceColor(index: number, total: number) {
  // Evita que a última e a primeira fatias fiquem com a mesma cor.
  const hue = (index * 137.5) % 360
  const lightness = total % 2 === 1 && index === total - 1 ? 40 : 52
  return `hsl(${hue} 70% ${lightness}%)`
}

function truncate(label: string) {
  return label.length > MAX_LABEL_CHARS
    ? `${label.slice(0, MAX_LABEL_CHARS - 1)}…`
    : label
}

export function RoletaWheel({
  items,
  rotation,
  spinning,
  canSpin,
  onSpin,
}: RoletaWheelProps) {
  const count = items.length
  const slice = count > 0 ? 360 / count : 0
  const fontSize = Math.max(3.2, Math.min(7, 70 / Math.max(count, 1) + 2))

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md select-none">
      {/* Ponteiro */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1"
      >
        <svg width="36" height="44" viewBox="0 0 36 44">
          <path
            d="M18 44 L2 8 A18 18 0 1 1 34 8 Z"
            className="fill-foreground stroke-background"
            strokeWidth="3"
          />
          <circle cx="18" cy="14" r="5" className="fill-background" />
        </svg>
      </div>

      <motion.div
        style={{ rotate: rotation }}
        className="size-full rounded-full shadow-xl"
      >
        <svg
          viewBox="-104 -104 208 208"
          className="size-full"
          role="img"
          aria-label={
            count > 0
              ? `Roleta com ${count} itens: ${items.map((i) => i.label).join(', ')}`
              : 'Roleta vazia'
          }
        >
          <circle r={103} className="fill-foreground" />
          {count < 2 ? (
            <g>
              <circle r={RADIUS} className="fill-muted" />
              <text
                textAnchor="middle"
                className="fill-muted-foreground"
                fontSize={7}
              >
                <tspan x={0} y={-3}>
                  Adicione ao menos
                </tspan>
                <tspan x={0} y={7}>
                  2 itens para girar
                </tspan>
              </text>
            </g>
          ) : (
            items.map((item, index) => {
              const start = index * slice
              const end = start + slice
              const mid = start + slice / 2
              return (
                <g key={item.id}>
                  <path
                    d={slicePath(start, end)}
                    fill={sliceColor(index, count)}
                    stroke="white"
                    strokeWidth={0.6}
                  />
                  <g transform={`rotate(${mid - 90})`}>
                    <text
                      x={RADIUS - 6}
                      y={0}
                      textAnchor="end"
                      dominantBaseline="central"
                      fontSize={fontSize}
                      fontWeight={600}
                      fill="white"
                      stroke="rgba(0,0,0,0.35)"
                      strokeWidth={0.35}
                      paintOrder="stroke"
                    >
                      {truncate(item.label)}
                    </text>
                  </g>
                </g>
              )
            })
          )}
        </svg>
      </motion.div>

      {/* Botão central (não gira) */}
      <button
        type="button"
        onClick={onSpin}
        disabled={!canSpin}
        aria-label="Girar a roleta"
        className="absolute left-1/2 top-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-background bg-foreground text-xs font-bold uppercase tracking-wide text-background shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {spinning ? '...' : 'Girar'}
      </button>
    </div>
  )
}
