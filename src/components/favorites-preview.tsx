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
import { Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Icon } from '@/components/ui/icon'

export function FavoritesPreview() {
  const { favorites, isLoaded } = useFavoritesContext()

  if (!isLoaded || favorites.length === 0) {
    return null
  }

  const recentFavorites = favorites
    .sort((a, b) => b.addedAt - a.addedAt)
    .slice(0, 3)

  return (
    <div className="space-y-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          <h2 className="text-xl font-semibold">Favoritos Recentes</h2>
        </div>
        <Link href="/favorites">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            Ver todos
            <ArrowRight className="h-3 w-3" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentFavorites.map((item) => (
          <Card
            key={item.id}
            className="h-full transition-all duration-200 hover:shadow-md hover:scale-[1.02] group relative"
          >
            <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <FavoriteButton item={item} />
            </div>

            <Link href={item.href} className="block h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      name={item.icon}
                      className={`h-5 w-5 ${item.color}`}
                    />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
