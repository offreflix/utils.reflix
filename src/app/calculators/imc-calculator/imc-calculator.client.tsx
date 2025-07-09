'use client'

import { useImcCalculatorModel } from './imc-calculator.model'
import { ImcCalculatorView } from './imc-calculator.view'

export function ImcCalculatorClient() {
  const methods = useImcCalculatorModel()

  return <ImcCalculatorView {...methods} />
}
