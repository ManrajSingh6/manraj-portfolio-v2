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
      className={`border-aqua text-aqua flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border transition-colors duration-300 ${
        isActive
          ? 'border-aqua'
          : 'border-primary-text hover:border-primary-text'
      }`}
    >
      <span className={commonStyle}>{icon}</span>
      <span className={commonStyle}>{label}</span>
    </NavLink>
  )
}
