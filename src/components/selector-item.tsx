import type { JSX } from 'react'
import { NavLink } from 'react-router-dom'
import type { RouteType } from '../routes'

export interface SelectorItemProps {
  readonly isActive: boolean
  readonly path: RouteType
  readonly icon: JSX.Element
  readonly label: string
}

export function SelectorItem({
  isActive,
  path,
  icon,
  label
}: SelectorItemProps): JSX.Element {
  const commonStyle = isActive ? 'text-aqua' : 'text-primary-text'

  return (
    <NavLink
      to={path}
      className={`flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border bg-white transition-colors duration-300 ${
        isActive ? 'border-aqua text-aqua' : 'hover:border-aqua border-gray-300'
      }`}
    >
      <span className={commonStyle}>{icon}</span>
      <span className={commonStyle}>{label}</span>
    </NavLink>
  )
}
