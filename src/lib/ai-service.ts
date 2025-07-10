import OpenAI from 'openai'

// Função para obter a API key de forma segura
const getOpenAIKey = (): string | undefined => {
  // No cliente, tentar obter do localStorage primeiro
  if (typeof window !== 'undefined') {
    const localKey = window.localStorage.getItem('OPENAI_API_KEY')
    if (localKey) {
      return localKey
    }
  }
  
  // Fallback para process.env (funciona no servidor)
  return process.env.NEXT_PUBLIC_OPENAI_API_KEY || process.env.OPENAI_API_KEY
}

// Inicializar o cliente OpenAI apenas se a API key estiver disponível
let openai: OpenAI | null = null

const initializeOpenAI = () => {
  const apiKey = getOpenAIKey()
  if (apiKey) {
    openai = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true,
    })
  }
  return openai
}

export interface AIAnalysisResult {
  summary: string
  markdown: string
  keyPoints: string[]
  topics: string[]
}

export class AIService {
  static async analyzePDFContent(content: string): Promise<AIAnalysisResult> {
    try {
      // Inicializar OpenAI
      const client = initializeOpenAI()
      if (!client) {
        throw new Error('OpenAI API key não configurada. Configure sua chave para usar as funcionalidades de IA.')
      }

      // Limitar o conteúdo para evitar tokens excessivos
      const limitedContent = content.length > 8000 ? content.substring(0, 8000) + '...' : content

      const prompt = `
Analise o seguinte conteúdo de um PDF e forneça:

1. Um resumo conciso e bem estruturado (máximo 300 palavras)
2. Uma versão em markdown formatada do conteúdo principal
3. 5-7 pontos-chave principais
4. 3-5 tópicos principais identificados

Conteúdo do PDF:
${limitedContent}

Responda no seguinte formato JSON:
{
  "summary": "resumo aqui",
  "markdown": "markdown formatado aqui",
  "keyPoints": ["ponto 1", "ponto 2", "..."],
  "topics": ["tópico 1", "tópico 2", "..."]
}
`

      const completion = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Você é um assistente especializado em análise de documentos e formatação de conteúdo. Sempre responda em JSON válido.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 2000,
      })

      const response = completion.choices[0]?.message?.content
      
      if (!response) {
        throw new Error('Resposta vazia da IA')
      }

      // Tentar fazer parse do JSON
      try {
        const result = JSON.parse(response) as AIAnalysisResult
        return result
      } catch (parseError) {
        // Se o parse falhar, criar uma resposta estruturada manualmente
        return {
          summary: response.substring(0, 300) + '...',
          markdown: `# Análise do Documento\n\n${response}`,
          keyPoints: ['Análise realizada com sucesso', 'Conteúdo processado', 'Resumo gerado'],
          topics: ['Documento', 'Análise', 'Resumo']
        }
      }
    } catch (error) {
      console.error('Erro na análise de IA:', error)
      throw new Error(`Erro na análise de IA: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    }
  }

  static async generateMarkdown(content: string): Promise<string> {
    try {
      // Inicializar OpenAI
      const client = initializeOpenAI()
      if (!client) {
        throw new Error('OpenAI API key não configurada. Configure sua chave para usar as funcionalidades de IA.')
      }

      const limitedContent = content.length > 6000 ? content.substring(0, 6000) + '...' : content

      const prompt = `
Converta o seguinte conteúdo em um arquivo markdown bem formatado e estruturado:

${limitedContent}

Use:
- Títulos e subtítulos apropriados
- Listas quando necessário
- Destaque informações importantes
- Mantenha a estrutura lógica do conteúdo
- Use formatação markdown adequada (negrito, itálico, etc.)
`

      const completion = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Você é um especialista em formatação markdown. Sempre retorne apenas o markdown formatado, sem explicações adicionais.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.2,
        max_tokens: 1500,
      })

      return completion.choices[0]?.message?.content || '# Erro na geração do markdown'
    } catch (error) {
      console.error('Erro na geração de markdown:', error)
      throw new Error(`Erro na geração de markdown: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    }
  }

  static async generateSummary(content: string): Promise<string> {
    try {
      // Inicializar OpenAI
      const client = initializeOpenAI()
      if (!client) {
        throw new Error('OpenAI API key não configurada. Configure sua chave para usar as funcionalidades de IA.')
      }

      const limitedContent = content.length > 6000 ? content.substring(0, 6000) + '...' : content

      const prompt = `
Crie um resumo conciso e bem estruturado do seguinte conteúdo:

${limitedContent}

O resumo deve:
- Ter no máximo 300 palavras
- Capturar os pontos principais
- Ser claro e objetivo
- Manter a estrutura lógica
`

      const completion = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Você é um especialista em resumos. Sempre retorne apenas o resumo, sem explicações adicionais.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 500,
      })

      return completion.choices[0]?.message?.content || 'Erro na geração do resumo'
    } catch (error) {
      console.error('Erro na geração de resumo:', error)
      throw new Error(`Erro na geração de resumo: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    }
  }
} 