import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema, FormSchema } from './imc-calculator.schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useImcCalculatorModel = () => {
  const [finalImc, setFinalImc] = useState<string>()
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: undefined,
      age: '',
      height: '',
      weight: '',
    },
  })

  function calculateImc(weightKg: number, heightCm: number) {
    const heightMeters = heightCm / 100
    const imc = weightKg / (heightMeters * heightMeters)
    const finalImc = imc.toFixed(2)
    return finalImc
  }

  function onSubmit(values: FormSchema) {
    const imc = calculateImc(Number(values.weight), Number(values.height))
    setFinalImc(imc)
  }
  return {
    form,
    onSubmit,
    finalImc,
  }
}
