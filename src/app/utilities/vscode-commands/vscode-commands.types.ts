import { useVscodeCommandsModel } from './vscode-commands.model'

export const COMMAND_CATEGORIES = [
  'navegação',
  'edição',
  'busca',
  'debug',
  'git',
  'todos',
] as const

export type CommandCategory = (typeof COMMAND_CATEGORIES)[number]

export type VscodeCommandsViewProps = ReturnType<typeof useVscodeCommandsModel>
