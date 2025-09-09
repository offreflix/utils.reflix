'use client'

import { useVscodeCommandsModel } from './vscode-commands.model'
import { VscodeCommandsView } from './vscode-commands.view'

export function VscodeCommandsClient() {
  const methods = useVscodeCommandsModel()

  return <VscodeCommandsView {...methods} />
}
