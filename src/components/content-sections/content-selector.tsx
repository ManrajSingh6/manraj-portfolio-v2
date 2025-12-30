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

const ICON_STYLE = 'h-6 w-6'

const CONTENT_SELECTOR_ITEMS: readonly Omit<
  SelectorItemProps,
  'isActive' | 'isMobile'
>[] = [
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
  readonly isMobile: boolean
}

export function ContentSelector({
  activePath,
  isMobile
}: ContentSelectorProps): JSX.Element {
  const styles = isMobile
    ? 'flex items-center justify-between gap-4 m-auto text-sm bg-white p-2 shadow-lg rounded-full fixed top-4 left-1/2 -translate-x-1/2 z-50'
    : 'grid aspect-square max-w-md  grid-cols-2 grid-rows-2 gap-8'

  return (
    <motion.div
      className={styles}
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
            isMobile={isMobile}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
