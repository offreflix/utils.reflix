'use client'

import Script from 'next/script'
import { jsonLd } from './about.metadata'
import { ArticleContent } from '@/components/article-content'

import { AboutViewProps } from './about.types'

import { HeroSection } from './components/HeroSection'
import { MissionSection } from './components/MissionSection'
import { JourneySection } from './components/JourneySection'
import { StatsSection } from './components/StatsSection'
import { DeveloperSection } from './components/DeveloperSection'
import { TechSection } from './components/TechSection'
import { ContactSection } from './components/ContactSection'

export const AboutView = (props: AboutViewProps) => {
  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleContent>
        <HeroSection />
        <MissionSection VALUES_DATA={props.VALUES_DATA} />
        <JourneySection />
        <StatsSection STATS_DATA={props.STATS_DATA} />
        <DeveloperSection />
        <TechSection
          TECH_CATEGORIES={props.TECH_CATEGORIES}
          TECH_ICONS={props.TECH_ICONS}
        />
        <ContactSection />
      </ArticleContent>
    </>
  )
}
