import { LucideIcon } from 'lucide-react'

export type WordCounterFormValues = {
  text: string
}

export type WordCounterResult = {
  wordCount: number
  charCount: number
  charCountNoSpaces: number
  lineCount: number
  avgWordsPerLine: number
  avgCharsPerWord: number
  density: number
}

export interface Stats {
  label: string
  value: number | string
  icon: LucideIcon
  color: string
}
