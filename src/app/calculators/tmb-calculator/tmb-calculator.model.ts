import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema, FormSchema } from './tmb-calculator.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { TmbResult } from './tmb-calculator.types'

export const useTmbCalculatorModel = () => {
  const [finalTmb, setFinalTmb] = useState<string>()
  const [tmbResult, setTmbResult] = useState<TmbResult | null>(null)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: undefined,
      age: '',
      height: '',
      weight: '',
      activityLevel: undefined,
    },
  })

  function calculateTmbMifflinStJeor(
    weightKg: number,
    heightCm: number,
    ageYears: number,
    gender: 'homem' | 'mulher',
  ): number {
    const baseTmb = 10 * weightKg + 6.25 * heightCm - 5 * ageYears
    return gender === 'homem' ? baseTmb + 5 : baseTmb - 161
  }

  const ACTIVITY_FACTORS: Record<
    string,
    { factor: number; description: string }
  > = {
    sedentario: {
      factor: 1.2,
      description: 'Sem exercícios ou atividade mínima',
    },
    'levemente-ativo': {
      factor: 1.375,
      description: 'Exercício leve 1–3 dias/semana',
    },
    'moderadamente-ativo': {
      factor: 1.55,
      description: 'Exercício moderado 3–5 dias/semana',
    },
    'altamente-ativo': {
      factor: 1.725,
      description: 'Exercício pesado 6–7 dias/semana',
    },
    'extremamente-ativo': {
      factor: 1.9,
      description: 'Treinamento intenso + trabalho físico',
    },
  }

  function onSubmit(values: FormSchema) {
    const weight = Number(values.weight)
    const height = Number(values.height)
    const age = Number(values.age)
    const gender = values.gender
    const activityLevel = values.activityLevel

    const tmb = calculateTmbMifflinStJeor(weight, height, age, gender)

    const activityData = ACTIVITY_FACTORS[activityLevel]
    const totalCalories = Math.round(tmb * activityData.factor)

    const result = {
      tmb: Math.round(tmb),
      totalCalories,
      activityLevel,
      activityFactor: activityData.factor,
      activityDescription: activityData.description,
    }

    setFinalTmb(tmb.toFixed(0))
    setTmbResult(result)
  }

  return {
    form,
    onSubmit,
    finalTmb,
    tmbResult,
  }
}
