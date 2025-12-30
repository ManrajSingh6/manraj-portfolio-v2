import type { JSX } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { RouteType } from '../../routes'

export interface SelectorItemProps {
  readonly isActive: boolean
  readonly path: RouteType
  readonly icon: JSX.Element
  readonly label: string
  readonly isMobile: boolean
}

export function SelectorItem({
  isActive,
  path,
  icon,
  label,
  isMobile
}: SelectorItemProps): JSX.Element {
  const commonStyle = isActive
    ? 'border-aqua text-aqua'
    : 'hover:border-aqua border-gray-300 hover:text-aqua'

  const borderStyle = isMobile ? 'rounded-xl p-2' : 'rounded-lg'
  const consolidatedStyle = `${commonStyle} ${borderStyle}`

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: isActive
          ? '0 20px 25px -5px rgba(37, 99, 235, 0.1), 0 8px 10px -6px rgba(37, 99, 235, 0.1)'
          : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25
      }}
      className='rounded-full'
    >
      <NavLink
        to={path}
        className={`flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-4 border bg-white transition-colors duration-300 ${consolidatedStyle}`}
      >
        <motion.span
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          {icon}
        </motion.span>
        {!isMobile && <span>{label}</span>}
      </NavLink>
    </motion.div>
  )
}
