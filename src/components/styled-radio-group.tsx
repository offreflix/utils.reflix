import { useId } from 'react'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export interface StyledRadioOption {
  value: string
  label: string
  sublabel?: string
  description?: string
  rightLabel?: string // ex: fator
  colorClass?: string // ex: text-green-600
}

interface StyledRadioGroupProps {
  value: string
  onChange: (value: string) => void
  options?: StyledRadioOption[]
  className?: string
}

export default function StyledRadioGroup({
  value,
  onChange,
  options = [],
  className = '',
}: StyledRadioGroupProps) {
  const id = useId()
  return (
    <RadioGroup
      className={`gap-2 ${className}`}
      value={value}
      onValueChange={onChange}
    >
      {options.map((opt) => (
        <div
          key={opt.value}
          className="border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none transition-colors hover:bg-muted/30"
        >
          <RadioGroupItem
            value={opt.value}
            id={`${id}-${opt.value}`}
            aria-describedby={
              opt.description ? `${id}-${opt.value}-description` : undefined
            }
            checked={value === opt.value}
            className="order-1 after:absolute after:inset-0"
          />
          <div className="grid grow gap-2">
            <Label
              htmlFor={`${id}-${opt.value}`}
              className="flex items-center gap-2"
            >
              <span className={opt.colorClass || ''}>{opt.label}</span>
              {opt.sublabel && (
                <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
                  {opt.sublabel}
                </span>
              )}
              {opt.rightLabel && (
                <span className="ml-auto text-xs font-mono text-muted-foreground">
                  {opt.rightLabel}
                </span>
              )}
            </Label>
            {opt.description && (
              <p
                id={`${id}-${opt.value}-description`}
                className="text-muted-foreground text-xs"
              >
                {opt.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}
