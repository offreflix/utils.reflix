import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <main className="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 lg:px-0 lg:py-8">
      {(title || description) && (
        <div className="flex flex-col gap-2">
          {title && (
            <h1 className="text-4xl font-bold font-heading tracking-tight">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </main>
  )
}
