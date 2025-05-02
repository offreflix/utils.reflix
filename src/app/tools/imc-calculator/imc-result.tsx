'use client'

import type React from 'react'

import { useState, useEffect, type JSX } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle, Activity, Hourglass } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IMCResultProps {
  imc: string | undefined
}

export function IMCResult({ imc }: IMCResultProps) {
  const [category, setCategory] = useState<string>('')
  const [color, setColor] = useState<string>(
    'bg-neutral-100 dark:bg-neutral-800'
  )
  const [textColor, setTextColor] = useState<string>(
    'text-neutral-500 dark:text-neutral-400'
  )
  const [icon, setIcon] = useState<JSX.Element>(
    <Activity className="h-6 w-6" />
  )

  useEffect(() => {
    if (!imc) return

    const imcValue = Number.parseFloat(imc.replace(',', '.'))

    if (imcValue < 18.5) {
      setCategory('Abaixo do peso')
      setColor('bg-blue-100 dark:bg-blue-950/50')
      setTextColor('text-blue-600 dark:text-blue-400')
      setIcon(
        <AlertCircle className="h-6 w-6 text-blue-500 dark:text-blue-400" />
      )
    } else if (imcValue >= 18.5 && imcValue < 25) {
      setCategory('Peso normal')
      setColor('bg-green-100 dark:bg-green-950/50')
      setTextColor('text-green-600 dark:text-green-400')
      setIcon(
        <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400" />
      )
    } else if (imcValue >= 25 && imcValue < 30) {
      setCategory('Sobrepeso')
      setColor('bg-yellow-100 dark:bg-yellow-950/50')
      setTextColor('text-yellow-600 dark:text-yellow-400')
      setIcon(
        <AlertCircle className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
      )
    } else if (imcValue >= 30 && imcValue < 35) {
      setCategory('Obesidade Grau I')
      setColor('bg-orange-100 dark:bg-orange-950/50')
      setTextColor('text-orange-600 dark:text-orange-400')
      setIcon(
        <AlertCircle className="h-6 w-6 text-orange-500 dark:text-orange-400" />
      )
    } else if (imcValue >= 35 && imcValue < 40) {
      setCategory('Obesidade Grau II')
      setColor('bg-red-100 dark:bg-red-950/50')
      setTextColor('text-red-600 dark:text-red-400')
      setIcon(
        <AlertCircle className="h-6 w-6 text-red-500 dark:text-red-400" />
      )
    } else {
      setCategory('Obesidade Grau III')
      setColor('bg-red-200 dark:bg-red-900/50')
      setTextColor('text-red-700 dark:text-red-300')
      setIcon(
        <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-300" />
      )
    }
  }, [imc])

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
          color
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          {imc && (
            <ImcResultCard
              icon={icon}
              imc={imc}
              category={category}
              textColor={textColor}
            />
          )}

          {!imc && (
            <ImcResultCard
              icon={
                <Hourglass className="h-6 w-6 text-muted-foreground animate-pulse" />
              }
              imc="--"
              category="Preencha os dados"
              textColor="text-neutral-400 dark:text-neutral-500"
            />
          )}

          <div className="text-sm text-neutral-600 dark:text-neutral-300 text-center mt-4">
            <p>
              O IMC é uma medida que relaciona peso e altura para avaliar se uma
              pessoa está com peso adequado.
            </p>

            <div className="pt-4 text-sm">
              <div className="font-medium">Classificação do IMC:</div>
              <ul className="space-y-1 mt-2 bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                <li className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Abaixo do peso
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Menor que 18,5
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    Peso normal
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    18,5 a 24,9
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                    Sobrepeso
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    25 a 29,9
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-orange-600 dark:text-orange-400 font-medium">
                    Obesidade Grau I
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    30 a 34,9
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-red-600 dark:text-red-400 font-medium">
                    Obesidade Grau II
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    35 a 39,9
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-red-700 dark:text-red-300 font-medium">
                    Obesidade Grau III
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Maior que 40
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

interface ImcResultCardProps {
  icon: React.ReactNode
  imc: string
  category: string
  textColor: string
}

const ImcResultCard = ({
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
