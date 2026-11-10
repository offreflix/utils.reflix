import { z } from 'zod'

export const ROLETA_MIN_ITEMS = 2
export const ROLETA_MAX_ITEMS = 50
export const ROLETA_MAX_ITEM_LENGTH = 40

export const roletaItemSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, 'Digite o nome do item.')
    .max(
      ROLETA_MAX_ITEM_LENGTH,
      `O item deve ter no máximo ${ROLETA_MAX_ITEM_LENGTH} caracteres.`,
    ),
})

export type RoletaItemSchema = z.infer<typeof roletaItemSchema>
