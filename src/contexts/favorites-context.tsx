'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useFavorites, FavoriteItem } from '@/hooks/use-favorites'

interface FavoritesContextType {
  favorites: FavoriteItem[]
  isLoaded: boolean
  addToFavorites: (item: Omit<FavoriteItem, 'addedAt'>) => void
  removeFromFavorites: (id: string) => void
  isFavorite: (id: string) => boolean
  toggleFavorite: (item: Omit<FavoriteItem, 'addedAt'>) => void
  clearFavorites: () => void
  reorderFavorites: (newOrder: FavoriteItem[]) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const favoritesData = useFavorites()

  return (
    <FavoritesContext.Provider value={favoritesData}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavoritesContext() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error(
      'useFavoritesContext deve ser usado dentro de um FavoritesProvider',
    )
  }
  return context
}
