'use client'

import { motion } from 'framer-motion'
import { Hourglass } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CompoundInterestResult } from '../compound-interest-calculator.types'

interface Props {
  result: CompoundInterestResult | undefined
}

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function formatCurrencyShort(value: number) {
  if (value >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `R$ ${(value / 1_000).toFixed(0)}k`
  return `R$ ${value.toFixed(0)}`
}

export function CompoundInterestResultDisplay({ result }: Props) {
  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-muted-foreground">
        <Hourglass className="h-8 w-8 animate-pulse" />
        <p>Preencha os dados e clique em Calcular</p>
      </div>
    )
  }

  const { finalAmount, totalInvested, totalInterest, monthlyBreakdown } = result

  const chartData = monthlyBreakdown.map((row) => ({
    mes: row.month,
    'Total em juros': parseFloat(row.interest.toFixed(2)),
    'Valor Investido': parseFloat(row.invested.toFixed(2)),
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="rounded-xl bg-neutral-900 dark:bg-neutral-800 p-5 text-center">
        <p className="text-sm text-neutral-400 mb-1">Valor total final</p>
        <p className="text-3xl font-bold text-white">{formatCurrency(finalAmount)}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border rounded-xl p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">Valor total investido</p>
          <p className="text-2xl font-bold">{formatCurrency(totalInvested)}</p>
        </div>
        <div className="border rounded-xl p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">Total em juros</p>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {formatCurrency(totalInterest)}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 font-heading">Gráfico</h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-neutral-200 dark:stroke-neutral-700" />
              <XAxis dataKey="mes" tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}`} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={formatCurrencyShort} width={70} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} labelFormatter={(l) => `Mês ${l}`} />
              <Legend />
              <Line type="monotone" dataKey="Total em juros" stroke="#dc2626" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="Valor Investido" stroke="#171717" dot={false} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 font-heading">Tabela</h3>
        <div className="border rounded-md overflow-auto max-h-96">
          <Table>
            <TableHeader className="bg-neutral-100 dark:bg-neutral-900 sticky top-0">
              <TableRow>
                <TableHead>Mês</TableHead>
                <TableHead>Juros</TableHead>
                <TableHead>Total Investido</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monthlyBreakdown.map((row) => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell className="text-purple-600 dark:text-purple-400">
                    {formatCurrency(row.interest)}
                  </TableCell>
                  <TableCell>{formatCurrency(row.invested)}</TableCell>
                  <TableCell className="font-semibold">
                    {formatCurrency(row.total)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </motion.div>
  )
}
