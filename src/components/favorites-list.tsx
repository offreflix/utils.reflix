'use client'

import { useFavoritesContext } from '@/contexts/favorites-context'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FavoriteButton } from '@/components/favorite-button'
import { Heart, Trash2, ArrowUp, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'
import { Icon } from '@/components/ui/icon'

export function FavoritesList() {
  const { favorites, isLoaded, clearFavorites } = useFavoritesContext()
  const [sortBy, setSortBy] = useState<'addedAt' | 'title' | 'group'>('addedAt')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando favoritos...</p>
        </div>
      </div>
    )
  }

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Nenhum favorito ainda</h3>
        <p className="text-muted-foreground mb-6">
          Adicione ferramentas aos seus favoritos para encontrá-las aqui
          rapidamente.
        </p>
        <Link href="/">
          <Button>Explorar Ferramentas</Button>
        </Link>
      </div>
    )
  }

  const sortedFavorites = [...favorites].sort((a, b) => {
    let comparison = 0

    switch (sortBy) {
      case 'addedAt':
        comparison = a.addedAt - b.addedAt
        break
      case 'title':
        comparison = a.title.localeCompare(b.title)
        break
      case 'group':
        comparison = a.group.localeCompare(b.group)
        break
    }

    return sortOrder === 'asc' ? comparison : -comparison
  })

  const handleClearAll = () => {
    if (confirm('Tem certeza que deseja remover todos os favoritos?')) {
      clearFavorites()
      toast('Todos os favoritos foram removidos')
    }
  }

  const handleSort = (newSortBy: typeof sortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(newSortBy)
      setSortOrder('asc')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          <span className="font-medium">
            {favorites.length}{' '}
            {favorites.length === 1 ? 'favorito' : 'favoritos'}
          </span>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSort('title')}
            className="flex items-center gap-1"
          >
            Nome
            {sortBy === 'title' &&
              (sortOrder === 'asc' ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowDown className="h-3 w-3" />
              ))}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSort('group')}
            className="flex items-center gap-1"
          >
            Categoria
            {sortBy === 'group' &&
              (sortOrder === 'asc' ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowDown className="h-3 w-3" />
              ))}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSort('addedAt')}
            className="flex items-center gap-1"
          >
            Data
            {sortBy === 'addedAt' &&
              (sortOrder === 'asc' ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowDown className="h-3 w-3" />
              ))}
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={handleClearAll}
            className="flex items-center gap-1"
          >
            <Trash2 className="h-3 w-3" />
            Limpar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedFavorites.map((item) => (
          <Card
            key={item.id}
            className="h-full transition-all duration-200 hover:shadow-md group"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`p-2 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      name={item.icon}
                      className={`h-5 w-5 ${item.color}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg truncate">
                      {item.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.group}
                    </p>
                  </div>
                </div>
                <FavoriteButton item={item} />
              </div>
            </CardHeader>

            <Link href={item.href}>
              <CardContent className="pt-0 cursor-pointer">
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
                <p className="text-xs text-muted-foreground mt-2">
                  Adicionado em{' '}
                  {new Date(item.addedAt).toLocaleDateString('pt-BR')}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
