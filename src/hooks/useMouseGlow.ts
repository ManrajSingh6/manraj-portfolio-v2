import { useEffect, useRef } from 'react'

interface UseMouseGlowReturn {
  readonly glowRef: React.RefObject<HTMLDivElement | null>
}

export function useMouseGlow(): UseMouseGlowReturn {
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const currentRef = glowRef.current

    function handleMouseEvent(e: MouseEvent) {
      if (!currentRef) {
        return
      }
      currentRef.style.left = `${e.clientX}px`
      currentRef.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', handleMouseEvent, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseEvent)
  }, [])

  return {
    glowRef
  }
}
