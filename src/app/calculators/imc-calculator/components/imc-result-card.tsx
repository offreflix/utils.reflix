'use client'

import type React from 'react'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ImcResultCardProps {
  icon: React.ReactNode
  imc: string
  category: string
  textColor: string
}

export const ImcResultCard = ({
  icon,
  imc,
  category,
  textColor,
}: ImcResultCardProps) => {
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
        Seu IMC é
      </h3>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="my-2"
      >
        <span className={cn('text-5xl font-bold', textColor)}>{imc}</span>
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
    </div>
  )
}
