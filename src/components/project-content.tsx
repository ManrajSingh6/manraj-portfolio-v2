import { useState, type JSX } from 'react'
import { PROJECT_DATA } from '../data'
import { ProjectCard } from './project-card'
import { Scrollable } from './scrollable'
import { TabsGroup, type Tab } from './tabs-group'

export type ProjectCategoryTab =
  | 'full-stack'
  | 'data-science'
  | 'distributed-systems'

export function ProjectContent(): JSX.Element {
  const [toggledTab, setToggledTab] = useState<ProjectCategoryTab>('full-stack')

  const tabs: readonly Tab<ProjectCategoryTab>[] = [
    {
      label: 'Full Stack',
      value: 'full-stack'
    },
    {
      label: 'Data Science/Machine Learning',
      value: 'data-science'
    },
    {
      label: 'Distributed Systems',
      value: 'distributed-systems'
    }
  ]

  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.tags.includes(toggledTab)
  )

  return (
    <div className='flex flex-col space-y-4'>
      <TabsGroup
        tabs={tabs}
        toggledTab={toggledTab}
        setToggledTab={setToggledTab}
      />
      <Scrollable>
        <div className='flex flex-col space-y-4'>
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </Scrollable>
    </div>
  )
}
