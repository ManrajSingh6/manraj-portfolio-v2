import { Github, Linkedin, Mail } from 'lucide-react'
import type { JSX } from 'react'
import { Link } from 'react-router'

interface SocialItemProps {
  readonly icon: JSX.Element
  readonly link: string
}

const ICON_SIZE = 20

export function SocialsContainer(): JSX.Element {
  return (
    <div className='flex items-center gap-6'>
      <SocialItem
        icon={<Mail size={ICON_SIZE} />}
        link='mailto:manrajs2025@gmail.com'
      />
      <SocialItem
        icon={<Github size={ICON_SIZE} />}
        link='https://github.com/ManrajSingh6'
      />
      <SocialItem
        icon={<Linkedin size={ICON_SIZE} />}
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
      className='bg-primary-text hover:bg-aqua rounded-full border p-2 text-white transition-all'
    >
      {icon}
    </Link>
  )
}
