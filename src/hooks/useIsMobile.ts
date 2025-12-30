import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT_PX = 786

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(getIsMobile)

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(getIsMobile())
    }

    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  function getIsMobile(): boolean {
    return window.innerWidth < MOBILE_BREAKPOINT_PX
  }

  return !!isMobile
}
