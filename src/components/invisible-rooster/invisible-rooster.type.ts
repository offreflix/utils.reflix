export type UpgradeData = {
  id: string
  name: string
  description: string
  baseCost: number
  owned: number
  effect: number
  type: 'click' | 'passive' | 'multiplier'
  emoji: string
}

export type Upgrade = UpgradeData & {
  icon: React.ReactNode
}
