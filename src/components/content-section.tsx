import { ReactNode } from 'react'

interface ContentSectionProps {
  title: string
  children: ReactNode
  className?: string
}

export function ContentSection({
  title,
  children,
  className = '',
}: ContentSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-2xl font-semibold mb-4 font-heading tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  )
}
