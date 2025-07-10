'use client'

import { useTmbCalculatorModel } from './tmb-calculator.model'
import { TmbCalculatorView } from './tmb-calculator.view'

export function TmbCalculatorClient() {
  const methods = useTmbCalculatorModel()

  return <TmbCalculatorView {...methods} />
}
