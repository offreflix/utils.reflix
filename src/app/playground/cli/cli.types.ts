export interface CliCommand {
  name: string
  description: string
  usage?: string
  examples?: string[]
}

export interface CliHistory {
  command: string
  output: string
  timestamp: Date
}

export type TerminalTheme = 'light' | 'dark' | 'system'
export type OperatingSystem = 'windows' | 'mac' | 'linux'

export interface CliState {
  history: CliHistory[]
  currentCommand: string
  isProcessing: boolean
  terminalTheme: TerminalTheme
  operatingSystem: OperatingSystem
}

export interface CliViewProps {
  history: CliHistory[]
  currentCommand: string
  isProcessing: boolean
  terminalTheme: TerminalTheme
  operatingSystem: OperatingSystem
  onCommandSubmit: (command: string) => void
  onCommandChange: (command: string) => void
  onTerminalThemeChange: (theme: TerminalTheme) => void
  onOperatingSystemChange: (os: OperatingSystem) => void
}
