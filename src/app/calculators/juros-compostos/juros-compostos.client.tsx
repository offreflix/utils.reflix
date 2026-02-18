'use client'

import { useJurosCompostosModel } from './juros-compostos.model'
import { JurosCompostosView } from './juros-compostos.view'

export function JurosCompostosClient() {
  const methods = useJurosCompostosModel()
  return <JurosCompostosView {...methods} />
}
