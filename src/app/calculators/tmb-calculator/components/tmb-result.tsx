'use client'

import type React from 'react'

import { useState, useEffect, type JSX } from 'react'
import { motion } from 'framer-motion'
import { Activity, Hourglass } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TmbResultCard } from './tmb-result-card'
import type { TmbResult } from '../tmb-calculator.types'

interface TmbResultProps {
  tmb: string | undefined
  tmbResult: TmbResult | null
}

export function TmbResult({ tmb, tmbResult }: TmbResultProps) {
  const [category, setCategory] = useState<string>('')
  const [color, setColor] = useState<string>(
    'bg-neutral-100 dark:bg-neutral-800',
  )
  const [textColor, setTextColor] = useState<string>(
    'text-neutral-500 dark:text-neutral-400',
  )
  const [icon, setIcon] = useState<JSX.Element>(
    <Activity className="h-6 w-6" />,
  )

  useEffect(() => {
    if (!tmbResult) return

    const activityLevel = tmbResult.activityLevel

    if (activityLevel === 'sedentario') {
      setCategory('Sedentário')
      setColor('bg-red-100 dark:bg-red-950/50')
      setTextColor('text-red-600 dark:text-red-400')
      setIcon(<Activity className="h-6 w-6 text-red-500 dark:text-red-400" />)
    } else if (activityLevel === 'levemente-ativo') {
      setCategory('Levemente ativo')
      setColor('bg-orange-100 dark:bg-orange-950/50')
      setTextColor('text-orange-600 dark:text-orange-400')
      setIcon(
        <Activity className="h-6 w-6 text-orange-500 dark:text-orange-400" />,
      )
    } else if (activityLevel === 'moderadamente-ativo') {
      setCategory('Moderadamente ativo')
      setColor('bg-yellow-100 dark:bg-yellow-950/50')
      setTextColor('text-yellow-600 dark:text-yellow-400')
      setIcon(
        <Activity className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />,
      )
    } else if (activityLevel === 'altamente-ativo') {
      setCategory('Altamente ativo')
      setColor('bg-green-100 dark:bg-green-950/50')
      setTextColor('text-green-600 dark:text-green-400')
      setIcon(
        <Activity className="h-6 w-6 text-green-500 dark:text-green-400" />,
      )
    } else {
      setCategory('Extremamente ativo')
      setColor('bg-emerald-100 dark:bg-emerald-950/50')
      setTextColor('text-emerald-600 dark:text-emerald-400')
      setIcon(
        <Activity className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />,
      )
    }
  }, [tmbResult])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div
        className={cn(
          'rounded-xl p-6 shadow-lg backdrop-blur-sm border border-transparent dark:border-neutral-800',
          color,
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          {tmb && tmbResult && (
            <TmbResultCard
              icon={icon}
              tmb={tmb}
              category={category}
              textColor={textColor}
              tmbResult={tmbResult}
            />
          )}

          {!tmb && (
            <TmbResultCard
              icon={
                <Hourglass className="h-6 w-6 text-muted-foreground animate-pulse" />
              }
              tmb="--"
              category="Preencha os dados"
              textColor="text-neutral-400 dark:text-neutral-500"
              tmbResult={null}
            />
          )}

          <div className="text-sm text-neutral-600 dark:text-neutral-300 text-center mt-4">
            <p>
              A TMB representa as calorias que seu corpo precisa para manter as
              funções vitais em repouso.
            </p>

            {tmbResult && (
              <div className="pt-4 text-sm">
                <div className="font-medium">Seus resultados:</div>
                <ul className="space-y-1 mt-2 bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <li className="flex justify-between">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      TMB
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {tmbResult.tmb} kcal/dia
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Calorias totais
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {tmbResult.totalCalories} kcal/dia
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-orange-600 dark:text-orange-400 font-medium">
                      Fator de atividade
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {tmbResult.activityFactor}
                    </span>
                  </li>
                </ul>
              </div>
            )}

            <div className="pt-4 text-sm">
              <div className="font-medium">Níveis de atividade:</div>
              <ul className="space-y-1 mt-2 bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                <li className="flex justify-between">
                  <span className="text-red-600 dark:text-red-400 font-medium">
                    Sedentário
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Fator 1.2
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-orange-600 dark:text-orange-400 font-medium">
                    Levemente ativo
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Fator 1.375
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                    Moderadamente ativo
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Fator 1.55
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    Altamente ativo
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Fator 1.725
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    Extremamente ativo
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Fator 1.9
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
