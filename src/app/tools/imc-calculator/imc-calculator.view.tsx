import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import { useImcCalculatorModel } from './imc-calculator.model'
import { Input } from '@/components/ui/input'
import { IMCResult } from './imc-result'

type ImcCalculatorViewProps = ReturnType<typeof useImcCalculatorModel>

export const ImcCalculatorView = (props: ImcCalculatorViewProps) => {
  const { form, onSubmit, finalImc } = props

  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center p-8">
        <Card className="w-full sm:w-lg">
          <CardHeader className="text-center">
            <CardTitle>Calculadora de IMC</CardTitle>
            <CardDescription>
              Calcule seu Índice de Massa Corporal (IMC)
            </CardDescription>
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
                        <Input type="number" placeholder="Ex: 30" {...field} />
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
          <CardFooter>{finalImc && <IMCResult imc={finalImc} />}</CardFooter>
        </Card>
      </main>
    </div>
  )
}
