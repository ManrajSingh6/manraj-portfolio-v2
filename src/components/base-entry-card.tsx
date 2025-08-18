import type { JSX } from 'react'
import { BadgeContainer } from './badge'

interface BaseEntryCardProps {
  title: string
  subtitle: string
  href?: string
  dateText: string
  description: string
  badges: readonly string[]
}

export function BaseEntryCard({
  title,
  subtitle,
  href,
  dateText,
  description,
  badges
}: BaseEntryCardProps): JSX.Element {
  return (
    <div className='text-primary-text border-aqua/20 hover:border-aqua/40 flex max-w-4xl flex-col space-y-2 border-b p-4 transition md:p-6'>
      <div className='flex items-center justify-between'>
        <p className='inline-flex items-center tracking-wide'>
          <span className='font-semibold'>{title}</span>
          <span aria-hidden='true' className='text-aqua/70 mx-2 font-semibold'>
            ·
          </span>
          {href ? (
            <a
              href={href}
              className='text-aqua focus-visible:ring-aqua/50 rounded-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none'
              target='_blank'
              rel='noreferrer noopener'
            >
              {subtitle}
            </a>
          ) : (
            <span className='text-aqua font-medium'>{subtitle}</span>
          )}
        </p>
        <p className='text-aqua text-xs uppercase sm:text-sm'>{dateText}</p>
      </div>
      <p className='text-primary-text/90 mb-4 text-sm leading-6'>
        {description}
      </p>
      <BadgeContainer badges={badges} />
    </div>
  )
}
