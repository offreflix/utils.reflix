import type { UseFormReturn } from 'react-hook-form'
import type { FormSchema } from './tmb-calculator.schema'

export const GENDERS = ['homem', 'mulher'] as const
export type Gender = (typeof GENDERS)[number]

export const ACTIVITY_LEVELS = [
  'sedentario',
  'levemente-ativo',
  'moderadamente-ativo',
  'altamente-ativo',
  'extremamente-ativo',
] as const
export type ActivityLevel = (typeof ACTIVITY_LEVELS)[number]

export interface TmbResult {
  tmb: number
  totalCalories: number
  activityLevel: ActivityLevel
  activityFactor: number
  activityDescription: string
}

export interface TmbCalculatorViewProps {
  form: UseFormReturn<FormSchema>
  onSubmit: (values: FormSchema) => void
  finalTmb: string | undefined
  tmbResult: TmbResult | null
}
