import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import { FavoriteButton } from '@/components/favorite-button'
import { FavoriteItem } from '@/hooks/use-favorites'
import { getIconName } from '@/lib/icon-utils'

interface UtilityItem {
  id?: string
  title: string
  shortTitle: string
  description: string
  href: string
  icon: LucideIcon
  color: string
  bgColor: string
}

interface UtilityGroup {
  title: string
  icon: LucideIcon
  href: string
  description?: string
  items?: UtilityItem[]
}

interface UtilityCardsProps {
  groups: UtilityGroup[]
  showFavorites?: boolean
}

export function UtilityCards({
  groups,
  showFavorites = true,
}: UtilityCardsProps) {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.title}>
          <div className="mb-6 flex items-center gap-2">
            <group.icon className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">{group.title}</h2>
          </div>
          {group.description && (
            <p className="text-muted-foreground mb-4">{group.description}</p>
          )}

          {group.items && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.map((item: UtilityItem) => {
                const favoriteItem: Omit<FavoriteItem, 'addedAt'> = {
                  id: item.id || item.href,
                  title: item.title,
                  shortTitle: item.shortTitle,
                  description: item.description,
                  href: item.href,
                  icon: getIconName(item.icon),
                  color: item.color,
                  bgColor: item.bgColor,
                  group: group.title,
                }

                return (
                  <Card
                    key={item.title}
                    className="h-full transition-all duration-200 hover:shadow-md hover:scale-[1.02] group relative"
                  >
                    {showFavorites && (
                      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FavoriteButton item={favoriteItem} />
                      </div>
                    )}

                    <Link href={item.href} className="block h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform`}
                          >
                            <item.icon className={`h-5 w-5 ${item.color}`} />
                          </div>
                          <CardTitle className="text-lg">
                            {item.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-sm">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
