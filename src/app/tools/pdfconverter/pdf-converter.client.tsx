'use client'

import { usePdfConverterModel } from './pdf-converter.model'
import { PdfConverterView } from './pdf-converter.view'

export function PdfConverterClient() {
  const methods = usePdfConverterModel()

  return <PdfConverterView {...methods} />
}