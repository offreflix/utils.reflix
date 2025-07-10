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
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import Script from 'next/script'

import { Input } from '@/components/ui/input'
import { TmbResult } from './components/tmb-result'
import { TmbCalculatorViewProps } from './tmb-calculator.types'
import { jsonLd } from './tmb-calculator.metadata'
import StyledRadioGroup from '@/components/styled-radio-group'

export const TmbCalculatorView = (props: TmbCalculatorViewProps) => {
  const { form, onSubmit, finalTmb, tmbResult } = props

  const activityLevels = [
    {
      value: 'sedentario',
      label: 'Sedentário',
      description: 'Sem exercícios ou atividade mínima',
      factor: '1.2',
      color: 'text-red-600 dark:text-red-400',
    },
    {
      value: 'levemente-ativo',
      label: 'Levemente ativo',
      description: 'Exercício leve 1–3 dias/semana',
      factor: '1.375',
      color: 'text-orange-600 dark:text-orange-400',
    },
    {
      value: 'moderadamente-ativo',
      label: 'Moderadamente ativo',
      description: 'Exercício moderado 3–5 dias/semana',
      factor: '1.55',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      value: 'altamente-ativo',
      label: 'Altamente ativo',
      description: 'Exercício pesado 6–7 dias/semana',
      factor: '1.725',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      value: 'extremamente-ativo',
      label: 'Extremamente ativo',
      description: 'Treinamento intenso + trabalho físico',
      factor: '1.9',
      color: 'text-emerald-600 dark:text-emerald-400',
    },
  ]

  return (
    <>
      <Script
        id="tmb-calculator-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="font-sans">
        <section className="flex flex-col gap-8 lg:gap-2">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Insira seus dados</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel>Gênero</FormLabel>
                        <FormControl>
                          <ToggleGroup
                            type="single"
                            className="w-full gap-2"
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <ToggleGroupItem
                              value="homem"
                              aria-label="Selecionar gênero masculino"
                              className="flex-1 border rounded-md"
                            >
                              Homem
                            </ToggleGroupItem>
                            <ToggleGroupItem
                              value="mulher"
                              aria-label="Selecionar gênero feminino"
                              className="flex-1 border rounded-md"
                            >
                              Mulher
                            </ToggleGroupItem>
                          </ToggleGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Idade
                          <span className="text-xs text-neutral-400">
                            {' '}
                            (anos)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Ex: 30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Altura{' '}
                          <span className="text-xs text-neutral-400">(cm)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Ex: 170"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Peso
                          <span className="text-xs text-neutral-400">(kg)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step={0.1}
                            placeholder="Ex: 70.5"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="activityLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nível de Atividade Física</FormLabel>
                        <FormControl>
                          <StyledRadioGroup
                            value={field.value}
                            onChange={field.onChange}
                            options={activityLevels.map((level) => ({
                              value: level.value,
                              label: level.label,
                              description: level.description,
                              rightLabel: `Fator: ${level.factor}`,
                              colorClass: level.color,
                            }))}
                          />
                        </FormControl>
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
                Seu Resultado
              </h2>
            </CardHeader>
            <CardContent>
              <TmbResult tmb={finalTmb} tmbResult={tmbResult} />
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}
