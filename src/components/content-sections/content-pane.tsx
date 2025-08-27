import type { JSX } from 'react'
import { motion, AnimatePresence, spring } from 'framer-motion'
import { ROUTES, type RouteType } from '../../routes'
import { AboutContent } from './about-content'
import { ExperienceContent } from './experience-content'
import { ContactContent } from './contact-content'
import { ProjectContent } from './project-content'

const PAGE_VARIANTS = {
  initial: {
    opacity: 0,
    x: -20,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: spring,
      stiffness: 300,
      damping: 30,
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    scale: 0.95,
    transition: {
      type: spring,
      stiffness: 300,
      damping: 30,
      duration: 0.3
    }
  }
}

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

  return (
    <div className='flex-1'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={activePath}
          variants={PAGE_VARIANTS}
          initial='initial'
          animate='animate'
          exit='exit'
          className='h-full'
        >
          {getContentForPath()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
