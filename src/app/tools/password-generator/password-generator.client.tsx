'use client'
import { PasswordGeneratorView } from './password-generator.view'
import { usePasswordGeneratorModel } from './password-generator.model'

export function PasswordGeneratorClient() {
  const methods = usePasswordGeneratorModel()
  return <PasswordGeneratorView {...methods} />
}
