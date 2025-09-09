import {
  LucideIcon,
  Scale,
  Flame,
  KeyRound,
  HelpCircle,
  FileText,
  Terminal,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Flame,
  KeyRound,
  FileText,
  Terminal,
}

export function getIconByName(iconName: string): LucideIcon {
  console.log('🔍 getIconByName called with:', iconName)

  const IconComponent = iconMap[iconName]
  console.log('🔍 IconComponent found:', IconComponent)

  if (IconComponent) {
    console.log('✅ Returning icon component')
    return IconComponent
  }

  console.log('❌ Icon not found, using HelpCircle')
  return HelpCircle
}

export function getIconName(icon: LucideIcon): string {
  console.log('🔍 getIconName called with icon:', icon)

  if (icon === Scale) return 'Scale'
  if (icon === Flame) return 'Flame'
  if (icon === KeyRound) return 'KeyRound'
  if (icon === FileText) return 'FileText'
  if (icon === Terminal) return 'Terminal'

  console.log('❌ Icon not recognized, using HelpCircle')
  return 'HelpCircle'
}
