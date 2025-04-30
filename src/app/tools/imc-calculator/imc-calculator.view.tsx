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
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import Script from 'next/script'

import { useImcCalculatorModel } from './imc-calculator.model'
import { Input } from '@/components/ui/input'
import { IMCResult } from './imc-result'

type ImcCalculatorViewProps = ReturnType<typeof useImcCalculatorModel>

export const ImcCalculatorView = (props: ImcCalculatorViewProps) => {
  const { form, onSubmit, finalImc } = props

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Calculadora de IMC',
    description:
      'Calcule seu Índice de Massa Corporal (IMC) de forma rápida e precisa.',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
    author: {
      '@type': 'Organization',
      name: 'Utils Reflix',
    },
  }

  return (
    <>
      <Script
        id="imc-calculator-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="font-sans">
        <main className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Calculadora de IMC</h1>
          <p className="text-lg text-center text-muted-foreground">
            Calcule seu Índice de Massa Corporal (IMC) de forma rápida e precisa
          </p>

          <Card className="w-full max-w-md">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Insira seus dados</h2>
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
                            className="w-full"
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <ToggleGroupItem
                              value="homem"
                              aria-label="Selecionar gênero masculino"
                              className="flex-1"
                            >
                              Homem
                            </ToggleGroupItem>
                            <ToggleGroupItem
                              value="mulher"
                              aria-label="Selecionar gênero feminino"
                              className="flex-1"
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
                          <Input placeholder="Ex: 189" {...field} />
                        </FormControl>
                        {/* <FormDescription>cm</FormDescription> */}
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
                          <Input placeholder="Ex: 89,5" {...field} />
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

          {finalImc && (
            <Card className="w-full max-w-md">
              <CardHeader>
                <h2 className="text-2xl font-semibold">Seu Resultado</h2>
              </CardHeader>
              <CardContent>
                <IMCResult imc={finalImc} />
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </>
  )
}
