import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, FormSchema } from './compound-interest-calculator.schema'
import { CompoundInterestResult, MonthlyBreakdown } from './compound-interest-calculator.types'

export const useCompoundInterestModel = () => {
  const [result, setResult] = useState<CompoundInterestResult | undefined>()

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      principal: undefined,
      monthlyContribution: undefined,
      rate: undefined,
      rateType: 'annual',
      period: undefined,
      periodType: 'years',
    },
  })

  function calculate(values: FormSchema): CompoundInterestResult {
    const { principal, monthlyContribution, rate, rateType, period, periodType } = values
    const totalMonths = periodType === 'years' ? period * 12 : period
    const monthlyRate = rateType === 'annual' ? Math.pow(1 + rate / 100, 1 / 12) - 1 : rate / 100

    const monthlyBreakdown: MonthlyBreakdown[] = []
    let currentTotal = principal

    monthlyBreakdown.push({ month: 0, invested: principal, interest: 0, total: principal })

    for (let month = 1; month <= totalMonths; month++) {
      currentTotal = currentTotal * (1 + monthlyRate) + monthlyContribution
      const totalInvested = principal + monthlyContribution * month
      monthlyBreakdown.push({
        month,
        invested: totalInvested,
        interest: currentTotal - totalInvested,
        total: currentTotal,
      })
    }

    const totalInvested = principal + monthlyContribution * totalMonths
    return {
      finalAmount: currentTotal,
      totalInvested,
      totalInterest: currentTotal - totalInvested,
      monthlyBreakdown,
    }
  }

  function onSubmit(values: FormSchema) {
    setResult(calculate(values))
  }

  return { form, onSubmit, result }
}
