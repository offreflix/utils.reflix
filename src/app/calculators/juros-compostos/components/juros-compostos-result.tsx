'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { JurosCompostosResult } from '../juros-compostos.types'
import { JurosCompostosChart } from './juros-compostos-chart'

interface Props {
  result: JurosCompostosResult
}

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function JurosCompostosResultCard({ result }: Props) {
  const { finalValue, totalInvested, totalInterest, monthlyData } = result

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="w-full">
        <CardHeader>
          <h2 className="text-2xl font-semibold font-heading tracking-tight">
            Resultado
          </h2>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-lg border bg-primary/5 p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">
                Valor total final
              </p>
              <p className="text-xl font-bold text-primary">
                {formatBRL(finalValue)}
              </p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">
                Valor total investido
              </p>
              <p className="text-xl font-bold">{formatBRL(totalInvested)}</p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">
                Total em juros
              </p>
              <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                {formatBRL(totalInterest)}
              </p>
            </div>
          </div>

          {/* Chart + Table tabs */}
          <Tabs defaultValue="grafico">
            <TabsList className="w-full">
              <TabsTrigger value="grafico" className="flex-1">
                Gráfico
              </TabsTrigger>
              <TabsTrigger value="tabela" className="flex-1">
                Tabela
              </TabsTrigger>
            </TabsList>

            <TabsContent value="grafico" className="pt-4">
              <JurosCompostosChart data={monthlyData} />
            </TabsContent>

            <TabsContent value="tabela" className="pt-4">
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader className="bg-neutral-100 dark:bg-neutral-900">
                    <TableRow>
                      <TableHead>Período</TableHead>
                      <TableHead className="text-right">
                        Total investido
                      </TableHead>
                      <TableHead className="text-right">
                        Total em juros
                      </TableHead>
                      <TableHead className="text-right">Montante</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthlyData.map((row) => (
                      <TableRow key={row.month}>
                        <TableCell className="font-medium">
                          {row.label}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatBRL(row.totalInvested)}
                        </TableCell>
                        <TableCell className="text-right text-emerald-600 dark:text-emerald-400">
                          {formatBRL(row.interest)}
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {formatBRL(row.total)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}
