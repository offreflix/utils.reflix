import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { ValueCardProps } from '../about.types'

export function ValueCard({
  icon: Icon,
  title,
  description,
  details,
  featured = false,
  index,
}: ValueCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className={`
        group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]
        ${
          featured
            ? 'bg-primary/5 border-primary/30 shadow-lg hover:shadow-xl'
            : 'hover:border-primary/50 hover:shadow-md'
        }
        ${isExpanded ? 'scale-105 z-10 shadow-2xl' : ''}
      `}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`
            p-3 rounded-xl transition-all duration-300
            ${
              featured
                ? 'bg-primary/20 text-primary shadow-lg'
                : 'bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary'
            }
          `}
          >
            <Icon className="h-7 w-7" />
          </div>
          <ChevronRight
            className={`
            h-5 w-5 text-muted-foreground transition-transform duration-300
            ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}
          `}
          />
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>

          <div
            className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${isExpanded ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}
          >
            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                {details}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
