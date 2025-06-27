import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ArticleContentProps {
  children: ReactNode
  className?: string
}

export function ArticleContent({
  children,
  className = 'prose max-w-3xl',
}: ArticleContentProps) {
  return (
    <article className={cn('prose max-w-3xl mx-auto', className)}>
      {children}
    </article>
  )
}
