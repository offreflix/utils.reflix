import { z } from 'zod'

export const fileSchema = z.object({
  file: z
    .instanceof(File, { message: 'Por favor selecione um arquivo' })
    .refine((file) => file.size > 0, 'O arquivo não pode estar vazio')
    .refine(
      (file) => file.size <= 10 * 1024 * 1024, // 10MB
      'O arquivo deve ter no máximo 10MB'
    ),
})

export type FileSchema = z.infer<typeof fileSchema> 