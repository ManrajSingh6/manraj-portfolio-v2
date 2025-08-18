import type { JSX } from 'react'
import { ROUTES, type RouteType } from '../routes'
import { AboutContent } from './about-content'
import { ExperienceContent } from './experience-content'
import { ProjectContent } from './project-content'
import { ContactContent } from './contact-content'

interface ContentPaneProps {
  readonly activePath: RouteType
}

export function ContentPane({ activePath }: ContentPaneProps): JSX.Element {
  function getContentForPath(): JSX.Element {
    switch (activePath) {
      case ROUTES.ABOUT:
        return <AboutContent />
      case ROUTES.EXPERIENCE:
        return <ExperienceContent />
      case ROUTES.PROJECTS:
        return <ProjectContent />
      case ROUTES.CONTACT:
        return <ContactContent />
      default:
        return <p>This wasn't supposed to happen...</p>
    }
  }

  return <div className='flex-1'>{getContentForPath()}</div>
}
