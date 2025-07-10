import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Loader2, Copy, FileText, X, Brain, FileDown, Sparkles, AlertTriangle } from 'lucide-react'
import Script from 'next/script'
import { jsonLd } from './pdf-converter.metadata'
import { PdfConverterViewProps } from './pdf-converter.types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const PdfConverterView = (props: PdfConverterViewProps) => {
  const {
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
  } = props

  return (
    <>
      <Script
        id="pdf-converter-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="font-sans">
        <section className="flex flex-col gap-8 lg:gap-2">
          <Card className="w-full">
            <CardHeader>
              <h2 className="text-2xl font-semibold font-heading tracking-tight">
                Selecione um arquivo
              </h2>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="file"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel>Arquivo</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.txt,.md,.csv,.json,.js,.ts,.tsx,.html,.css,.xml"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                onChange(file)
                              }
                            }}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex gap-2">
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="flex-1"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          <FileText className="mr-2 h-4 w-4" />
                          Extrair Texto
                        </>
                      )}
                    </Button>
                    
                    {extractedText && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={clearText}
                        className="flex items-center gap-2"
                      >
                        <X className="h-4 w-4" />
                        Limpar
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {fileName && (
            <Card className="w-full">
              <CardHeader>
                <h2 className="text-2xl font-semibold font-heading tracking-tight">
                  Arquivo Processado
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-neutral-600">
                    Arquivo: <strong>{fileName}</strong>
                  </div>
                  
                  {error && (
                    <div className="text-sm text-red-600 bg-red-50 dark:bg-red-950 p-3 rounded-md">
                      {error}
                    </div>
                  )}
                  
                  {extractedText && (
                    <>
                      {/* Aviso sobre configuração de IA */}
                      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                          <div className="flex-1">
                            <h4 className="font-medium text-yellow-800 dark:text-yellow-200">
                              Configuração de IA Necessária
                            </h4>
                            <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                              Para usar as funcionalidades de IA, você precisa configurar sua chave da OpenAI. 
                              Veja o arquivo <code className="rounded bg-yellow-100 px-1 dark:bg-yellow-900">AI_SETUP.md</code> para instruções.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Botões de IA */}
                      <div className="flex flex-wrap gap-2">
                        <Button
                          type="button"
                          onClick={analyzeWithAI}
                          disabled={isAnalyzing}
                          className="flex items-center gap-2"
                        >
                          {isAnalyzing ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Brain className="h-4 w-4" />
                          )}
                          Análise Completa com IA
                        </Button>
                        
                        <Button
                          type="button"
                          variant="outline"
                          onClick={generateMarkdown}
                          disabled={isAnalyzing}
                          className="flex items-center gap-2"
                        >
                          {isAnalyzing ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <FileText className="h-4 w-4" />
                          )}
                          Gerar Markdown
                        </Button>
                        
                        <Button
                          type="button"
                          variant="outline"
                          onClick={generateSummary}
                          disabled={isAnalyzing}
                          className="flex items-center gap-2"
                        >
                          {isAnalyzing ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Sparkles className="h-4 w-4" />
                          )}
                          Gerar Resumo
                        </Button>
                      </div>

                      {/* Abas de Conteúdo */}
                      <Tabs defaultValue="text" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="text">Texto Original</TabsTrigger>
                          <TabsTrigger value="summary">Resumo</TabsTrigger>
                          <TabsTrigger value="markdown">Markdown</TabsTrigger>
                          <TabsTrigger value="analysis">Análise IA</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="text" className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">
                              Texto Extraído
                            </label>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={copyToClipboard}
                              className="flex items-center gap-2"
                            >
                              <Copy className="h-4 w-4" />
                              Copiar
                            </Button>
                          </div>
                          <Textarea
                            value={extractedText}
                            readOnly
                            className="h-96 resize-none"
                            placeholder="O texto extraído aparecerá aqui..."
                          />
                        </TabsContent>
                        
                        <TabsContent value="summary" className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">
                              Resumo Gerado
                            </label>
                            {summary && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={downloadSummary}
                                className="flex items-center gap-2"
                              >
                                <FileDown className="h-4 w-4" />
                                Baixar
                              </Button>
                            )}
                          </div>
                          <Textarea
                            value={summary || 'Clique em "Gerar Resumo" para criar um resumo do documento...'}
                            readOnly
                            className="h-96 resize-none"
                            placeholder="O resumo aparecerá aqui..."
                          />
                        </TabsContent>
                        
                        <TabsContent value="markdown" className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">
                              Markdown Formatado
                            </label>
                            {markdownContent && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={downloadMarkdown}
                                className="flex items-center gap-2"
                              >
                                <FileDown className="h-4 w-4" />
                                Baixar
                              </Button>
                            )}
                          </div>
                          <Textarea
                            value={markdownContent || 'Clique em "Gerar Markdown" para criar uma versão formatada...'}
                            readOnly
                            className="h-96 resize-none font-mono text-sm"
                            placeholder="O markdown aparecerá aqui..."
                          />
                        </TabsContent>
                        
                        <TabsContent value="analysis" className="space-y-4">
                          {aiAnalysis ? (
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-lg font-semibold mb-2">Resumo da Análise</h3>
                                <p className="text-sm text-neutral-600">{aiAnalysis.summary}</p>
                              </div>
                              
                              <div>
                                <h3 className="text-lg font-semibold mb-2">Pontos-Chave</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  {aiAnalysis.keyPoints.map((point: string, index: number) => (
                                    <li key={index} className="text-neutral-700">{point}</li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h3 className="text-lg font-semibold mb-2">Tópicos Identificados</h3>
                                <div className="flex flex-wrap gap-2">
                                  {aiAnalysis.topics.map((topic: string, index: number) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                    >
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-8 text-neutral-500">
                              <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                              <p>Clique em "Análise Completa com IA" para obter insights detalhados</p>
                            </div>
                          )}
                        </TabsContent>
                      </Tabs>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </>
  )
} 