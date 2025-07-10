import { z } from 'zod'
import { GENDERS, ACTIVITY_LEVELS } from './tmb-calculator.types'

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
      .positive('Idade deve ser positiva')
      .min(15, 'Idade mínima é 15 anos')
      .max(100, 'Idade máxima é 100 anos'),
  ]),
  height: z.union([
    z.string().min(1, 'Por favor informe a altura'),
    z.coerce
      .number({
        invalid_type_error: 'Altura deve ser um número',
      })
      .positive('Altura deve ser positiva')
      .min(100, 'Altura mínima é 100cm')
      .max(250, 'Altura máxima é 250cm'),
  ]),
  weight: z.union([
    z.string().min(1, 'Por favor informe o peso'),
    z.coerce
      .number({
        invalid_type_error: 'Peso deve ser um número',
      })
      .positive('Peso deve ser positivo')
      .min(30, 'Peso mínimo é 30kg')
      .max(300, 'Peso máximo é 300kg'),
  ]),
  activityLevel: z.enum(ACTIVITY_LEVELS, {
    required_error: 'Por favor selecione o nível de atividade',
  }),
})

export type FormSchema = z.infer<typeof formSchema>
