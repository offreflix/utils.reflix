'use client'

import type React from 'react'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { TmbResult } from '../tmb-calculator.types'

interface TmbResultCardProps {
  icon: React.ReactNode
  tmb: string
  category: string
  textColor: string
  tmbResult: TmbResult | null
}

export const TmbResultCard = ({
  icon,
  tmb,
  category,
  textColor,
  tmbResult,
}: TmbResultCardProps) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="p-3 rounded-full bg-white/70 dark:bg-black/30 shadow-sm"
        >
          {icon}
        </motion.div>
      </div>
      <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
        Sua TMB é
      </h3>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="my-2"
      >
        <span className={cn('text-5xl font-bold', textColor)}>{tmb}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <span className={cn('text-xl font-semibold', textColor)}>
          {category}
        </span>
      </motion.div>

      {tmbResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="mt-4"
        >
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            <div className="font-medium">Calorias totais:</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {tmbResult.totalCalories} kcal/dia
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
