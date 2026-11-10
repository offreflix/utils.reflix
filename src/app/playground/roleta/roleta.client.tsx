'use client'

import { useRoletaModel } from './roleta.model'
import { RoletaView } from './roleta.view'

export function RoletaClient() {
  const model = useRoletaModel()

  return <RoletaView {...model} />
}
