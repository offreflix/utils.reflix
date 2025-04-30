'use client'

import { useState, useEffect, JSX } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IMCResultProps {
  imc: string | undefined
}

export function IMCResult({ imc }: IMCResultProps) {
  const [category, setCategory] = useState<string>('')
  const [color, setColor] = useState<string>('bg-gray-100')
  const [textColor, setTextColor] = useState<string>('text-gray-500')
  const [icon, setIcon] = useState<JSX.Element>(
    <Activity className="h-6 w-6" />
  )

  useEffect(() => {
    if (!imc) return

    const imcValue = Number.parseFloat(imc.replace(',', '.'))

    if (imcValue < 18.5) {
      setCategory('Abaixo do peso')
      setColor('bg-blue-100')
      setTextColor('text-blue-600')
      setIcon(<AlertCircle className="h-6 w-6 text-blue-500" />)
    } else if (imcValue >= 18.5 && imcValue < 25) {
      setCategory('Peso normal')
      setColor('bg-green-100')
      setTextColor('text-green-600')
      setIcon(<CheckCircle className="h-6 w-6 text-green-500" />)
    } else if (imcValue >= 25 && imcValue < 30) {
      setCategory('Sobrepeso')
      setColor('bg-yellow-100')
      setTextColor('text-yellow-600')
      setIcon(<AlertCircle className="h-6 w-6 text-yellow-500" />)
    } else if (imcValue >= 30 && imcValue < 35) {
      setCategory('Obesidade Grau I')
      setColor('bg-orange-100')
      setTextColor('text-orange-600')
      setIcon(<AlertCircle className="h-6 w-6 text-orange-500" />)
    } else if (imcValue >= 35 && imcValue < 40) {
      setCategory('Obesidade Grau II')
      setColor('bg-red-100')
      setTextColor('text-red-600')
      setIcon(<AlertCircle className="h-6 w-6 text-red-500" />)
    } else {
      setCategory('Obesidade Grau III')
      setColor('bg-red-200')
      setTextColor('text-red-700')
      setIcon(<AlertCircle className="h-6 w-6 text-red-600" />)
    }
  }, [imc])

  if (!imc) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-6"
    >
      <div className={cn('rounded-xl p-6 shadow-lg', color)}>
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <div className="flex items-center justify-center p-1 rounded-full">
              {icon}
            </div>
            <h3 className="text-lg font-medium text-gray-700">Seu IMC é</h3>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <span className={cn('text-5xl font-bold', textColor)}>{imc}</span>
            </motion.div>

            <div className="mt-2">
              <span className={cn('text-xl font-semibold', textColor)}>
                {category}
              </span>
            </div>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.4, duration: 1 }}
              className={cn(
                'h-2 rounded-full',
                textColor.replace('text', 'bg')
              )}
              style={{
                width: `${Math.min(
                  Number.parseFloat(imc.replace(',', '.')) * 3,
                  100
                )}%`,
              }}
            />
          </div>

          <div className="text-sm text-gray-600 text-center mt-4">
            <p>
              O IMC é uma medida que relaciona peso e altura para avaliar se uma
              pessoa está com peso adequado.
            </p>

            <div className="pt-2 text-sm">
              <div className="font-medium">Classificação do IMC:</div>
              <ul className="space-y-1 mt-1">
                <li className="flex justify-between">
                  <span>Abaixo do peso</span>
                  <span>Menor que 18,5</span>
                </li>
                <li className="flex justify-between">
                  <span>Peso normal</span>
                  <span>18,5 a 24,9</span>
                </li>
                <li className="flex justify-between">
                  <span>Sobrepeso</span>
                  <span>25 a 29,9</span>
                </li>
                <li className="flex justify-between">
                  <span>Obesidade Grau I</span>
                  <span>30 a 34,9</span>
                </li>
                <li className="flex justify-between">
                  <span>Obesidade Grau II</span>
                  <span>35 a 39,9</span>
                </li>
                <li className="flex justify-between">
                  <span>Obesidade Grau III</span>
                  <span>Maior que 40</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
