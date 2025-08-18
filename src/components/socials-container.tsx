import { Github, Linkedin, Mail } from 'lucide-react'
import type { JSX } from 'react'
import { Link } from 'react-router'

interface SocialItemProps {
  readonly icon: JSX.Element
  readonly link: string
}

export function SocialsContainer(): JSX.Element {
  return (
    <div className='flex items-center gap-4'>
      <SocialItem icon={<Mail />} link='mailto:manrajs2025@gmail.com' />
      <SocialItem icon={<Github />} link='https://github.com/ManrajSingh6' />
      <SocialItem
        icon={<Linkedin />}
        link='https://www.linkedin.com/in/manrajs6/'
      />
    </div>
  )
}

function SocialItem({ icon, link }: SocialItemProps): JSX.Element {
  return (
    <Link
      to={link}
      target='_blank'
      className='bg-primary-text rounded-full border p-2 text-white'
    >
      {icon}
    </Link>
  )
}
