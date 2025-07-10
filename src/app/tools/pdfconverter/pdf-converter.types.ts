import { usePdfConverterModel } from './pdf-converter.model'

export const SUPPORTED_FILE_TYPES = [
  'application/pdf',
  'text/plain',
  'text/markdown',
  'text/csv',
  'application/json',
  'application/javascript',
  'text/typescript',
  'text/html',
  'text/css',
  'application/xml'
] as const

export type SupportedFileType = (typeof SUPPORTED_FILE_TYPES)[number]

export type PdfConverterViewProps = ReturnType<typeof usePdfConverterModel> 