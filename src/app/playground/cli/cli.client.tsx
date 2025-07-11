'use client'

import { useCliModel } from './cli.model'
import { CliView } from './cli.view'

export function CliClient() {
  const methods = useCliModel()

  return <CliView {...methods} />
}
