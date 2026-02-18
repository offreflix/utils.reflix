'use client'

import { PeriodData } from '../juros-compostos.types'

interface Props {
  data: PeriodData[]
}

function formatLabel(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}k`
  return value.toFixed(0)
}

export function JurosCompostosChart({ data }: Props) {
  if (data.length === 0) return null

  const width = 560
  const height = 280
  const pad = { top: 16, right: 16, bottom: 40, left: 64 }
  const cw = width - pad.left - pad.right
  const ch = height - pad.top - pad.bottom

  const maxValue = Math.max(...data.map((d) => d.total))

  const scaleX = (i: number) =>
    pad.left + (i / Math.max(data.length - 1, 1)) * cw
  const scaleY = (v: number) => pad.top + ch - (v / maxValue) * ch

  // Build SVG path strings
  const totalPath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${scaleX(i)},${scaleY(d.total)}`)
    .join(' ')

  const investedPath = data
    .map(
      (d, i) => `${i === 0 ? 'M' : 'L'}${scaleX(i)},${scaleY(d.totalInvested)}`,
    )
    .join(' ')

  const baseline = pad.top + ch
  const lastX = scaleX(data.length - 1)
  const firstX = scaleX(0)

  const totalAreaPath = `${totalPath} L${lastX},${baseline} L${firstX},${baseline} Z`
  const investedAreaPath = `${investedPath} L${lastX},${baseline} L${firstX},${baseline} Z`

  // Y-axis ticks
  const yTicks = 5
  const yLabels = Array.from({ length: yTicks + 1 }, (_, i) => {
    const value = (maxValue * i) / yTicks
    return { value, y: scaleY(value) }
  })

  // X-axis ticks (max 10 labels)
  const step = Math.max(1, Math.floor(data.length / 10))
  const xLabels = data.filter((_, i) => i % step === 0 || i === data.length - 1)

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full min-w-[320px]"
        aria-label="Gráfico de juros compostos"
      >
        {/* Grid lines */}
        {yLabels.map(({ y }, i) => (
          <line
            key={i}
            x1={pad.left}
            y1={y}
            x2={pad.left + cw}
            y2={y}
            stroke="currentColor"
            strokeOpacity={0.1}
            strokeWidth={1}
          />
        ))}

        {/* Total area */}
        <path d={totalAreaPath} fill="#3b82f6" fillOpacity={0.12} />
        {/* Invested area */}
        <path d={investedAreaPath} fill="#10b981" fillOpacity={0.2} />

        {/* Total line */}
        <path
          d={totalPath}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Invested line */}
        <path
          d={investedPath}
          fill="none"
          stroke="#10b981"
          strokeWidth={2}
          strokeDasharray="4 3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Data points on total line */}
        {data.map((d, i) => (
          <circle
            key={i}
            cx={scaleX(i)}
            cy={scaleY(d.total)}
            r={3}
            fill="#3b82f6"
          />
        ))}

        {/* Y-axis labels */}
        {yLabels.map(({ value, y }, i) => (
          <text
            key={i}
            x={pad.left - 8}
            y={y}
            textAnchor="end"
            dominantBaseline="middle"
            fontSize={10}
            fill="currentColor"
            opacity={0.6}
          >
            {formatLabel(value)}
          </text>
        ))}

        {/* X-axis labels */}
        {xLabels.map((d) => {
          const idx = data.indexOf(d)
          return (
            <text
              key={idx}
              x={scaleX(idx)}
              y={pad.top + ch + 20}
              textAnchor="middle"
              fontSize={9}
              fill="currentColor"
              opacity={0.6}
            >
              {d.label}
            </text>
          )
        })}

        {/* Axes */}
        <line
          x1={pad.left}
          y1={pad.top}
          x2={pad.left}
          y2={pad.top + ch}
          stroke="currentColor"
          strokeOpacity={0.2}
          strokeWidth={1}
        />
        <line
          x1={pad.left}
          y1={pad.top + ch}
          x2={pad.left + cw}
          y2={pad.top + ch}
          stroke="currentColor"
          strokeOpacity={0.2}
          strokeWidth={1}
        />
      </svg>

      {/* Legend */}
      <div className="flex gap-6 justify-center mt-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-5 h-0.5 rounded" style={{ background: '#3b82f6' }} />
          Valor total
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-5 h-0.5 rounded" style={{ background: '#10b981', borderBottom: '2px dashed' }} />
          Valor investido
        </span>
      </div>
    </div>
  )
}
