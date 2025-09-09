import type { ReactNode } from 'react'
import { metadata } from './vscode-commands.metadata'

export { metadata }

export default function VscodeCommandsLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
