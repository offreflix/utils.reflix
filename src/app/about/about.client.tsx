'use client'

import { useAboutModel } from './about.model'
import { AboutView } from './about.view'

export function AboutClient() {
  const methods = useAboutModel()

  return <AboutView {...methods} />
}
