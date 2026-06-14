'use client'

import { useCompoundInterestModel } from './compound-interest-calculator.model'
import { CompoundInterestView } from './compound-interest-calculator.view'

export function CompoundInterestClient() {
  const methods = useCompoundInterestModel()
  return <CompoundInterestView {...methods} />
}
