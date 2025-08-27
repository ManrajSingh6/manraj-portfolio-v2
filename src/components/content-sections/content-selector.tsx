import type { JSX } from 'react'
import { motion, spring } from 'framer-motion'
import { ROUTES, type RouteType } from '../../routes'
import {
  BriefcaseBusiness,
  FolderOpenDot,
  MailPlus,
  SquareUser
} from 'lucide-react'
import { SelectorItem, type SelectorItemProps } from '../common/selector-item'

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

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: spring,
      stiffness: 300,
      damping: 24
    }
  }
}

interface ContentSelectorProps {
  readonly activePath: RouteType
}

export function ContentSelector({
  activePath
}: ContentSelectorProps): JSX.Element {
  return (
    <motion.div
      className='grid aspect-square max-w-md flex-1 grid-cols-2 grid-rows-2 gap-8'
      variants={CONTAINER_VARIANTS}
      initial='hidden'
      animate='visible'
    >
      {CONTENT_SELECTOR_ITEMS.map((item, idx) => (
        <motion.div
          key={`selector-item-${idx}-${item.path}`}
          variants={ITEM_VARIANTS}
        >
          <SelectorItem
            path={item.path}
            icon={item.icon}
            label={item.label}
            isActive={item.path === activePath}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
