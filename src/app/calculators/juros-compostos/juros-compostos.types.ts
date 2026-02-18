import type { UseFormReturn } from 'react-hook-form'
import type { FormSchema } from './juros-compostos.schema'

export const RATE_TYPES = ['anual', 'mensal'] as const
export type RateType = (typeof RATE_TYPES)[number]

export const PERIOD_TYPES = ['anos', 'meses'] as const
export type PeriodType = (typeof PERIOD_TYPES)[number]

export interface PeriodData {
  label: string
  month: number
  totalInvested: number
  interest: number
  total: number
}

export interface JurosCompostosResult {
  finalValue: number
  totalInvested: number
  totalInterest: number
  monthlyData: PeriodData[]
}

export interface JurosCompostosViewProps {
  form: UseFormReturn<FormSchema>
  onSubmit: (values: FormSchema) => void
  onClear: () => void
  result: JurosCompostosResult | null
}
