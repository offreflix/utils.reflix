import { useState, useEffect, useCallback } from 'react'

export interface FavoriteItem {
  id: string
  title: string
  shortTitle: string
  description: string
  href: string
  icon: string
  color: string
  bgColor: string
  group: string
  addedAt: number
}

const FAVORITES_STORAGE_KEY = 'utils-reflix-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setFavorites(Array.isArray(parsed) ? parsed : [])
      }
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  const saveFavorites = useCallback((newFavorites: FavoriteItem[]) => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites))
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error)
    }
  }, [])

  const addToFavorites = useCallback(
    (item: Omit<FavoriteItem, 'addedAt'>) => {
      const newFavorite: FavoriteItem = {
        ...item,
        addedAt: Date.now(),
      }

      setFavorites((prev) => {
        const newFavorites = [...prev, newFavorite]
        saveFavorites(newFavorites)
        return newFavorites
      })
    },
    [saveFavorites],
  )

  const removeFromFavorites = useCallback(
    (id: string) => {
      setFavorites((prev) => {
        const newFavorites = prev.filter((fav) => fav.id !== id)
        saveFavorites(newFavorites)
        return newFavorites
      })
    },
    [saveFavorites],
  )

  const isFavorite = useCallback(
    (id: string) => {
      return favorites.some((fav) => fav.id === id)
    },
    [favorites],
  )

  const toggleFavorite = useCallback(
    (item: Omit<FavoriteItem, 'addedAt'>) => {
      if (isFavorite(item.id)) {
        removeFromFavorites(item.id)
      } else {
        addToFavorites(item)
      }
    },
    [isFavorite, addToFavorites, removeFromFavorites],
  )

  const clearFavorites = useCallback(() => {
    setFavorites([])
    localStorage.removeItem(FAVORITES_STORAGE_KEY)
  }, [])

  const reorderFavorites = useCallback(
    (newOrder: FavoriteItem[]) => {
      setFavorites(newOrder)
      saveFavorites(newOrder)
    },
    [saveFavorites],
  )

  return {
    favorites,
    isLoaded,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    reorderFavorites,
  }
}
