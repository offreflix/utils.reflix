'use client'

import { useImcCalculatorModel } from './tools/imc-calculator/imc-calculator.model'
import { ImcCalculatorView } from './tools/imc-calculator/imc-calculator.view'

export default function Home() {
  const methods = useImcCalculatorModel()

  return <ImcCalculatorView {...methods} />
}
