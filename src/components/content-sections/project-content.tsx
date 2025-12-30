import { useState, type JSX } from 'react'
import { motion, AnimatePresence, spring } from 'framer-motion'
import { PROJECT_DATA } from '../../data'
import { ProjectCard } from '../cards/project-card'
import { Scrollable } from '../common/scrollable'
import { type Tab, TabsGroup } from '../common/tabs-group'

export type ProjectCategoryTab =
  | 'full-stack'
  | 'data-science'
  | 'distributed-systems'
  | 'AI'

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: spring,
      stiffness: 300,
      damping: 24
    }
  }
}

export function ProjectContent(): JSX.Element {
  const [toggledTab, setToggledTab] = useState<ProjectCategoryTab>('full-stack')

  const tabs: readonly Tab<ProjectCategoryTab>[] = [
    {
      label: 'Full Stack',
      value: 'full-stack'
    },
    {
      label: 'Data Science',
      value: 'data-science'
    },
    {
      label: 'Distributed Systems',
      value: 'distributed-systems'
    },
    {
      label: 'AI Agents',
      value: 'AI'
    }
  ]

  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.tags.includes(toggledTab)
  )

  return (
    <div className='flex flex-col space-y-2 sm:space-y-4'>
      <TabsGroup
        tabs={tabs}
        toggledTab={toggledTab}
        setToggledTab={setToggledTab}
      />
      <AnimatePresence mode='wait'>
        <motion.div key={toggledTab}>
          <Scrollable>
            <motion.div
              className='flex flex-col space-y-2 sm:space-y-4'
              variants={CONTAINER_VARIANTS}
              initial='hidden'
              animate='visible'
            >
              {filteredProjects.map((project, idx) => (
                <motion.div key={idx} variants={ITEM_VARIANTS}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </Scrollable>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
