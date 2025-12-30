import type { JSX } from 'react'
import { SocialsContainer } from '../common/socials-container'

export function ContactContent(): JSX.Element {
  return (
    <div className='text-primary-text flex flex-col gap-6 text-left sm:gap-6'>
      <h1 className='text-2xl leading-tight font-bold sm:text-3xl md:text-4xl'>
        Get In Touch
      </h1>
      <p className='text-base font-semibold sm:text-lg'>
        Feel free to reach out, I'd love to chat!
      </p>
      <SocialsContainer />
    </div>
  )
}
