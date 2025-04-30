export const GENDERS = ['homem', 'mulher'] as const

export type Gender = (typeof GENDERS)[number]
