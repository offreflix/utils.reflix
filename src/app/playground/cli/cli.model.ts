import { useState, useCallback, useEffect } from 'react'
import { useTheme } from 'next-themes'
import type {
  CliHistory,
  CliCommand,
  TerminalTheme,
  OperatingSystem,
} from './cli.types'

const COMMANDS: Record<string, CliCommand> = {
  help: {
    name: 'help',
    description: 'Mostra todos os comandos disponíveis',
    usage: 'help [comando]',
    examples: ['help', 'help echo'],
  },
  clear: {
    name: 'clear',
    description: 'Limpa o terminal',
    usage: 'clear',
    examples: ['clear'],
  },
  date: {
    name: 'date',
    description: 'Mostra a data e hora atual',
    usage: 'date',
    examples: ['date'],
  },
  echo: {
    name: 'echo',
    description: 'Repete o texto digitado',
    usage: 'echo [texto]',
    examples: ['echo Olá mundo', 'echo "Texto com espaços"'],
  },
  whoami: {
    name: 'whoami',
    description: 'Mostra informações do usuário',
    usage: 'whoami',
    examples: ['whoami'],
  },
  ls: {
    name: 'ls',
    description: 'Lista arquivos e diretórios (simulado)',
    usage: 'ls [opções]',
    examples: ['ls', 'ls -la'],
  },
  pwd: {
    name: 'pwd',
    description: 'Mostra o diretório atual (simulado)',
    usage: 'pwd',
    examples: ['pwd'],
  },
  uptime: {
    name: 'uptime',
    description: 'Tempo de atividade do sistema (simulado)',
    usage: 'uptime',
    examples: ['uptime'],
  },
  memory: {
    name: 'memory',
    description: 'Informações de memória (simulado)',
    usage: 'memory',
    examples: ['memory'],
  },
  joke: {
    name: 'joke',
    description: 'Conta uma piada',
    usage: 'joke',
    examples: ['joke'],
  },
  quote: {
    name: 'quote',
    description: 'Mostra uma citação inspiradora',
    usage: 'quote',
    examples: ['quote'],
  },
  weather: {
    name: 'weather',
    description: 'Simula informações do clima',
    usage: 'weather [cidade]',
    examples: ['weather', 'weather São Paulo'],
  },
  calc: {
    name: 'calc',
    description: 'Calculadora simples',
    usage: 'calc [expressão]',
    examples: ['calc 2+2', 'calc "10 * 5"'],
  },
  theme: {
    name: 'theme',
    description: 'Altera o tema da aplicação',
    usage: 'theme [light|dark|system]',
    examples: ['theme light', 'theme dark', 'theme system'],
  },
  terminal: {
    name: 'terminal',
    description: 'Altera o tema do terminal',
    usage: 'terminal [light|dark|system]',
    examples: ['terminal light', 'terminal dark', 'terminal system'],
  },
  os: {
    name: 'os',
    description: 'Altera o estilo do sistema operacional',
    usage: 'os [windows|mac|linux]',
    examples: ['os windows', 'os mac', 'os linux'],
  },
  reset: {
    name: 'reset',
    description: 'Limpa as configurações salvas',
    usage: 'reset',
    examples: ['reset'],
  },
}

const JOKES = [
  'Por que o programador foi ao médico? Porque estava com bugs!',
  'Qual é o café favorito do programador? Java!',
  'Por que o computador foi ao médico? Porque estava com vírus!',
  'O que o programador disse quando ficou sem internet? "Agora posso focar no código!"',
  'Por que o desenvolvedor quebrou o espelho? Porque ele só queria ver o código!',
]

const QUOTES = [
  'O código é poesia em movimento. - Desconhecido',
  'Programar é a arte de criar algo do nada. - Desconhecido',
  'O melhor código é aquele que não precisa de comentários. - Desconhecido',
  'Debugging é duas vezes mais difícil que escrever código. - Brian Kernighan',
  'A simplicidade é a sofisticação final. - Leonardo da Vinci',
  'Desista dos seus sonhos e morra. - Reflix',
]

