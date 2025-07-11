import type { ReactNode } from 'react'
import { metadata } from './tmb-calculator.metadata'

export { metadata }

export default function TmbCalculatorLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
