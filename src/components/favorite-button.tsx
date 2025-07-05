'use client'

import { Button } from '@/components/ui/button'
import { Heart, HeartOff } from 'lucide-react'
import { useFavoritesContext } from '@/contexts/favorites-context'
import { FavoriteItem } from '@/hooks/use-favorites'
import { toast } from 'sonner'

interface FavoriteButtonProps {
  item: Omit<FavoriteItem, 'addedAt'>
  size?: 'sm' | 'default' | 'lg'
  variant?: 'ghost' | 'outline' | 'default'
  showText?: boolean
  className?: string
}

export function FavoriteButton({
  item,
  size = 'sm',
  variant = 'ghost',
  showText = false,
  className,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavoritesContext()

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!isLoaded) return

    const isCurrentlyFavorite = isFavorite(item.id)
    toggleFavorite(item)

    toast(
      isCurrentlyFavorite
        ? `${item.title} removido dos favoritos`
        : `${item.title} adicionado aos favoritos`,
      {
        icon: isCurrentlyFavorite ? (
          <HeartOff className="h-4 w-4" />
        ) : (
          <Heart className="h-4 w-4" />
        ),
      },
    )
  }

  if (!isLoaded) {
    return (
      <Button size={size} variant={variant} disabled className={className}>
        <div className="h-4 w-4 animate-pulse bg-muted rounded" />
        {showText && <span className="ml-2">Carregando...</span>}
      </Button>
    )
  }

  const isCurrentlyFavorite = isFavorite(item.id)

  return (
    <Button
      size={size}
      variant={variant}
      onClick={handleToggle}
      className={className}
      title={
        isCurrentlyFavorite
          ? 'Remover dos favoritos'
          : 'Adicionar aos favoritos'
      }
    >
      {isCurrentlyFavorite ? (
        <Heart className="h-4 w-4 fill-current" />
      ) : (
        <Heart className="h-4 w-4" />
      )}
      {showText && (
        <span className="ml-2">
          {isCurrentlyFavorite ? 'Remover' : 'Favoritar'}
        </span>
      )}
    </Button>
  )
}