export const useCliModel = () => {
  const { setTheme, theme } = useTheme()
  const [history, setHistory] = useState<CliHistory[]>([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [terminalTheme, setTerminalTheme] = useState<TerminalTheme>('system')
  const [operatingSystem, setOperatingSystem] =
    useState<OperatingSystem>('windows')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTerminalTheme = localStorage.getItem(
        'cli-terminal-theme',
      ) as TerminalTheme
      const savedOperatingSystem = localStorage.getItem(
        'cli-operating-system',
      ) as OperatingSystem

      if (
        savedTerminalTheme &&
        ['light', 'dark', 'system'].includes(savedTerminalTheme)
      ) {
        setTerminalTheme(savedTerminalTheme)
      }

      if (
        savedOperatingSystem &&
        ['windows', 'mac', 'linux'].includes(savedOperatingSystem)
      ) {
        setOperatingSystem(savedOperatingSystem)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedOS = localStorage.getItem('cli-operating-system')
      if (!savedOS) {
        const detectOS = (): OperatingSystem => {
          const userAgent = navigator.userAgent.toLowerCase()

          if (userAgent.includes('mac')) {
            return 'mac'
          } else if (userAgent.includes('linux')) {
            return 'linux'
          } else {
            return 'windows'
          }
        }

        const detectedOS = detectOS()
        setOperatingSystem(detectedOS)
      }
    }
  }, [])

  const executeCommand = useCallback((command: string): string => {
    const trimmedCommand = command.trim()
    if (!trimmedCommand) return ''

    const [cmd, ...args] = trimmedCommand.split(' ')
    const commandName = cmd.toLowerCase()

    switch (commandName) {
      case 'help':
        if (args.length > 0) {
          const specificCommand = COMMANDS[args[0]]
          if (specificCommand) {
            return `Comando: ${specificCommand.name}\nDescrição: ${
              specificCommand.description
            }\nUso: ${
              specificCommand.usage
            }\nExemplos: ${specificCommand.examples?.join(', ')}`
          }
          return `Comando "${args[0]}" não encontrado. Use "help" para ver todos os comandos.`
        }
        return `Comandos disponíveis:\n${Object.values(COMMANDS)
          .map((cmd) => `  ${cmd.name} - ${cmd.description}`)
          .join('\n')}\n\nUse "help [comando]" para mais detalhes.`

      case 'clear':
        setHistory([])
        return 'Terminal limpo.'

      case 'date':
        return new Date().toLocaleString('pt-BR')

      case 'echo':
        return args.join(' ') || ''

      case 'whoami':
        return 'Usuário: Visitante\nSistema: CLI Simulator\nVersão: 1.0.0'

      case 'ls':
        return 'documentos/  downloads/  imagens/  projetos/\n(Simulação - arquivos fictícios)'

      case 'pwd':
        return '/home/visitante/cli-simulator'

      case 'uptime':
        return `Sistema ativo há: ${Math.floor(
          Math.random() * 24,
        )}h ${Math.floor(Math.random() * 60)}m\n(Simulação)`

      case 'memory':
        return `Memória total: 8GB\nMemória livre: ${
          Math.floor(Math.random() * 4) + 2
        }GB\nUso: ${Math.floor(Math.random() * 50) + 20}%\n(Simulação)`

      case 'joke':
        return JOKES[Math.floor(Math.random() * JOKES.length)]

      case 'quote':
        return QUOTES[Math.floor(Math.random() * QUOTES.length)]

      case 'weather':
        const city = args.join(' ') || 'Local atual'
        const temp = Math.floor(Math.random() * 30) + 10
        const conditions = [
          'Ensolarado',
          'Nublado',
          'Chuvoso',
          'Parcialmente nublado',
        ]
        const condition =
          conditions[Math.floor(Math.random() * conditions.length)]
        return `Clima em ${city}:\nTemperatura: ${temp}°C\nCondição: ${condition}\n(Simulação)`

      case 'calc':
        try {
          const expression = args.join(' ')
          if (!expression) return 'Uso: calc [expressão]\nExemplo: calc 2+2'
          const result = eval(expression)
          return `${expression} = ${result}`
        } catch {
          return 'Erro: Expressão inválida'
        }

      case 'theme':
        const themeArg = args[0]?.toLowerCase()
        if (!themeArg) {
          return `Tema atual: ${
            theme || 'system'
          }\nUso: theme [light|dark|system]`
        }

        if (['light', 'dark', 'system'].includes(themeArg)) {
          setTheme(themeArg)
          return `Tema alterado para: ${themeArg}`
        } else {
          return `Tema inválido: ${themeArg}\nTemas disponíveis: light, dark, system`
        }

      case 'terminal':
        const terminalArg = args[0]?.toLowerCase()
        if (!terminalArg) {
          return `Tema do terminal atual: ${terminalTheme}\nUso: terminal [light|dark|system]`
        }

        if (['light', 'dark', 'system'].includes(terminalArg)) {
          const newTheme = terminalArg as TerminalTheme
          handleTerminalThemeChange(newTheme)
          return `Tema do terminal alterado para: ${terminalArg}`
        } else {
          return `Tema inválido: ${terminalArg}\nTemas disponíveis: light, dark, system`
        }

      case 'os':
        const osArg = args[0]?.toLowerCase()
        if (!osArg) {
          return `Sistema operacional atual: ${operatingSystem}\nUso: os [windows|mac|linux]`
        }

        if (['windows', 'mac', 'linux'].includes(osArg)) {
          const newOS = osArg as OperatingSystem
          handleOperatingSystemChange(newOS)
          return `Sistema operacional alterado para: ${osArg}`
        } else {
          return `Sistema operacional inválido: ${osArg}\nOpções disponíveis: windows, mac, linux`
        }

      case 'reset':
        if (typeof window !== 'undefined') {
          localStorage.removeItem('cli-terminal-theme')
          localStorage.removeItem('cli-operating-system')
        }
        setTerminalTheme('system')
        setOperatingSystem('windows')
        return 'Configurações limpas. Tema: system, OS: windows'

      default:
        return `Comando "${commandName}" não encontrado. Use "help" para ver os comandos disponíveis.`
    }
  }, [])

  const handleCommandSubmit = useCallback(
    async (command: string) => {
      if (!command.trim()) return

      setIsProcessing(true)

      await new Promise((resolve) => setTimeout(resolve, 100))

      const output = executeCommand(command)

      const newEntry: CliHistory = {
        command,
        output,
        timestamp: new Date(),
      }

      setHistory((prev) => [...prev, newEntry])
      setCurrentCommand('')
      setIsProcessing(false)
    },
    [executeCommand],
  )

  const handleCommandChange = useCallback((command: string) => {
    setCurrentCommand(command)
  }, [])

  const handleTerminalThemeChange = useCallback((newTheme: TerminalTheme) => {
    setTerminalTheme(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cli-terminal-theme', newTheme)
    }
  }, [])

  const handleOperatingSystemChange = useCallback((newOS: OperatingSystem) => {
    setOperatingSystem(newOS)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cli-operating-system', newOS)
    }
  }, [])

  return {
    history,
    currentCommand,
    isProcessing,
    terminalTheme,
    operatingSystem,
    onCommandSubmit: handleCommandSubmit,
    onCommandChange: handleCommandChange,
    onTerminalThemeChange: handleTerminalThemeChange,
    onOperatingSystemChange: handleOperatingSystemChange,
  }
}
