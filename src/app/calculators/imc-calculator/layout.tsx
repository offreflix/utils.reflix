import type { ReactNode } from 'react'
import { metadata } from './imc-calculator.metadata'

export { metadata }

export default function ImcCalculatorLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
