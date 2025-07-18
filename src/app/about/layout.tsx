import type { ReactNode } from 'react'
import { metadata } from './about.metadata'

export { metadata }

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
