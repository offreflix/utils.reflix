import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema, FormSchema } from './vscode-commands.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { CommandCategory } from './vscode-commands.types'

export interface VscodeCommand {
  shortcut: string
  description: string
  category: CommandCategory
  platform?: 'windows' | 'mac' | 'linux'
}

export const vscodeCommands: VscodeCommand[] = [
  // Navegação
  {
    shortcut: 'Ctrl + B',
    description: 'Mostrar ou ocultar o explorador de ficheiros lateral',
    category: 'navegação',
  },
  {
    shortcut: 'Ctrl + Shift + E',
    description: 'Abrir o explorador de ficheiros',
    category: 'navegação',
  },
  {
    shortcut: 'Ctrl + Shift + F',
    description: 'Abrir a pesquisa global',
    category: 'navegação',
  },
  {
    shortcut: 'Ctrl + Shift + P',
    description: 'Abrir a paleta de comandos',
    category: 'navegação',
  },
  {
    shortcut: 'Ctrl + G',
    description: 'Ir para linha específica',
    category: 'navegação',
  },
  {
    shortcut: 'Ctrl + T',
    description: 'Abrir ficheiro rapidamente',
    category: 'navegação',
  },
  {
    shortcut: 'Ctrl + Tab',
    description: 'Alternar entre ficheiros abertos',
    category: 'navegação',
  },
  {
    shortcut: 'Ctrl + PageUp/PageDown',
    description: 'Navegar entre abas',
    category: 'navegação',
  },

  // Edição
  {
    shortcut: 'Ctrl + C',
    description: 'Copiar linha ou seleção',
    category: 'edição',
  },
  {
    shortcut: 'Ctrl + X',
    description: 'Cortar linha ou seleção',
    category: 'edição',
  },
  {
    shortcut: 'Ctrl + V',
    description: 'Colar',
    category: 'edição',
  },
  {
    shortcut: 'Ctrl + Z',
    description: 'Desfazer',
    category: 'edição',
  },
  {
    shortcut: 'Ctrl + Y',
    description: 'Refazer',
    category: 'edição',
  },
  {
    shortcut: 'Alt + ↑/↓',
    description: 'Mover linha para cima/baixo',
    category: 'edição',
  },
  {
    shortcut: 'Shift + Alt + ↑/↓',
    description: 'Copiar linha para cima/baixo',
    category: 'edição',
  },
  {
    shortcut: 'Ctrl + D',
    description: 'Selecionar próxima ocorrência',
    category: 'edição',
  },
  {
    shortcut: 'Ctrl + L',
    description: 'Selecionar linha atual',
    category: 'edição',
  },
  {
    shortcut: 'Ctrl + /',
    description: 'Comentar/descomentar linha',
    category: 'edição',
  },
  {
    shortcut: 'Ctrl + K, Ctrl + C',
    description: 'Comentar linha',
    category: 'edição',
  },
  {
    shortcut: 'Ctrl + K, Ctrl + U',
    description: 'Descomentar linha',
    category: 'edição',
  },
  {
    shortcut: 'Tab',
    description: 'Indentar linha',
    category: 'edição',
  },
  {
    shortcut: 'Shift + Tab',
    description: 'Remover indentação',
    category: 'edição',
  },

  // Busca
  {
    shortcut: 'Ctrl + F',
    description: 'Pesquisar no ficheiro atual',
    category: 'busca',
  },
  {
    shortcut: 'Ctrl + H',
    description: 'Substituir no ficheiro atual',
    category: 'busca',
  },
  {
    shortcut: 'Ctrl + Shift + F',
    description: 'Pesquisar em todos os ficheiros',
    category: 'busca',
  },
  {
    shortcut: 'Ctrl + Shift + H',
    description: 'Substituir em todos os ficheiros',
    category: 'busca',
  },
  {
    shortcut: 'Ctrl + K, Ctrl + W',
    description: 'Fechar todos os ficheiros',
    category: 'busca',
  },
  {
    shortcut: 'Ctrl + K, Ctrl + T',
    description: 'Mostrar símbolos do ficheiro',
    category: 'busca',
  },

  // Debug
  {
    shortcut: 'F5',
    description: 'Iniciar debug',
    category: 'debug',
  },
  {
    shortcut: 'F9',
    description: 'Adicionar/remover breakpoint',
    category: 'debug',
  },
  {
    shortcut: 'F10',
    description: 'Step over (próximo passo)',
    category: 'debug',
  },
  {
    shortcut: 'F11',
    description: 'Step into (entrar na função)',
    category: 'debug',
  },
  {
    shortcut: 'Shift + F11',
    description: 'Step out (sair da função)',
    category: 'debug',
  },
  {
    shortcut: 'Shift + F5',
    description: 'Parar debug',
    category: 'debug',
  },
  {
    shortcut: 'Ctrl + Shift + F5',
    description: 'Reiniciar debug',
    category: 'debug',
  },

  // Git
  {
    shortcut: 'Ctrl + Shift + G',
    description: 'Abrir controlo de versão',
    category: 'git',
  },
  {
    shortcut: 'Ctrl + Enter',
    description: 'Fazer commit (no controlo de versão)',
    category: 'git',
  },
  {
    shortcut: 'Ctrl + Shift + P, "Git: Pull"',
    description: 'Fazer pull das alterações',
    category: 'git',
  },
  {
    shortcut: 'Ctrl + Shift + P, "Git: Push"',
    description: 'Fazer push das alterações',
    category: 'git',
  },
  {
    shortcut: 'Ctrl + Shift + P, "Git: Commit"',
    description: 'Fazer commit das alterações',
    category: 'git',
  },
]

export const useVscodeCommandsModel = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    CommandCategory | 'todos'
  >('navegação')
  const [searchTerm, setSearchTerm] = useState('')

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: 'navegação',
      searchTerm: '',
    },
  })

  const filteredCommands = vscodeCommands.filter((command) => {
    const matchesCategory =
      selectedCategory === 'todos' || command.category === selectedCategory
    const matchesSearch =
      !searchTerm ||
      command.shortcut.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  function onSubmit(values: FormSchema) {
    setSelectedCategory(values.category)
    setSearchTerm(values.searchTerm || '')
  }

  function clearFilters() {
    setSelectedCategory('todos')
    setSearchTerm('')
    form.reset({
      category: 'navegação',
      searchTerm: '',
    })
  }

  return {
    form,
    onSubmit,
    selectedCategory,
    searchTerm,
    setSearchTerm,
    filteredCommands,
    vscodeCommands,
    clearFilters,
  }
}
