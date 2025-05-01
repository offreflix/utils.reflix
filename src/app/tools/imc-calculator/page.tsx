import { Metadata } from 'next'
import { ImcCalculatorClient } from './imc-calculator.client'

export const metadata: Metadata = {
  title: 'Calculadora de IMC',
  description:
    'Calcule seu Índice de Massa Corporal (IMC) de forma rápida e precisa. Descubra sua faixa de peso ideal e receba orientações sobre saúde.',
  keywords: [
    'calculadora IMC',
    'índice de massa corporal',
    'calcular IMC',
    'peso ideal',
    'saúde',
    'nutrição',
  ],
  openGraph: {
    title: 'Calculadora de IMC - Utils Reflix',
    description:
      'Calcule seu Índice de Massa Corporal (IMC) de forma rápida e precisa. Descubra sua faixa de peso ideal e receba orientações sobre saúde.',
    type: 'website',
  },
}

export default async function ImcCalculatorPage() {
  return (
    <>
      <ImcCalculatorClient />
    </>
  )
}
