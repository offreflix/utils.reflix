import { z } from 'zod'

export const formSchema = z.object({
  principal: z.coerce
    .number({ invalid_type_error: 'Valor inicial deve ser um número' })
    .min(0, 'Valor inicial não pode ser negativo'),
  monthlyContribution: z.coerce
    .number({ invalid_type_error: 'Aporte mensal deve ser um número' })
    .min(0, 'Aporte mensal não pode ser negativo'),
  rate: z.coerce
    .number({ invalid_type_error: 'Taxa de juros deve ser um número' })
    .positive('Taxa de juros deve ser positiva')
    .max(1000, 'Taxa de juros muito alta'),
  rateType: z.enum(['monthly', 'annual']),
  period: z.coerce
    .number({ invalid_type_error: 'Período deve ser um número' })
    .positive('Período deve ser positivo')
    .int('Período deve ser um número inteiro'),
  periodType: z.enum(['months', 'years']),
})

export type FormSchema = z.infer<typeof formSchema>
