import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, FormSchema } from './juros-compostos.schema'
import { JurosCompostosResult, PeriodData } from './juros-compostos.types'

export const useJurosCompostosModel = () => {
  const [result, setResult] = useState<JurosCompostosResult | null>(null)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initialValue: 0,
      monthlyValue: 0,
      rate: '',
      rateType: 'anual',
      period: '',
      periodType: 'anos',
    },
  })

  function onSubmit(values: FormSchema) {
    const { initialValue, monthlyValue, rate, rateType, period, periodType } =
      values

    // Convert to monthly rate
    // Annual: i_monthly = (1 + annual_rate)^(1/12) - 1
    // Monthly: i_monthly = rate / 100
    const monthlyRate =
      rateType === 'anual'
        ? Math.pow(1 + rate / 100, 1 / 12) - 1
        : rate / 100

    // Convert period to months
    const totalMonths = periodType === 'anos' ? period * 12 : period

    // Simulate month by month
    // Each month: balance = balance * (1 + i) + monthlyContribution
    // This is equivalent to the closed-form: M = C*(1+i)^n + PMT*[(1+i)^n - 1]/i
    const monthlyData: PeriodData[] = []
    let balance = initialValue
    let totalInvested = initialValue

    for (let m = 1; m <= totalMonths; m++) {
      balance = balance * (1 + monthlyRate) + monthlyValue
      totalInvested += monthlyValue

      const isYearBoundary = m % 12 === 0
      const isLastMonth = m === totalMonths

      if (isYearBoundary || isLastMonth || totalMonths <= 24) {
        const year = Math.ceil(m / 12)
        const label =
          periodType === 'anos' || totalMonths > 24
            ? `Ano ${year}`
            : `Mês ${m}`

        monthlyData.push({
          label,
          month: m,
          totalInvested,
          interest: balance - totalInvested,
          total: balance,
        })
      }
    }

    setResult({
      finalValue: balance,
      totalInvested,
      totalInterest: balance - totalInvested,
      monthlyData,
    })
  }

  function onClear() {
    form.reset({
      initialValue: 0,
      monthlyValue: 0,
      rate: '',
      rateType: 'anual',
      period: '',
      periodType: 'anos',
    })
    setResult(null)
  }

  return { form, onSubmit, onClear, result }
}
