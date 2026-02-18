import type { ReactNode } from 'react'
import { metadata } from './juros-compostos.metadata'

export { metadata }

export default function JurosCompostosLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
