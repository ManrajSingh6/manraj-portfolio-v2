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
const MOBILE_ICON_STYLE = 'h-5 w-5'

function getContentSelectorItems(
  isMobile: boolean
): readonly Omit<SelectorItemProps, 'isActive' | 'isMobile'>[] {
  const iconStyle = isMobile ? MOBILE_ICON_STYLE : ICON_STYLE
  return [
    {
      path: ROUTES.ABOUT,
      icon: <SquareUser className={iconStyle} />,
      label: 'About'
    },
    {
      path: ROUTES.EXPERIENCE,
      icon: <BriefcaseBusiness className={iconStyle} />,
      label: 'Experience'
    },
    {
      path: ROUTES.PROJECTS,
      icon: <FolderOpenDot className={iconStyle} />,
      label: 'Projects'
    },
    {
      path: ROUTES.CONTACT,
      icon: <MailPlus className={iconStyle} />,
      label: 'Contact'
    }
  ]
}

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
    ? 'flex items-center justify-center gap-3 m-auto text-sm bg-white/80 backdrop-blur-sm px-4 py-2.5 shadow-md rounded-2xl fixed top-4 left-1/2 -translate-x-1/2 z-50 border border-aqua/10'
    : 'grid aspect-square max-w-md  grid-cols-2 grid-rows-2 gap-8'

  return (
    <motion.div
      className={styles}
      variants={CONTAINER_VARIANTS}
      initial='hidden'
      animate='visible'
    >
      {getContentSelectorItems(isMobile).map((item, idx) => (
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
