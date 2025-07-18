'use client'

import Script from 'next/script'
import { jsonLd } from './about.metadata'
import { ArticleContent } from '@/components/article-content'

import { AboutViewProps } from './about.types'

import { HeroSection } from './components/hero-section'
import { MissionSection } from './components/mission-section'
import { JourneySection } from './components/journey-section'
import { StatsSection } from './components/stats-section'
import { DeveloperSection } from './components/developer-section'
import { TechSection } from './components/tech-section'
import { ContactSection } from './components/contact-section'

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
