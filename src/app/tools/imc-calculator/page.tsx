'use client'

import { useImcCalculatorModel } from './imc-calculator.model'
import { ImcCalculatorView } from './imc-calculator.view'

export default function ImcCalculatorPage() {
  const methods = useImcCalculatorModel()

  return <ImcCalculatorView {...methods} />
}
