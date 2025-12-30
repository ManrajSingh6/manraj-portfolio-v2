import type { JSX } from 'react'
import { HighlightedText } from '../common/highlighted-text'

export function AboutContent(): JSX.Element {
  return (
    <div className='text-primary-text flex flex-col gap-6'>
      <p className='text-lg font-semibold'>Hi there 👋</p>
      <h1 className='text-4xl font-bold'>Manraj Singh - Software Engineer</h1>
      <p className='leading-7 font-thin'>
        I'm a <HighlightedText>team player</HighlightedText> with a positive
        attitude, and enjoy using my critical thinking skills to{' '}
        <HighlightedText>learn and solve problems.</HighlightedText> I enjoy
        full-stack development, and have a goal as a developer to{' '}
        <HighlightedText>
          leverage technology to create a lasting impact on users.
        </HighlightedText>
      </p>
      <p className='leading-7 font-thin'>
        When I'm not coding, you'll find me at the{' '}
        <HighlightedText>gym</HighlightedText>, exploring{' '}
        <HighlightedText>outdoors</HighlightedText> or{' '}
        <HighlightedText>producing music.</HighlightedText>
      </p>
    </div>
  )
}
