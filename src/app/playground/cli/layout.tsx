import type { ReactNode } from 'react'
import { metadata } from './cli.metadata'

export { metadata }

export default function CliLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
