import type { JSX } from 'react'

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()
  return <p>© {currentYear} Manraj Singh</p>
}
