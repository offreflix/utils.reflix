'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { animate, useMotionValue } from 'framer-motion'
import { toast } from 'sonner'
import {
  ROLETA_MAX_ITEMS,
  ROLETA_MAX_ITEM_LENGTH,
  ROLETA_MIN_ITEMS,
  roletaItemSchema,
  RoletaItemSchema,
} from './roleta.schema'
import { RoletaHistoryEntry, RoletaItem } from './roleta.types'

const STORAGE_KEY = 'utils-reflix:roleta'
const HISTORY_LIMIT = 20
const SPIN_DURATION = 5.5

type StoredState = {
  items: RoletaItem[]
  history: RoletaHistoryEntry[]
  soundEnabled: boolean
}

function createId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function secureRandomInt(max: number) {
  if (typeof crypto !== 'undefined' && 'getRandomValues' in crypto) {
    const limit = Math.floor(0x100000000 / max) * max
    const buffer = new Uint32Array(1)
    do {
      crypto.getRandomValues(buffer)
    } while (buffer[0] >= limit)
    return buffer[0] % max
  }
  return Math.floor(Math.random() * max)
}

function normalize(label: string) {
  return label.trim().toLocaleLowerCase('pt-BR')
}

function isStoredItem(value: unknown): value is RoletaItem {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as RoletaItem).id === 'string' &&
    typeof (value as RoletaItem).label === 'string'
  )
}

function isStoredHistory(value: unknown): value is RoletaHistoryEntry {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as RoletaHistoryEntry).id === 'string' &&
    typeof (value as RoletaHistoryEntry).label === 'string' &&
    typeof (value as RoletaHistoryEntry).drawnAt === 'string'
  )
}

function loadState(): Partial<StoredState> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    const seen = new Set<string>()
    const items = Array.isArray(parsed.items)
      ? (parsed.items as unknown[])
          .filter(isStoredItem)
          .filter((item) => {
            const key = normalize(item.label)
            if (!key || seen.has(key)) return false
            seen.add(key)
            return true
          })
          .map((item) => ({
            ...item,
            label: item.label.trim().slice(0, ROLETA_MAX_ITEM_LENGTH),
          }))
          .slice(0, ROLETA_MAX_ITEMS)
      : undefined
    const history = Array.isArray(parsed.history)
      ? (parsed.history as unknown[])
          .filter(isStoredHistory)
          .slice(0, HISTORY_LIMIT)
      : undefined
    return {
      items,
      history,
      soundEnabled:
        typeof parsed.soundEnabled === 'boolean'
          ? parsed.soundEnabled
          : undefined,
    }
  } catch {
    return {}
  }
}

