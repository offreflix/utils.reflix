'use client'

import { useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface Props {
  value: number
  onChange: (value: number) => void
  placeholder?: string
  className?: string
}

function formatBRL(cents: number): string {
  return (cents / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function toCents(value: number): number {
  return Math.round(value * 100)
}

export function CurrencyInput({
  value,
  onChange,
  placeholder = '0,00',
  className,
}: Props) {
  const [display, setDisplay] = useState(() =>
    value > 0 ? formatBRL(toCents(value)) : '',
  )
  const focused = useRef(false)

  // Sync display when value changes externally (e.g. form reset)
  useEffect(() => {
    if (!focused.current) {
      setDisplay(value > 0 ? formatBRL(toCents(value)) : '')
    }
  }, [value])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, '')

    if (!digits) {
      setDisplay('')
      onChange(0)
      return
    }

    const cents = parseInt(digits, 10)
    setDisplay(formatBRL(cents))
    onChange(cents / 100)
  }

  return (
    <Input
      type="text"
      inputMode="numeric"
      value={display}
      onChange={handleChange}
      onFocus={() => {
        focused.current = true
      }}
      onBlur={() => {
        focused.current = false
      }}
      placeholder={placeholder}
      className={cn(className)}
    />
  )
}
