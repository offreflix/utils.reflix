import Script from 'next/script'
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
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { CompoundInterestResultDisplay } from './components/compound-interest-result'
import { jsonLd } from './compound-interest-calculator.metadata'
import { CompoundInterestViewProps } from './compound-interest-calculator.types'

export const CompoundInterestView = (props: CompoundInterestViewProps) => {
  const { form, onSubmit, result } = props

  return (
    <>
      <Script
        id="compound-interest-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="font-sans">
        <section className="flex flex-col gap-8 lg:gap-2">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Simulador de Juros Compostos</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="principal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor inicial</FormLabel>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground font-medium w-6">R$</span>
                          <FormControl>
                            <Input
                              type="number"
                              step={0.01}
                              min={0}
                              placeholder="0,00"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="monthlyContribution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor mensal</FormLabel>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground font-medium w-6">R$</span>
                          <FormControl>
                            <Input
                              type="number"
                              step={0.01}
                              min={0}
                              placeholder="0,00"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Taxa de juros</FormLabel>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground font-medium w-4">%</span>
                          <FormControl>
                            <Input
                              type="number"
                              step={0.01}
                              min={0}
                              placeholder="0,00"
                              className="flex-1"
                              {...field}
                            />
                          </FormControl>
                          <FormField
                            control={form.control}
                            name="rateType"
                            render={({ field: rateField }) => (
                              <ToggleGroup
                                type="single"
                                className="gap-1 shrink-0"
                                onValueChange={rateField.onChange}
                                value={rateField.value}
                              >
                                <ToggleGroupItem value="annual" className="text-xs px-2 border rounded-md h-9">
                                  anual
                                </ToggleGroupItem>
                                <ToggleGroupItem value="monthly" className="text-xs px-2 border rounded-md h-9">
                                  mensal
                                </ToggleGroupItem>
                              </ToggleGroup>
                            )}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="period"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Período</FormLabel>
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Input
                              type="number"
                              min={1}
                              placeholder="1"
                              className="flex-1"
                              {...field}
                            />
                          </FormControl>
                          <FormField
                            control={form.control}
                            name="periodType"
                            render={({ field: periodField }) => (
                              <ToggleGroup
                                type="single"
                                className="gap-1 shrink-0"
                                onValueChange={periodField.onChange}
                                value={periodField.value}
                              >
                                <ToggleGroupItem value="years" className="text-xs px-2 border rounded-md h-9">
                                  ano(s)
                                </ToggleGroupItem>
                                <ToggleGroupItem value="months" className="text-xs px-2 border rounded-md h-9">
                                  mês(es)
                                </ToggleGroupItem>
                              </ToggleGroup>
                            )}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Calcular</Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <h2 className="text-2xl font-semibold font-heading tracking-tight">
                Resultado
              </h2>
            </CardHeader>
            <CardContent>
              <CompoundInterestResultDisplay result={result} />
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}
