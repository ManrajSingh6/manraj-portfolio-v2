import type { JSX } from 'react'
import { BadgeContainer } from './badge'
import { ExternalLink } from 'lucide-react'
import type { ProjectCategoryTab } from './project-content'

export interface ProjectEntry {
  readonly title: string
  readonly description: string
  readonly imageUrl: string
  readonly href?: string
  readonly badges: readonly string[]
  readonly tags: readonly ProjectCategoryTab[]
}

interface ProjectCardProps {
  readonly project: ProjectEntry
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const titleElement = project.href ? (
    <a
      href={project.href}
      target='_blank'
      className='text-aqua inline-flex w-fit items-center gap-1.5 leading-5 font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(97,160,255,0.55)]'
    >
      {project.title}
      <ExternalLink className='pb-1' size={22} aria-hidden />
    </a>
  ) : (
    <span className='text-aqua inline-flex items-center gap-1.5 leading-5 font-semibold'>
      {project.title}
    </span>
  )

  return (
    <div className='text-primary-text border-aqua/20 hover:border-aqua/40 max-w-4xl overflow-hidden border-b transition'>
      <div className='grid grid-cols-1 gap-10 p-4 md:grid-cols-[1fr_auto] md:p-6'>
        <div className='flex flex-col gap-4'>
          {titleElement}
          <p className='text-primary-text/90 text-sm leading-6'>
            {project.description}
          </p>
          <BadgeContainer badges={project.badges} />
        </div>
        <div className='md:w-56 md:shrink-0'>
          <div className='ring-aqua/20 bg-deep-blue/5 relative h-40 w-full overflow-hidden rounded-lg ring-1 md:h-36'>
            <img
              src={project.imageUrl}
              alt={`${project.title} preview`}
              loading='lazy'
              decoding='async'
              width={224} // matches md:w-56
              height={144} // matches md:h-36
              sizes='(min-width: 768px) 224px, 100vw'
              className='absolute inset-0 h-full w-full bg-white object-cover transition-transform duration-300 hover:scale-[1.02]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
