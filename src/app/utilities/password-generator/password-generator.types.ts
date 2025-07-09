import { usePasswordGeneratorModel } from './password-generator.model'

export type PasswordGeneratorViewProps = ReturnType<
  typeof usePasswordGeneratorModel
>

export enum PasswordOption {
  UPPER_CASE = 'upperCase',
  LOWER_CASE = 'lowerCase',
  NUMBERS = 'numbers',
  SYMBOLS = 'symbols',
}
