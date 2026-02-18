'use client'

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
} from '@/components/ui/chart'
import type { TooltipProps } from 'recharts'
import { PeriodData } from '../juros-compostos.types'

interface Props {
  data: PeriodData[]
}

const chartConfig = {
  total: {
    label: 'Valor Total',
    color: 'var(--chart-1)',
  },
  investido: {
    label: 'Valor Investido',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

function formatYAxis(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}k`
  return String(value)
}

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-lg border bg-background px-3 py-2 shadow-lg text-xs">
      <p className="font-semibold mb-2">{label}</p>
      <div className="space-y-1.5">
        {payload.map((entry) => (
          <div
            key={entry.dataKey}
            className="flex items-center justify-between gap-8"
          >
            <div className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-muted-foreground">
                {chartConfig[entry.dataKey as keyof typeof chartConfig]?.label}
              </span>
            </div>
            <span className="font-mono font-medium tabular-nums">
              {formatBRL(entry.value ?? 0)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function JurosCompostosChart({ data }: Props) {
  if (data.length === 0) return null

  const chartData = data.map((d) => ({
    period: d.label,
    total: Math.round(d.total * 100) / 100,
    investido: Math.round(d.totalInvested * 100) / 100,
  }))

  return (
    <ChartContainer config={chartConfig} className="min-h-[280px] w-full">
      <LineChart data={chartData} margin={{ left: 8, right: 8, top: 4 }}>
        <CartesianGrid vertical={false} strokeOpacity={0.4} />
        <XAxis
          dataKey="period"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          interval="preserveStartEnd"
          tick={{ fontSize: 11 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={formatYAxis}
          width={52}
          tick={{ fontSize: 11 }}
        />
        <ChartTooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="total"
          type="monotone"
          stroke="var(--color-total)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
        <Line
          dataKey="investido"
          type="monotone"
          stroke="var(--color-investido)"
          strokeWidth={2}
          strokeDasharray="5 4"
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ChartContainer>
  )
}
