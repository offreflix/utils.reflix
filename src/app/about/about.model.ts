import {
  Shield,
  Globe,
  Sparkles,
  Target,
  Rocket,
  FileText,
  Code2,
  Palette,
  Search,
  Zap,
  Layers,
} from 'lucide-react'
import { useState } from 'react'
import { StatCard, TechCategory, TechIcon, ValueCardProps } from './about.types'

export const useAboutModel = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const VALUES_DATA: ValueCardProps[] = [
    {
      index: 1,
      icon: Target,
      title: 'Precisão',
      description: 'Resultados confiáveis baseados em padrões reconhecidos.',
      details:
        'Utilizamos algoritmos testados e validados, seguindo as melhores práticas da indústria para garantir que cada ferramenta entregue resultados precisos e consistentes.',
      featured: true,
    },
    {
      index: 2,
      icon: Globe,
      title: 'Acessibilidade',
      description:
        'Interfaces intuitivas para todos os dispositivos e usuários.',
      details:
        'Desenvolvemos com foco na experiência universal, garantindo que nossas ferramentas sejam utilizáveis por pessoas com diferentes habilidades e em diversos dispositivos.',
    },
    {
      index: 3,
      icon: Shield,
      title: 'Privacidade',
      description: 'Proteção total dos seus dados pessoais.',
      details:
        'Implementamos as mais rigorosas medidas de segurança e não coletamos dados desnecessários. Sua privacidade é nossa prioridade máxima.',
    },
    {
      index: 4,
      icon: Rocket,
      title: 'Inovação',
      description: 'Evolução constante com tecnologias de ponta.',
      details:
        'Mantemos-nos atualizados com as últimas tendências tecnológicas, incorporando inovações que realmente agregam valor à experiência do usuário.',
    },
    {
      index: 5,
      icon: FileText,
      title: 'Transparência',
      description: 'Código aberto e comunicação clara.',
      details:
        'Acreditamos na transparência total. Nosso código é aberto, nossa comunicação é direta e nossos processos são documentados publicamente.',
    },
    {
      index: 6,
      icon: Sparkles,
      title: 'Acesso Gratuito',
      description: 'Utilização ilimitada e sem custos adicionais.',
      details:
        'Todas as ferramentas disponíveis no Utils Reflix são gratuitas e sem restrições. Você pode utilizá-las quantas vezes quiser, sem custos adicionais.',
    },
  ]

  const TECH_CATEGORIES: TechCategory[] = [
    {
      icon: Code2,
      title: 'Frontend',
      description:
        'Next.js, React, TypeScript para interfaces modernas e performáticas',
    },
    {
      icon: Palette,
      title: 'Estilização',
      description: 'Tailwind CSS, PostCSS, Shadcn UI para design consistente',
    },
    {
      icon: Shield,
      title: 'Validação',
      description: 'Zod, React Hook Form para dados seguros e confiáveis',
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Otimização de metadata, JSON-LD para melhor descoberta',
    },
    {
      icon: Zap,
      title: 'Performance',
      description:
        'Code splitting, lazy loading, SSR/SSG para velocidade máxima',
    },
    {
      icon: Layers,
      title: 'Arquitetura',
      description:
        'Modularização por feature, componentização e hooks customizados',
    },
  ]

  const TECH_ICONS: TechIcon[] = [
    { name: 'React', color: 'text-blue-500' },
    { name: 'Next.js', color: 'text-black dark:text-white' },
    { name: 'TypeScript', color: 'text-blue-600' },
    { name: 'Tailwind', color: 'text-cyan-500' },
    { name: 'Shadcn UI', color: 'text-black dark:text-white' },
    { name: 'Zod', color: 'text-blue-700' },
  ]

  const STATS_DATA: StatCard[] = [
    {
      value: '2',
      label: 'Calculadoras',
      description:
        'Ferramentas de cálculo disponíveis, além de outros utilitários.',
    },
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Disponibilidade da plataforma.',
    },
    {
      value: '24/7',
      label: 'Suporte',
      description: 'Atendimento e contato via e-mail ou GitHub.',
    },
  ]

  return {
    activeSection,
    toggleSection,
    VALUES_DATA,
    TECH_CATEGORIES,
    TECH_ICONS,
    STATS_DATA,
  }
}
