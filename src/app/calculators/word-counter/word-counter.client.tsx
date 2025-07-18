'use client'

import { useWordCounterModel } from './word-counter.model'
import { WordCounterView } from './word-counter.view'

export function WordCounterClient() {
  const model = useWordCounterModel()

  return <WordCounterView {...model} />
}
