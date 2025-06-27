import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface UtilityItem {
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
}

export function UtilityCards({ groups }: UtilityCardsProps) {
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
              {group.items.map((item: UtilityItem) => (
                <Link key={item.title} href={item.href}>
                  <Card className="h-full transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform`}
                        >
                          <item.icon className={`h-5 w-5 ${item.color}`} />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
