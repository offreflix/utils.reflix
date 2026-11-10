import type { ReactNode } from 'react'
import { metadata } from './roleta.metadata'

export { metadata }

export default function RoletaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
