interface ImportantNoteProps {
  note: string
  lastUpdate?: string
}

export function ImportantNote({ note, lastUpdate }: ImportantNoteProps) {
  return (
    <section className="border-t pt-8">
      <p className="text-sm text-neutral-600">
        <strong>Nota importante:</strong> {note}
      </p>
      {lastUpdate && (
        <p className="text-sm text-neutral-600 mt-2">
          Última atualização: {lastUpdate}
        </p>
      )}
    </section>
  )
}
