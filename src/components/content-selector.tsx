import type { JSX } from 'react'
import { ROUTES, type RouteType } from '../routes'
import {
  BriefcaseBusiness,
  FolderOpenDot,
  MailPlus,
  SquareUser
} from 'lucide-react'
import { SelectorItem, type SelectorItemProps } from './selector-item'

interface ContentSelectorProps {
  readonly activePath: RouteType
}

const ICON_STYLE = 'h-8 w-8'

const CONTENT_SELECTOR_ITEMS: readonly Omit<SelectorItemProps, 'isActive'>[] = [
  {
    path: ROUTES.ABOUT,
    icon: <SquareUser className={ICON_STYLE} />,
    label: 'About'
  },
  {
    path: ROUTES.EXPERIENCE,
    icon: <BriefcaseBusiness className={ICON_STYLE} />,
    label: 'Experience'
  },
  {
    path: ROUTES.PROJECTS,
    icon: <FolderOpenDot className={ICON_STYLE} />,
    label: 'Projects'
  },
  {
    path: ROUTES.CONTACT,
    icon: <MailPlus className={ICON_STYLE} />,
    label: 'Contact'
  }
]

export function ContentSelector({
  activePath
}: ContentSelectorProps): JSX.Element {
  return (
    <div className='grid aspect-square max-w-md flex-1 grid-cols-2 grid-rows-2 gap-8'>
      {CONTENT_SELECTOR_ITEMS.map((item, idx) => (
        <SelectorItem
          key={`selector-item-${idx}-${item.path}`}
          path={item.path}
          icon={item.icon}
          label={item.label}
          isActive={item.path === activePath}
        />
      ))}
    </div>
  )
}
