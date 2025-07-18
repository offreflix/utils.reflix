import { LucideIcon } from 'lucide-react'
import { useAboutModel } from './about.model'

export interface TeamMember {
  name: string
  role: string
  description: string
  image: string
}

export interface Milestone {
  year: string
  title: string
  description: string
}

export interface Stat {
  number: string
  label: string
  description: string
}

export interface ValueCardProps {
  icon: LucideIcon
  title: string
  description: string
  details: string
  featured?: boolean
  index: number
}

export interface TechCategory {
  icon: LucideIcon
  title: string
  description: string
}

export interface TechIcon {
  name: string
  color: string
}

export interface StatCard {
  value: string
  label: string
  description: string
}

export interface TechSectionProps {
  TECH_CATEGORIES: TechCategory[]
  TECH_ICONS: TechIcon[]
}

export type AboutViewProps = ReturnType<typeof useAboutModel>
