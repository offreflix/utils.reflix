import { useForm } from 'react-hook-form'
import { formSchema, FormSchema } from './password-generator.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { PasswordOption } from './password-generator.types'
import { useEffect, useState } from 'react'

export const usePasswordGeneratorModel = () => {
  const [password, setPassword] = useState<string>('Carregando...')
  const [copied, setCopied] = useState(false)
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      range: 4,
      items: [
        PasswordOption.UPPER_CASE,
        PasswordOption.LOWER_CASE,
        PasswordOption.NUMBERS,
        PasswordOption.SYMBOLS,
      ],
    },
  })

  const range = form.watch('range')
  const items = form.watch('items')

  useEffect(() => {
    setPassword(
      generatePassword(form.getValues().range, form.getValues().items),
    )
  }, [range, items, form])

  console.log(form.getValues())

  function generatePassword(length: number, items: PasswordOption[]): string {
    const charSets: Record<PasswordOption, string> = {
      [PasswordOption.UPPER_CASE]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      [PasswordOption.LOWER_CASE]: 'abcdefghijklmnopqrstuvwxyz',
      [PasswordOption.NUMBERS]: '0123456789',
      [PasswordOption.SYMBOLS]: '!@#$%^&*()_+[]{}|;:,.<>?',
    }

    if (items.length === 0) {
      return 'Por favor selecione pelo menos uma opção'
    }

    let allCharacters = ''
    const passwordCharacters: string[] = []

    const shuffledOptions = [...items].sort(() => Math.random() - 0.5)
    const requiredCount = Math.min(length, shuffledOptions.length)

    for (let i = 0; i < requiredCount; i++) {
      const option = shuffledOptions[i]
      const chars = charSets[option]
      const randomChar = chars[Math.floor(Math.random() * chars.length)]
      passwordCharacters.push(randomChar)
      allCharacters += chars
    }

    for (let i = passwordCharacters.length; i < length; i++) {
      const randomChar =
        allCharacters[Math.floor(Math.random() * allCharacters.length)]
      passwordCharacters.push(randomChar)
    }

    const shuffled = passwordCharacters.sort(() => Math.random() - 0.5)

    return shuffled.join('')
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  function onSubmit(values: FormSchema) {
    console.log(values)
    const password = generatePassword(values.range, values.items)
    console.log(password)
    setPassword(password)
  }

  function calculatePasswordStrength(password: string): number {
    if (!password) return 0

    let strength = 0

    const lengthScore = Math.min(password.length * 2, 40)
    strength += lengthScore

    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumbers = /[0-9]/.test(password)
    const hasSymbols = /[^A-Za-z0-9]/.test(password)

    const varietyScore =
      (hasUpperCase ? 15 : 0) +
      (hasLowerCase ? 15 : 0) +
      (hasNumbers ? 15 : 0) +
      (hasSymbols ? 15 : 0)

    strength += varietyScore

    return strength
  }

  function getPasswordStrengthText(password: string): string {
    const strength = calculatePasswordStrength(password)

    if (strength < 30) return 'Muito fraca'
    if (strength < 50) return 'Fraca'
    if (strength < 70) return 'Média'
    if (strength < 90) return 'Forte'
    return 'Muito forte'
  }

  function getPasswordStrengthColor(password: string): string {
    const strength = calculatePasswordStrength(password)

    if (strength < 30) return 'bg-red-500'
    if (strength < 50) return 'bg-orange-500'
    if (strength < 70) return 'bg-yellow-500'
    if (strength < 90) return 'bg-green-500'
    return 'bg-emerald-500'
  }

  function getPasswordStrengthColor2(password: string): string {
    const strength = calculatePasswordStrength(password)

    if (strength < 30) return '[&>div]:bg-red-500'
    if (strength < 50) return '[&>div]:bg-orange-500'
    if (strength < 70) return '[&>div]:bg-yellow-500'
    if (strength < 90) return '[&>div]:bg-green-500'
    return '[&>div]:bg-emerald-500'
  }

  return {
    form,
    copied,
    onSubmit,
    password,
    copyToClipboard,
    getPasswordStrengthText,
    getPasswordStrengthColor,
    calculatePasswordStrength,
    getPasswordStrengthColor2,
  }
}
