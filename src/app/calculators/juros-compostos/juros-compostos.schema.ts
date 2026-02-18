import { z } from 'zod'
import { RATE_TYPES, PERIOD_TYPES } from './juros-compostos.types'

export const formSchema = z.object({
  initialValue: z.coerce
    .number({ invalid_type_error: 'Informe um valor válido' })
    .min(0, 'Valor deve ser maior ou igual a zero'),
  monthlyValue: z.coerce
    .number({ invalid_type_error: 'Informe um valor válido' })
    .min(0, 'Valor deve ser maior ou igual a zero'),
  rate: z.union([
    z.string().min(1, 'Informe a taxa de juros'),
    z.coerce
      .number({ invalid_type_error: 'Informe uma taxa válida' })
      .positive('Taxa deve ser positiva'),
  ]),
  rateType: z.enum(RATE_TYPES),
  period: z.union([
    z.string().min(1, 'Informe o período'),
    z.coerce
      .number({ invalid_type_error: 'Informe um período válido' })
      .positive('Período deve ser positivo')
      .int('Período deve ser um número inteiro')
      .max(600, 'Período máximo é 600 meses ou 50 anos'),
  ]),
  periodType: z.enum(PERIOD_TYPES),
})

export type FormSchema = z.infer<typeof formSchema>
