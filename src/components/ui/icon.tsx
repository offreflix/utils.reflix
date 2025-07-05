import { getIconByName } from '@/lib/icon-utils'

interface IconProps {
  name: string
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = getIconByName(name)
  return <IconComponent className={className} />
}
