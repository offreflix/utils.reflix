'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

export function TmbCalculatorClient() {
  return (
    <div className="mx-auto">
      <Card className="text-center">
        <CardHeader>
          <div className="flex justify-center mb-4 text-yellow-500">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Página em Construção
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground max-w-md mx-auto">
            A calculadora de Taxa Metabólica Basal (TMB) ainda está sendo
            desenvolvida. Em breve, você poderá calcular suas necessidades
            calóricas aqui!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
