import { z } from 'zod'
import { GENDERS } from './imc-calculator.types'

export const formSchema = z.object({
  gender: z.enum(GENDERS, {
    required_error: 'Por favor selecione o gênero',
  }),
  age: z.union([
    z.string().min(1, 'Por favor informe a idade'),
    z.coerce
      .number({
        invalid_type_error: 'Idade deve ser um número',
      })
      .positive('Idade deve ser positiva'),
  ]),
  height: z.union([
    z.string().min(1, 'Por favor informe a altura'),
    z.coerce
      .number({
        invalid_type_error: 'Altura deve ser um número',
      })
      .positive('Altura deve ser positiva'),
  ]),
  weight: z.union([
    z.string().min(1, 'Por favor informe o peso'),
    z.coerce
      .number({
        invalid_type_error: 'Peso deve ser um número',
      })
      .positive('Peso deve ser positivo'),
  ]),
})

export type FormSchema = z.infer<typeof formSchema>
