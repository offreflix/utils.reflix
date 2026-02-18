import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Script from 'next/script'
import { JurosCompostosViewProps } from './juros-compostos.types'
import { JurosCompostosResultCard } from './components/juros-compostos-result'
import { jsonLd } from './juros-compostos.metadata'

export function JurosCompostosView(props: JurosCompostosViewProps) {
  const { form, onSubmit, onClear, result } = props

  return (
    <>
      <Script
        id="juros-compostos-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="font-sans">
        <section className="flex flex-col gap-8 lg:gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Simulador de Juros Compostos</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Valor inicial */}
                  <FormField
                    control={form.control}
                    name="initialValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor inicial</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                              R$
                            </span>
                            <Input
                              type="number"
                              min={0}
                              step={0.01}
                              placeholder="0,00"
                              className="pl-9"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Valor mensal */}
                  <FormField
                    control={form.control}
                    name="monthlyValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor mensal</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                              R$
                            </span>
                            <Input
                              type="number"
                              min={0}
                              step={0.01}
                              placeholder="0,00"
                              className="pl-9"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Taxa de juros + tipo */}
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="rate"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Taxa de juros</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                                %
                              </span>
                              <Input
                                type="number"
                                min={0.01}
                                step={0.01}
                                placeholder="0,00"
                                className="pl-8"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="rateType"
                      render={({ field }) => (
                        <FormItem className="w-32 self-end">
                          <FormControl>
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="anual">anual</SelectItem>
                                <SelectItem value="mensal">mensal</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Período + tipo */}
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="period"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Período</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={1}
                              step={1}
                              placeholder="0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="periodType"
                      render={({ field }) => (
                        <FormItem className="w-32 self-end">
                          <FormControl>
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="anos">ano(s)</SelectItem>
                                <SelectItem value="meses">mês(es)</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-1">
                    <Button type="submit">Calcular</Button>
                    <button
                      type="button"
                      onClick={onClear}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Limpar
                    </button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {result && <JurosCompostosResultCard result={result} />}
        </section>
      </div>
    </>
  )
}
