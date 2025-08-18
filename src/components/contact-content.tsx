import type { JSX } from 'react'
import { SocialsContainer } from './socials-container'

export function ContactContent(): JSX.Element {
  return (
    <div className='text-primary-text flex flex-col gap-6 text-left'>
      <h1 className='text-4xl font-bold'>Get In Touch</h1>
      <p className='text-lg font-semibold'>
        Feel free to reach out, I'd love to chat!
      </p>
      <SocialsContainer />
    </div>
  )
}
