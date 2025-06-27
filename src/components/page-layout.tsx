import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  title: string
  description: string
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <main className="prose w-full max-w-7xl my-8 space-y-8 px-8 sm:px-8 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold font-heading tracking-tight">
          {title}
        </h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {children}
    </main>
  )
}
