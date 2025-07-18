import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArticleContent } from '@/components/article-content'
import { Textarea } from '@/components/ui/textarea'
import {
  Stats,
  WordCounterFormValues,
  WordCounterResult,
} from './word-counter.types'
import { UseFormReturn } from 'react-hook-form'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { toast } from 'sonner'

export type WordCounterViewProps = {
  form: UseFormReturn<WordCounterFormValues>
  result: WordCounterResult | null
  stats: Stats[]
  copied: boolean
  copyToClipboard: (text: string) => void
}

export const WordCounterView = (props: WordCounterViewProps) => {
  const { form, result, stats, copied, copyToClipboard } = props
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function handleCopy() {
    if (textareaRef.current) {
      const text = textareaRef.current.value
      copyToClipboard(text)
      toast.success('Texto copiado para a área de transferência', {
        duration: 2000,
      })
    }
  }

  function handleClear() {
    form.setValue('text', '')
  }

  return (
    <ArticleContent className="gap-4">
      <section>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Contador de Palavras e Caracteres</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Texto</FormLabel>
                    <FormDescription>
                      Cole ou digite seu texto abaixo. O contador é atualizado
                      em tempo real.
                    </FormDescription>
                    <FormControl>
                      <div className="relative">
                        <Textarea
                          {...field}
                          ref={(el: HTMLTextAreaElement | null) => {
                            field.ref(el)
                            textareaRef.current = el
                          }}
                          placeholder="Digite ou cole seu texto aqui..."
                          rows={6}
                        />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-2 w-full">
                          <div className="flex gap-2">
                            <Button
                              type="button"
                              onClick={handleCopy}
                              variant="outline"
                              className="flex items-center gap-2"
                            >
                              {copied ? (
                                <CheckIcon className="h-4 w-4 text-green-500" />
                              ) : (
                                <CopyIcon className="h-4 w-4" />
                              )}
                              {copied ? 'Copiado!' : 'Copiar texto'}
                            </Button>
                            <Button
                              type="button"
                              variant="destructive"
                              onClick={handleClear}
                            >
                              Limpar
                            </Button>
                          </div>
                          <Badge variant="outline" title="Caracteres">
                            <strong>{result?.charCount ?? 0}</strong> caracteres
                          </Badge>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="h-full transition-all duration-200 hover:shadow-md hover:scale-[1.02] group relative border shadow-sm"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-1.5 rounded-lg ${stat.color} group-hover:scale-110 transition-transform bg-opacity-60`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-muted-foreground font-medium">
                        {stat.label}
                      </span>
                      <span className="text-xl font-bold leading-tight">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </ArticleContent>
  )
}
