import { z } from 'zod'
import { PasswordOption } from './password-generator.types'

export const formSchema = z.object({
  range: z
    .number()
    .min(1, 'Por favor informe o tamanho da senha')
    .max(50, 'O tamanho da senha deve ser menor que 50'),
  items: z
    .array(z.nativeEnum(PasswordOption))
    .refine((value) => value.length > 0, {
      message: 'Por favor selecione pelo menos uma opção',
    }),
})

export type FormSchema = z.infer<typeof formSchema>
