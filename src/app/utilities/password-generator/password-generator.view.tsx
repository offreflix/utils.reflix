import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import {
  PasswordGeneratorViewProps,
  PasswordOption,
} from './password-generator.types'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { CheckIcon, CopyIcon, RefreshCwIcon } from 'lucide-react'
import { toast } from 'sonner'
import { Progress } from '@/components/ui/progress'

export const items = [
  {
    id: PasswordOption.UPPER_CASE,
    label: 'Letras Maiúsculas',
  },
  {
    id: PasswordOption.LOWER_CASE,
    label: 'Letras Minúsculas',
  },
  {
    id: PasswordOption.NUMBERS,
    label: 'Números',
  },
  {
    id: PasswordOption.SYMBOLS,
    label: 'Símbolos',
  },
] as const

export const PasswordGeneratorView = (props: PasswordGeneratorViewProps) => {
  const {
    form,
    copied,
    onSubmit,
    password,
    copyToClipboard,
    getPasswordStrengthText,
    calculatePasswordStrength,
    getPasswordStrengthColor2,
  } = props

  return (
    <>
      <div className="font-sans">
        <section className="flex flex-col gap-8 lg:gap-2">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Gerador de Senha</CardTitle>
              <div className="mt-4 space-y-2">
                <div className="relative">
                  <Input
                    readOnly
                    value={password}
                    className="pr-20 font-mono text-lg"
                  />

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-10 top-0 h-full"
                    onClick={() => form.handleSubmit(onSubmit)()}
                    title="Gerar nova senha"
                  >
                    <RefreshCwIcon className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                    onClick={() => {
                      copyToClipboard(password)
                      toast.success(
                        'Senha copiada para a área de transferência',
                        {
                          duration: 2000,
                        },
                      )
                    }}
                    title="Copiar senha"
                  >
                    {copied ? (
                      <CheckIcon className="h-4 w-4 text-green-500" />
                    ) : (
                      <CopyIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Força da senha: {getPasswordStrengthText(password)}
                    </span>
                  </div>
                  <Progress
                    value={calculatePasswordStrength(password)}
                    className={`h-2 ${getPasswordStrengthColor2(password)}`}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="range"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2">
                        <FormLabel className="text-base">
                          Tamanho da Senha:{' '}
                          {field.value > 1
                            ? `${field.value} caracteres`
                            : '1 caractere'}
                        </FormLabel>

                        <FormControl>
                          <div>
                            <Slider
                              defaultValue={[field.value]}
                              min={1}
                              step={1}
                              max={50}
                              onValueChange={(e) => field.onChange(e[0])}
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>1</span>
                              <span>25</span>
                              <span>50</span>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                      <FormItem>
                        <div>
                          <FormLabel className="text-base">Opções</FormLabel>
                          <FormDescription>
                            Selecione as opções que deseja incluir na senha.
                          </FormDescription>
                        </div>
                        {items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="items"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      disabled={
                                        field.value?.length === 1 &&
                                        field.value?.includes(item.id)
                                      }
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id,
                                              ),
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}