export const useRoletaModel = () => {
  const [items, setItems] = useState<RoletaItem[]>([])
  const [history, setHistory] = useState<RoletaHistoryEntry[]>([])
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [hydrated, setHydrated] = useState(false)
  const [spinning, setSpinning] = useState(false)
  const [winner, setWinner] = useState<RoletaItem | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [confettiKey, setConfettiKey] = useState(0)
  const [bulkText, setBulkText] = useState('')

  const rotation = useMotionValue(0)
  const audioRef = useRef<AudioContext | null>(null)
  const itemsRef = useRef(items)
  const soundRef = useRef(soundEnabled)
  const lastTickRef = useRef<number | null>(null)

  const form = useForm<RoletaItemSchema>({
    resolver: zodResolver(roletaItemSchema),
    defaultValues: { text: '' },
  })

  useEffect(() => {
    itemsRef.current = items
  }, [items])

  useEffect(() => {
    soundRef.current = soundEnabled
  }, [soundEnabled])

  // Hidrata o estado salvo no navegador (somente no cliente).
  useEffect(() => {
    const stored = loadState()
    if (stored.items) setItems(stored.items)
    if (stored.history) setHistory(stored.history)
    if (stored.soundEnabled !== undefined) setSoundEnabled(stored.soundEnabled)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      const state: StoredState = { items, history, soundEnabled }
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // armazenamento indisponível: segue sem persistir
    }
  }, [items, history, soundEnabled, hydrated])

  const playTone = useCallback(
    (frequency: number, duration: number, volume = 0.05, delay = 0) => {
      if (!soundRef.current || typeof window === 'undefined') return
      try {
        const Ctx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext })
            .webkitAudioContext
        if (!Ctx) return
        if (!audioRef.current) audioRef.current = new Ctx()
        const ctx = audioRef.current
        if (ctx.state === 'suspended') void ctx.resume()
        const start = ctx.currentTime + delay
        const oscillator = ctx.createOscillator()
        const gain = ctx.createGain()
        oscillator.type = 'triangle'
        oscillator.frequency.value = frequency
        gain.gain.setValueAtTime(volume, start)
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration)
        oscillator.connect(gain)
        gain.connect(ctx.destination)
        oscillator.start(start)
        oscillator.stop(start + duration)
      } catch {
        // áudio indisponível: ignora
      }
    },
    [],
  )

  // Tique sonoro a cada fatia que passa pelo ponteiro.
  useEffect(() => {
    return rotation.on('change', (value) => {
      const count = itemsRef.current.length
      if (count < 2) return
      const slice = 360 / count
      const pointerAngle = (((-value % 360) + 360) % 360) / slice
      const index = Math.floor(pointerAngle)
      if (lastTickRef.current !== null && lastTickRef.current !== index) {
        playTone(700 + (index % 3) * 60, 0.05, 0.03)
      }
      lastTickRef.current = index
    })
  }, [rotation, playTone])

  useEffect(() => {
    return () => {
      void audioRef.current?.close()
    }
  }, [])

  const canSpin = items.length >= ROLETA_MIN_ITEMS && !spinning
  const isFull = items.length >= ROLETA_MAX_ITEMS

  const addItem = form.handleSubmit(({ text }) => {
    if (spinning) return
    if (items.length >= ROLETA_MAX_ITEMS) {
      form.setError('text', {
        message: `Limite de ${ROLETA_MAX_ITEMS} itens atingido.`,
      })
      return
    }
    if (items.some((item) => normalize(item.label) === normalize(text))) {
      form.setError('text', { message: 'Este item já está na roleta.' })
      return
    }
    setItems((current) => [...current, { id: createId(), label: text }])
    form.reset({ text: '' })
  })

  const addBulk = () => {
    if (spinning) return
    const lines = bulkText
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)

    if (lines.length === 0) {
      toast.error('Cole ao menos um item (um por linha).')
      return
    }

    const known = new Set(items.map((item) => normalize(item.label)))
    const added: RoletaItem[] = []
    let duplicates = 0
    let tooLong = 0
    let overLimit = 0

    for (const line of lines) {
      if (line.length > ROLETA_MAX_ITEM_LENGTH) {
        tooLong++
        continue
      }
      const key = normalize(line)
      if (known.has(key)) {
        duplicates++
        continue
      }
      if (items.length + added.length >= ROLETA_MAX_ITEMS) {
        overLimit++
        continue
      }
      known.add(key)
      added.push({ id: createId(), label: line })
    }

    if (added.length > 0) {
      setItems((current) => [...current, ...added])
      setBulkText('')
      toast.success(`${added.length} item(ns) adicionado(s).`)
    }

    const skipped: string[] = []
    if (duplicates) skipped.push(`${duplicates} duplicado(s)`)
    if (tooLong) {
      skipped.push(`${tooLong} com mais de ${ROLETA_MAX_ITEM_LENGTH} caracteres`)
    }
    if (overLimit) skipped.push(`${overLimit} acima do limite de ${ROLETA_MAX_ITEMS}`)
    if (skipped.length > 0) {
      toast.warning(`Ignorados: ${skipped.join(', ')}.`)
    }
  }

  const removeItem = (id: string) => {
    if (spinning) return
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const clearItems = () => {
    if (spinning) return
    setItems([])
  }

  const clearHistory = () => setHistory([])

  const spin = () => {
    if (!canSpin) return

    const count = items.length
    const winnerIndex = secureRandomInt(count)
    const drawn = items[winnerIndex]
    const slice = 360 / count
    // Sorteia um ponto dentro da fatia vencedora (sem encostar nas bordas).
    const target = winnerIndex * slice + slice * (0.15 + Math.random() * 0.7)
    const current = rotation.get()
    const alignment = ((((-target - current) % 360) + 360) % 360)
    const extraTurns = 360 * (5 + secureRandomInt(3))

    setWinner(null)
    setDialogOpen(false)
    setSpinning(true)
    lastTickRef.current = null

    animate(rotation, current + alignment + extraTurns, {
      duration: SPIN_DURATION,
      ease: [0.12, 0.7, 0.1, 1],
      onComplete: () => {
        setSpinning(false)
        setWinner(drawn)
        setDialogOpen(true)
        setConfettiKey((key) => key + 1)
        setHistory((entries) =>
          [
            { id: createId(), label: drawn.label, drawnAt: new Date().toISOString() },
            ...entries,
          ].slice(0, HISTORY_LIMIT),
        )
        ;[523, 659, 784, 1047].forEach((frequency, index) =>
          playTone(frequency, 0.25, 0.06, index * 0.11),
        )
      },
    })
  }

  const removeWinner = () => {
    if (winner) {
      setItems((current) => current.filter((item) => item.id !== winner.id))
    }
    setDialogOpen(false)
  }

  const spinAgain = () => {
    setDialogOpen(false)
    // aguarda o fechamento do dialog para iniciar o próximo giro
    window.setTimeout(spin, 150)
  }

  return {
    form,
    items,
    history,
    soundEnabled,
    setSoundEnabled,
    hydrated,
    spinning,
    canSpin,
    isFull,
    winner,
    dialogOpen,
    setDialogOpen,
    confettiKey,
    rotation,
    bulkText,
    setBulkText,
    addItem,
    addBulk,
    removeItem,
    clearItems,
    clearHistory,
    spin,
    spinAgain,
    removeWinner,
  }
}

export type RoletaModel = ReturnType<typeof useRoletaModel>
