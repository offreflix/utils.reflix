import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { fileSchema, FileSchema } from './pdf-converter.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { AIService, AIAnalysisResult } from '@/lib/ai-service'

export const usePdfConverterModel = () => {
  const [extractedText, setExtractedText] = useState('')
  const [fileName, setFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysisResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [markdownContent, setMarkdownContent] = useState('')
  const [summary, setSummary] = useState('')

  const form = useForm<FileSchema>({
    resolver: zodResolver(fileSchema),
  })

  const extractTextFromPdf = async (file: File): Promise<string> => {
    try {
      // Importar PDF.js dinamicamente apenas no cliente
      const pdfjsLib = await import('pdfjs-dist')
      
      // Configurar worker local
      if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
        // Usar worker local copiado para public
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'
      }
      
      // Ler o arquivo como ArrayBuffer
      const arrayBuffer = await file.arrayBuffer()
      
      // Carregar o documento PDF com configurações otimizadas
      const loadingTask = pdfjsLib.getDocument({ 
        data: arrayBuffer,
        useWorkerFetch: false,
        isEvalSupported: false,
        useSystemFonts: true,
        disableFontFace: true,
        disableRange: true,
        disableStream: true,
      })
      
      const pdf = await loadingTask.promise
      let fullText = ''
      
      // Extrair texto de cada página
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        try {
          const page = await pdf.getPage(pageNum)
          const textContent = await page.getTextContent()
          
          // Processar o conteúdo de texto
          const pageText = textContent.items
            .map((item: any) => {
              // Verificar se o item tem texto
              if (item && typeof item.str === 'string') {
                return item.str
              }
              return ''
            })
            .join(' ')
          
          fullText += pageText + '\n'
        } catch (pageError) {
          console.warn(`Erro ao processar página ${pageNum}:`, pageError)
          fullText += `[Erro ao processar página ${pageNum}]\n`
        }
      }
      
      // Verificar se extraímos algum texto
      const trimmedText = fullText.trim()
      if (!trimmedText) {
        return '[Nenhum texto extraído do PDF. O arquivo pode conter apenas imagens ou estar protegido.]'
      }
      
      return trimmedText
    } catch (err) {
      console.error('Erro detalhado na extração de PDF:', err)
      
      // Mensagens de erro mais específicas
      if (err instanceof Error) {
        if (err.message.includes('Invalid PDF')) {
          throw new Error('Arquivo PDF inválido ou corrompido')
        } else if (err.message.includes('Password')) {
          throw new Error('PDF protegido por senha. Remova a proteção e tente novamente.')
        } else if (err.message.includes('Worker') || err.message.includes('fetch') || err.message.includes('Failed to fetch')) {
          throw new Error('Erro de conexão com o processador de PDF. Verifique sua internet e tente novamente.')
        }
      }
      
      throw new Error(`Erro ao extrair texto do PDF: ${err instanceof Error ? err.message : 'Erro desconhecido'}`)
    }
  }

  const extractTextFromTextFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      
      reader.onload = () => {
        try {
          const result = reader.result as string
          if (result === null || result === undefined) {
            reject(new Error('Arquivo vazio ou não pode ser lido'))
            return
          }
          resolve(result)
        } catch (err) {
          reject(new Error('Erro ao processar conteúdo do arquivo'))
        }
      }
      
      reader.onerror = () => {
        reject(new Error('Erro ao ler arquivo de texto. Verifique se o arquivo não está corrompido.'))
      }
      
      // Tentar ler com diferentes encodings
      try {
        reader.readAsText(file, 'UTF-8')
      } catch (err) {
        // Fallback para encoding padrão
        reader.readAsText(file)
      }
    })
  }

  const onSubmit = async (values: FileSchema) => {
    setIsLoading(true)
    setError('')
    setExtractedText('')
    setFileName(values.file.name)

    try {
      // Validações adicionais
      if (!values.file) {
        throw new Error('Nenhum arquivo selecionado')
      }

      if (values.file.size === 0) {
        throw new Error('O arquivo está vazio')
      }

      if (values.file.size > 10 * 1024 * 1024) {
        throw new Error('O arquivo é muito grande (máximo 10MB)')
      }

      let text = ''
      
      if (values.file.type === 'application/pdf') {
        text = await extractTextFromPdf(values.file)
      } else {
        text = await extractTextFromTextFile(values.file)
      }
      
      setExtractedText(text)
    } catch (err) {
      console.error('Erro no processamento do arquivo:', err)
      
      // Mensagem de erro mais específica
      let errorMessage = 'Erro desconhecido ao processar arquivo'
      
      if (err instanceof Error) {
        errorMessage = err.message
      } else if (typeof err === 'string') {
        errorMessage = err
      }
      
      setError(errorMessage)
      setExtractedText(`[Erro: ${errorMessage}]`)
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(extractedText)
    } catch (err) {
      setError('Erro ao copiar para a área de transferência')
    }
  }

  const clearText = () => {
    setExtractedText('')
    setFileName('')
    setError('')
    setAiAnalysis(null)
    setMarkdownContent('')
    setSummary('')
    form.reset()
  }

  const analyzeWithAI = async () => {
    if (!extractedText) {
      setError('Nenhum texto extraído para analisar')
      return
    }

    setIsAnalyzing(true)
    setError('')

    try {
      const analysis = await AIService.analyzePDFContent(extractedText)
      setAiAnalysis(analysis)
      setMarkdownContent(analysis.markdown)
      setSummary(analysis.summary)
    } catch (err) {
      console.error('Erro na análise de IA:', err)
      const errorMessage = err instanceof Error ? err.message : 'Erro na análise de IA'
      if (errorMessage.includes('API key não configurada')) {
        setError('Configure sua chave da OpenAI para usar as funcionalidades de IA. Veja o arquivo AI_SETUP.md para instruções.')
      } else {
        setError(errorMessage)
      }
    } finally {
      setIsAnalyzing(false)
    }
  }

  const generateMarkdown = async () => {
    if (!extractedText) {
      setError('Nenhum texto extraído para converter')
      return
    }

    setIsAnalyzing(true)
    setError('')

    try {
      const markdown = await AIService.generateMarkdown(extractedText)
      setMarkdownContent(markdown)
    } catch (err) {
      console.error('Erro na geração de markdown:', err)
      const errorMessage = err instanceof Error ? err.message : 'Erro na geração de markdown'
      if (errorMessage.includes('API key não configurada')) {
        setError('Configure sua chave da OpenAI para usar as funcionalidades de IA. Veja o arquivo AI_SETUP.md para instruções.')
      } else {
        setError(errorMessage)
      }
    } finally {
      setIsAnalyzing(false)
    }
  }

  const generateSummary = async () => {
    if (!extractedText) {
      setError('Nenhum texto extraído para resumir')
      return
    }

    setIsAnalyzing(true)
    setError('')

    try {
      const summaryText = await AIService.generateSummary(extractedText)
      setSummary(summaryText)
    } catch (err) {
      console.error('Erro na geração de resumo:', err)
      const errorMessage = err instanceof Error ? err.message : 'Erro na geração de resumo'
      if (errorMessage.includes('API key não configurada')) {
        setError('Configure sua chave da OpenAI para usar as funcionalidades de IA. Veja o arquivo AI_SETUP.md para instruções.')
      } else {
        setError(errorMessage)
      }
    } finally {
      setIsAnalyzing(false)
    }
  }

  const downloadMarkdown = () => {
    if (!markdownContent) {
      setError('Nenhum conteúdo markdown para baixar')
      return
    }

    const blob = new Blob([markdownContent], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${fileName.replace(/\.[^/.]+$/, '')}_analysis.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const downloadSummary = () => {
    if (!summary) {
      setError('Nenhum resumo para baixar')
      return
    }

    const blob = new Blob([summary], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${fileName.replace(/\.[^/.]+$/, '')}_summary.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return {
    form,
    onSubmit,
    extractedText,
    fileName,
    isLoading,
    error,
    copyToClipboard,
    clearText,
    aiAnalysis,
    isAnalyzing,
    markdownContent,
    summary,
    analyzeWithAI,
    generateMarkdown,
    generateSummary,
    downloadMarkdown,
    downloadSummary,
  }
} 