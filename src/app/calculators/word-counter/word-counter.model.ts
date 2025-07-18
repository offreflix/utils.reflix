'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  wordCounterFormSchema,
  WordCounterFormSchema,
} from './word-counter.schema'
import { Stats, WordCounterResult } from './word-counter.types'
import { Rows3, ListOrdered, Percent, Type } from 'lucide-react'

export const useWordCounterModel = () => {
  const [result, setResult] = useState<WordCounterResult | null>({
    wordCount: 0,
    charCount: 0,
    charCountNoSpaces: 0,
    lineCount: 0,
    avgWordsPerLine: 0,
    avgCharsPerWord: 0,
    density: 0,
  })
  const [copied, setCopied] = useState(false)
  const form = useForm<WordCounterFormSchema>({
    resolver: zodResolver(wordCounterFormSchema),
    defaultValues: {
      text: '',
    },
  })

  function countWordsAndChars(text: string): WordCounterResult {
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0
    const charCount = text.length
    const charCountNoSpaces = text.replace(/\s/g, '').length
    const lineCount = text.length === 0 ? 0 : text.split(/\r?\n/).length
    const avgWordsPerLine = lineCount > 0 ? wordCount / lineCount : 0
    const avgCharsPerWord = wordCount > 0 ? charCount / wordCount : 0
    const wordsArray = text.trim() ? text.trim().split(/\s+/) : []
    const uniqueWords = new Set(wordsArray.map((w) => w.toLowerCase()))
    const density = wordCount > 0 ? uniqueWords.size / wordCount : 0
    return {
      wordCount,
      charCount,
      charCountNoSpaces,
      lineCount,
      avgWordsPerLine,
      avgCharsPerWord,
      density,
    }
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const stats: Stats[] = [
    {
      label: 'Palavras',
      value: result?.wordCount ?? 0,
      icon: ListOrdered,
      color: 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200',
    },
    {
      label: 'Caracteres',
      value: result?.charCount ?? 0,
      icon: Type,
      color:
        'bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-200',
    },
    {
      label: 'Linhas',
      value: result?.lineCount ?? 0,
      icon: Rows3,
      color:
        'bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-200',
    },
    {
      label: 'Densidade (%)',
      value: ((result?.density ?? 0) * 100).toLocaleString('pt-BR', {
        maximumFractionDigits: 1,
      }),
      icon: Percent,
      color:
        'bg-yellow-50 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-200',
    },
  ]

  useEffect(() => {
    const subscription = form.watch((values) => {
      setResult(countWordsAndChars(values.text || ''))
    })
    return () => subscription.unsubscribe()
  }, [form])

  return {
    form,
    result,
    copied,
    copyToClipboard,
    stats,
  }
}
