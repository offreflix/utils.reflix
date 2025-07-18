import { z } from 'zod'

export const wordCounterFormSchema = z.object({
  text: z.string().min(1, 'Por favor, insira um texto para contar.'),
})

export type WordCounterFormSchema = z.infer<typeof wordCounterFormSchema>
