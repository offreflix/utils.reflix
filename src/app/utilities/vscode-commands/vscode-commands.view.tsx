'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import Script from 'next/script'
import { jsonLd } from './vscode-commands.metadata'
import type { VscodeCommandsViewProps } from './vscode-commands.types'
import {
  COMMAND_CATEGORIES,
  type CommandCategory,
} from './vscode-commands.types'
import type { VscodeCommand } from './vscode-commands.model'
import {
  X,
  Command,
  Search,
  Navigation,
  Edit,
  Bug,
  GitBranch,
  List,
  Filter,
} from 'lucide-react'

const categoryLabels: Record<CommandCategory | 'todos', string> = {
  navegação: 'Navegação',
  edição: 'Edição',
  busca: 'Busca',
  debug: 'Debug',
  git: 'Git',
  todos: 'Todos os comandos',
}

const categoryIcons: Record<CommandCategory | 'todos', React.ReactNode> = {
  navegação: <Navigation className="h-4 w-4" />,
  edição: <Edit className="h-4 w-4" />,
  busca: <Search className="h-4 w-4" />,
  debug: <Bug className="h-4 w-4" />,
  git: <GitBranch className="h-4 w-4" />,
  todos: <List className="h-4 w-4" />,
}

export const VscodeCommandsView = (props: VscodeCommandsViewProps) => {
  const { form, onSubmit, setSearchTerm, filteredCommands, clearFilters } =
    props

  const searchValue = form.watch('searchTerm') || ''
  const categoryValue = form.watch('category') || 'todos'
  const hasActiveFilters = searchValue.length > 0 || categoryValue !== 'todos'

  const handleCategoryChange = (value: CommandCategory) => {
    form.setValue('category', value)
    // Trigger immediate filtering
    onSubmit(form.getValues())
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    form.setValue('searchTerm', value)
    setSearchTerm(value)
    // Trigger immediate filtering
    onSubmit(form.getValues())
  }

  const handleClearFilters = () => {
    form.reset({ category: 'todos', searchTerm: '' })
    setSearchTerm('')
    clearFilters()
  }

  return (
    <>
      <Script
        id="vscode-commands-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="font-sans">
        <section className="flex flex-col gap-6">
          {/* Filtros compactos */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full sm:w-auto">
              {/* Busca */}
              <div className="relative flex-1 min-w-0 sm:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar comandos..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>

              {/* Categoria */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select
                  value={categoryValue}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {COMMAND_CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        <div className="flex items-center gap-2">
                          {categoryIcons[category]}
                          <span>{categoryLabels[category]}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Filtros ativos */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Filtros ativos:
                </span>
                {searchValue && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Search className="h-3 w-3" />
                    &quot;{searchValue}&quot;
                    <button
                      onClick={() => {
                        form.setValue('searchTerm', '')
                        setSearchTerm('')
                        onSubmit(form.getValues())
                      }}
                      className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}

                {categoryValue !== 'todos' && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {categoryIcons[categoryValue as keyof typeof categoryIcons]}
                    {
                      categoryLabels[
                        categoryValue as keyof typeof categoryLabels
                      ]
                    }
                    <button
                      onClick={() => handleCategoryChange('todos')}
                      className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </div>

              {/* Limpar filtros */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCategoryChange('todos')}
                className="flex items-center gap-2 bg-transparent hover:bg-transparent"
              >
                <X className="h-4 w-4" />
                Limpar
              </Button>
            </div>
          )}

          {/* Resultados */}
          <Card className="w-full">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Command className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-xl">Comandos VS Code</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {filteredCommands.length === 0
                        ? 'Nenhum resultado encontrado'
                        : `${filteredCommands.length} ${
                            filteredCommands.length === 1
                              ? 'comando encontrado'
                              : 'comandos encontrados'
                          }`}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="text-sm font-mono">
                  {filteredCommands.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-0">
                {filteredCommands.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                      <Search className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">
                      Nenhum comando encontrado
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Tente ajustar seus filtros ou termos de busca
                    </p>
                    {hasActiveFilters && (
                      <Button variant="outline" onClick={handleClearFilters}>
                        Limpar todos os filtros
                      </Button>
                    )}
                  </div>
                ) : (
                  filteredCommands.map(
                    (command: VscodeCommand, index: number) => (
                      <div key={index}>
                        <div className="group py-4 px-1 hover:bg-accent/30 rounded-lg transition-all duration-200">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <Badge
                                variant="outline"
                                className="font-mono text-sm bg-background border-2 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all"
                              >
                                {command.shortcut}
                              </Badge>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                {command.platform && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {command.platform}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm leading-relaxed text-foreground">
                                {command.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        {index < filteredCommands.length - 1 && (
                          <Separator className="my-0 opacity-50" />
                        )}
                      </div>
                    ),
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}
