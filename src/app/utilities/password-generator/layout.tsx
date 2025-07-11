import type { ReactNode } from 'react'
import { metadata } from './password-generator.metadata'

export { metadata }

export default function PasswordGeneratorLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
