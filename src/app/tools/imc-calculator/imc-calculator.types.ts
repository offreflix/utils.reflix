import { useImcCalculatorModel } from './imc-calculator.model'

export const GENDERS = ['homem', 'mulher'] as const

export type Gender = (typeof GENDERS)[number]

export type ImcCalculatorViewProps = ReturnType<typeof useImcCalculatorModel>
