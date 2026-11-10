import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { History, Plus, RotateCw, Trash2, Volume2, VolumeX, X } from 'lucide-react'
import { RoletaWheel } from './components/roleta-wheel'
import { RoletaConfetti } from './components/roleta-confetti'
import { RoletaModel } from './roleta.model'
import {
  ROLETA_MAX_ITEMS,
  ROLETA_MAX_ITEM_LENGTH,
  ROLETA_MIN_ITEMS,
} from './roleta.schema'

const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

export const RoletaView = (props: RoletaModel) => {
  const {
    form,
    items,
    history,
    soundEnabled,
    setSoundEnabled,
    spinning,
    canSpin,
    isFull,
    winner,
    dialogOpen,
    setDialogOpen,
    confettiKey,
    rotation,
    bulkText,
    setBulkText,
    addItem,
    addBulk,
    removeItem,
    clearItems,
    clearHistory,
    spin,
    spinAgain,
    removeWinner,
  } = props

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent className="flex flex-col gap-6 pt-6">
          <RoletaWheel
            items={items}
            rotation={rotation}
            spinning={spinning}
            canSpin={canSpin}
            onSpin={spin}
          />
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button onClick={spin} disabled={!canSpin} size="lg">
              <RotateCw className="mr-2 h-4 w-4" />
              {spinning ? 'Girando...' : 'Girar roleta'}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setSoundEnabled(!soundEnabled)}
              aria-pressed={soundEnabled}
              aria-label={soundEnabled ? 'Desativar som' : 'Ativar som'}
            >
              {soundEnabled ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle>
            Itens{' '}
            <Badge variant="outline" className="ml-1">
              {items.length}/{ROLETA_MAX_ITEMS}
            </Badge>
          </CardTitle>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearItems}
            disabled={items.length === 0 || spinning}
          >
            <Trash2 className="mr-1 h-4 w-4" />
            Limpar tudo
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <Form {...form}>
            <form onSubmit={addItem} className="flex flex-col gap-2" noValidate>
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Novo item</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Ex.: Pizza"
                          maxLength={ROLETA_MAX_ITEM_LENGTH + 10}
                          autoComplete="off"
                          disabled={spinning || isFull}
                        />
                      </FormControl>
                      <Button type="submit" disabled={spinning || isFull}>
                        <Plus className="mr-1 h-4 w-4" />
                        Adicionar
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <div className="flex flex-col gap-2">
            <label htmlFor="roleta-bulk" className="text-sm font-medium">
              Colar vários itens (um por linha)
            </label>
            <Textarea
              id="roleta-bulk"
              value={bulkText}
              onChange={(event) => setBulkText(event.target.value)}
              placeholder={'Pizza\nHambúrguer\nSushi'}
              rows={4}
              disabled={spinning || isFull}
            />
            <Button
              type="button"
              variant="secondary"
              onClick={addBulk}
              disabled={spinning || isFull || bulkText.trim() === ''}
              className="self-start"
            >
              Adicionar todos
            </Button>
          </div>

          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Nenhum item ainda. Adicione pelo menos {ROLETA_MIN_ITEMS} para
              girar a roleta.
            </p>
          ) : (
            <ul className="flex flex-wrap gap-2" aria-label="Itens da roleta">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-1 rounded-full border bg-secondary py-1 pl-3 pr-1 text-sm text-secondary-foreground"
                >
                  <span className="max-w-48 truncate">{item.label}</span>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    disabled={spinning}
                    aria-label={`Remover ${item.label}`}
                    className="rounded-full p-1 hover:bg-background/60 disabled:opacity-50"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Histórico
          </CardTitle>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearHistory}
            disabled={history.length === 0}
          >
            Limpar histórico
          </Button>
        </CardHeader>
        <CardContent>
          {history.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Os resultados sorteados aparecerão aqui.
            </p>
          ) : (
            <ol className="flex flex-col divide-y">
              {history.map((entry, index) => (
                <li
                  key={entry.id}
                  className="flex items-center justify-between gap-2 py-2 text-sm"
                >
                  <span className="truncate">
                    <span className="mr-2 text-muted-foreground">
                      {history.length - index}.
                    </span>
                    {entry.label}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {timeFormatter.format(new Date(entry.drawnAt))}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </CardContent>
      </Card>

      <RoletaConfetti burstKey={confettiKey} />

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🎉 Resultado do sorteio</DialogTitle>
            <DialogDescription>O item sorteado foi:</DialogDescription>
          </DialogHeader>
          <p className="break-words py-4 text-center text-3xl font-bold font-heading">
            {winner?.label}
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={removeWinner}>
              <Trash2 className="mr-2 h-4 w-4" />
              Remover da roleta
            </Button>
            <Button onClick={spinAgain} disabled={items.length < ROLETA_MIN_ITEMS}>
              <RotateCw className="mr-2 h-4 w-4" />
              Girar de novo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
