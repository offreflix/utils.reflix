'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Egg } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

const STORAGE_KEY = 'invisible-rooster-count'
const MINIMIZED_STORAGE_KEY = 'invisible-rooster-minimized'

export function InvisibleRoosterCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const savedCount = localStorage.getItem(STORAGE_KEY)
    const savedMinimized = localStorage.getItem(MINIMIZED_STORAGE_KEY)

    if (savedCount) {
      setCount(parseInt(savedCount, 10))
    } else {
      setCount(0)
    }

    if (savedMinimized) {
      setIsMinimized(savedMinimized === 'true')
    }

    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (count !== null) {
      localStorage.setItem(STORAGE_KEY, count.toString())
    }
  }, [count])

  useEffect(() => {
    localStorage.setItem(MINIMIZED_STORAGE_KEY, isMinimized.toString())
  }, [isMinimized])

  const incrementCount = () => {
    setCount((prev) => (prev !== null ? prev + 1 : 0))
  }

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev)
  }

  const containerClasses = cn(
    'fixed bottom-4 right-4 z-50',
    'transition-all duration-300 ease-in-out',
    'transform-gpu',
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
  )

  if (isMinimized) {
    return (
      <div className={containerClasses}>
        <Button
          onClick={toggleMinimize}
          size="icon"
          variant="secondary"
          className={cn(
            'size-10 rounded-md',
            'bg-background/80 backdrop-blur-sm',
            'shadow-lg hover:shadow-xl',
            'transition-all duration-300 ease-in-out',
            'transform-gpu',
            'hover:scale-110 active:scale-95 border',
          )}
          aria-label="Mostrar contador de galos invisíveis"
        >
          <Egg className="size-5 transition-transform duration-300 ease-in-out" />
        </Button>
      </div>
    )
  }

  return (
    <div
      className={cn(
        containerClasses,
        'flex flex-col items-end gap-2',
        'bg-background/80 backdrop-blur-sm',
        'rounded-md border p-3 shadow-lg',
        'hover:shadow-xl',
      )}
    >
      {count === null ? (
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-8 w-full" />
        </div>
      ) : (
        <>
          <div className="flex w-full items-center justify-between gap-2">
            <p className="text-sm font-medium">
              Você já viu {count} galo{count !== 1 ? 's' : ''} invisível
              {count !== 1 ? 's' : ''} hoje
            </p>
            <Button
              onClick={toggleMinimize}
              size="icon"
              variant="ghost"
              className={cn(
                'size-6',
                'transition-all duration-300 ease-in-out',
                'transform-gpu',
                'hover:scale-110 active:scale-95',
              )}
              aria-label="Minimizar contador"
            >
              <Egg className="size-4" />
            </Button>
          </div>
          <Button
            onClick={incrementCount}
            size="sm"
            variant="secondary"
            className={cn(
              'w-full',
              'transition-all duration-300 ease-in-out',
              'transform-gpu',
              'hover:scale-[1.02] active:scale-[0.98]',
            )}
            aria-label="Incrementar contador de galos invisíveis"
          >
            Vi mais um!
          </Button>
        </>
      )}
    </div>
  )
}
