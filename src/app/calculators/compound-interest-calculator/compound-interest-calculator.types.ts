import { useCompoundInterestModel } from './compound-interest-calculator.model'

export type MonthlyBreakdown = {
  month: number
  invested: number
  interest: number
  total: number
}

export type CompoundInterestResult = {
  finalAmount: number
  totalInvested: number
  totalInterest: number
  monthlyBreakdown: MonthlyBreakdown[]
}

export type CompoundInterestViewProps = ReturnType<typeof useCompoundInterestModel>
