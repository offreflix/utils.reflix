import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ArticleContentProps {
  children: ReactNode
  className?: string
}

export function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <article className={cn('flex flex-col gap-8', className)}>
      {children}
    </article>
  )
}
