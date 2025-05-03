import { cn } from '@/lib/utils'
import { Binoculars, Crown, Eye, Home } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { Upgrade, UpgradeData } from './invisible-rooster.type'
import { INITIAL_UPGRADES_DATA } from './initial-upgrades'

const STORAGE_KEY = 'rooster-clicker-data'

const getUpgradeIcon = (id: string) => {
  switch (id) {
    case 'eagle-eyes':
      return <Eye className="size-4" />
    case 'binoculars':
      return <Binoculars className="size-4" />
    case 'quantum-coop':
      return <Home className="size-4" />
    case 'alpha-call':
      return <Crown className="size-4" />
    default:
      return null
  }
}

export function useInvisibleRoosterModel() {
  const [count, setCount] = useState<number | null>(null)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [upgrades, setUpgrades] = useState<Upgrade[]>(() =>
    INITIAL_UPGRADES_DATA.map((data) => ({
      ...data,
      icon: getUpgradeIcon(data.id),
    }))
  )
  const [clickPower, setClickPower] = useState(1)
  const [passivePower, setPassivePower] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [multiplierTimeLeft, setMultiplierTimeLeft] = useState(0)
  const [clickAnimation, setClickAnimation] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      const { count, upgradesData, clickPower, passivePower } =
        JSON.parse(savedData)
      setCount(count)
      setUpgrades(
        upgradesData.map((data: UpgradeData) => ({
          ...data,
          icon: getUpgradeIcon(data.id),
        }))
      )
      setClickPower(clickPower)
      setPassivePower(passivePower)
    } else {
      setUpgrades(
        INITIAL_UPGRADES_DATA.map((data) => ({
          ...data,
          icon: getUpgradeIcon(data.id),
        }))
      )
      setCount(0)
    }
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (count !== null) {
      const upgradesData = upgrades.map(({ ...data }) => data)
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          count,
          upgradesData,
          clickPower,
          passivePower,
        })
      )
    }
  }, [count, upgrades, clickPower, passivePower])

  useEffect(() => {
    if (passivePower === 0) return

    const interval = setInterval(() => {
      setCount((prev) => (prev !== null ? prev + passivePower * multiplier : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [passivePower, multiplier])

  useEffect(() => {
    if (multiplierTimeLeft <= 0) {
      setMultiplier(1)
      return
    }

    const interval = setInterval(() => {
      setMultiplierTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [multiplierTimeLeft])

  const calculateUpgradeCost = useCallback((upgrade: Upgrade) => {
    return Math.floor(upgrade.baseCost * Math.pow(1.5, upgrade.owned))
  }, [])

  const handleClick = () => {
    setCount((prev) => (prev !== null ? prev + clickPower * multiplier : 0))
    setClickAnimation(true)
    setTimeout(() => setClickAnimation(false), 200)
  }

  const purchaseUpgrade = (upgradeId: string) => {
    const upgradeIndex = upgrades.findIndex((u) => u.id === upgradeId)
    if (upgradeIndex === -1) return

    const upgrade = upgrades[upgradeIndex]
    const cost = calculateUpgradeCost(upgrade)

    if (count === null || count < cost) return

    const newUpgrades = [...upgrades]
    newUpgrades[upgradeIndex] = {
      ...upgrade,
      owned: upgrade.owned + 1,
    }

    setCount(count - cost)
    setUpgrades(newUpgrades)

    const newClickPower = newUpgrades
      .filter((u) => u.type === 'click')
      .reduce((acc, u) => acc + u.effect * u.owned, 1)

    const newPassivePower = newUpgrades
      .filter((u) => u.type === 'passive')
      .reduce((acc, u) => acc + u.effect * u.owned, 0)

    setClickPower(newClickPower)
    setPassivePower(newPassivePower)

    if (upgrade.type === 'multiplier') {
      setMultiplier(upgrade.effect)
      setMultiplierTimeLeft(30)
    }
  }

  const containerClasses = cn(
    'fixed bottom-4 right-4 z-50',
    'transition-all duration-300 ease-in-out',
    'transform-gpu',
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  )

  return {
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
  }
}
