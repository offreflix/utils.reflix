'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Egg, Zap } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Progress } from '@/components/ui/progress'
import { useInvisibleRoosterModel } from './invisible-rooster.model'

export function InvisibleRoosterView() {
  const {
    isMinimized,
    containerClasses,
    setIsMinimized,
    passivePower,
    multiplier,
    multiplierTimeLeft,
    handleClick,
    clickAnimation,
    count,
    upgrades,
    calculateUpgradeCost,
    purchaseUpgrade,
  } = useInvisibleRoosterModel()

  if (isMinimized) {
    return (
      <div className={containerClasses}>
        <Button
          onClick={() => setIsMinimized(false)}
          size="icon"
          variant="secondary"
          className={cn(
            'size-10 rounded-md',
            'bg-background/80 backdrop-blur-sm',
            'shadow-lg hover:shadow-xl',
            'transition-all duration-300 ease-in-out',
            'transform-gpu',
            'hover:scale-110 active:scale-95 border'
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
        'flex flex-col gap-2',
        'bg-background/80 backdrop-blur-sm',
        'rounded-md border p-3 shadow-lg',
        'hover:shadow-xl',
        'w-80'
      )}
    >
      {count === null ? (
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-8 w-full" />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-sm font-medium">
                Galos Invisíveis: {Math.floor(count)}
              </p>
              {passivePower > 0 && (
                <p className="text-xs text-muted-foreground">
                  +{passivePower * multiplier}/s
                </p>
              )}
            </div>
            <Button
              onClick={() => setIsMinimized(true)}
              size="icon"
              variant="ghost"
              className="size-6"
              aria-label="Minimizar contador"
            >
              <Egg className="size-4" />
            </Button>
          </div>

          {multiplierTimeLeft > 0 && (
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1">
                  <Zap className="size-3" />
                  Multiplicador {multiplier}x
                </span>
                <span>{multiplierTimeLeft}s</span>
              </div>
              <Progress
                value={(multiplierTimeLeft / 30) * 100}
                className="h-1"
              />
            </div>
          )}

          <Button
            onClick={handleClick}
            size="lg"
            variant="secondary"
            className={cn(
              'w-full',
              'transition-all duration-300 ease-in-out',
              'transform-gpu',
              'hover:scale-[1.02] active:scale-[0.98]',
              clickAnimation && 'scale-95'
            )}
            aria-label="Ver galo invisível"
          >
            Ver Galo Invisível! 🐔
          </Button>

          <div className="flex flex-col gap-2 mt-2">
            {upgrades.map((upgrade) => {
              const cost = calculateUpgradeCost(upgrade)
              const canAfford = count >= cost

              return (
                <TooltipProvider key={upgrade.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => purchaseUpgrade(upgrade.id)}
                        variant="outline"
                        size="sm"
                        className={cn(
                          'w-full justify-between',
                          'transition-all duration-300 ease-in-out',
                          'transform-gpu',
                          'hover:scale-[1.02] active:scale-[0.98]',
                          !canAfford && 'opacity-50 cursor-not-allowed'
                        )}
                        disabled={!canAfford}
                      >
                        <div className="flex items-center gap-2">
                          <span>{upgrade.emoji}</span>
                          <span className="text-sm">{upgrade.name}</span>
                          {upgrade.owned > 0 && (
                            <span className="text-xs text-muted-foreground">
                              ({upgrade.owned})
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono">
                          {cost.toLocaleString()}
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{upgrade.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
