'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

export function PasswordGeneratorClient() {
  return (
    <div className="mx-auto">
      <Card className="text-center">
        <CardHeader>
          <div className="flex justify-center mb-4 text-yellow-500 dark:text-yellow-400">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Página em Construção
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground max-w-md mx-auto">
            O gerador de senhas ainda está sendo desenvolvido. Em breve, você
            poderá gerar suas senhas fortes aqui!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
