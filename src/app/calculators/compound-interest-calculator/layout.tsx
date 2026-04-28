import type { ReactNode } from 'react'
import { metadata } from './compound-interest-calculator.metadata'

export { metadata }

export default function CompoundInterestLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
