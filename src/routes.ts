export type RouteType = (typeof ROUTES)[keyof typeof ROUTES]

export const ROUTES = {
  ABOUT: '/about',
  PROJECTS: '/projects',
  EXPERIENCE: '/experience',
  CONTACT: '/contact'
} as const

export function isValidRoute(route: string): boolean {
  return Object.values(ROUTES).includes(route as RouteType)
}
