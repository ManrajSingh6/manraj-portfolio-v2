import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ContentPane } from './components/content-sections/content-pane'
import { ContentSelector } from './components/content-sections/content-selector'
import { isValidRoute, ROUTES, type RouteType } from './routes'
import { SocialsContainer } from './components/common/socials-container'
import { useEffect, useRef } from 'react'
import { Footer } from './components/common/footer'

const GLOW_SIZE = 1500

function App() {
  const location = useLocation()
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

  const activePath = location.pathname as RouteType

  if (!isValidRoute(activePath)) {
    return <Navigate to={ROUTES.ABOUT} replace />
  }

  const routeContent = (
    <div className='bg-app-bg relative flex h-screen flex-col overflow-hidden'>
      <div
        ref={glowRef}
        className='pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 blur-[22px] will-change-transform'
        style={{
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          background: `radial-gradient(closest-side,
            rgba(125, 211, 252, 0.1),   /* aqua blue core */
            rgba(45, 212, 191, 0.05) 28%, /* teal mid */
            rgba(255,255,255,0) 62%       /* smooth fade */
          )`
        }}
      />
      {/* Main content */}
      {activePath !== '/contact' && (
        <div className='fixed top-4 left-1/2 z-50 -translate-x-1/2 transform'>
          <SocialsContainer />
        </div>
      )}
      <div className='relative z-10 flex h-screen items-center justify-center space-x-20 overflow-hidden px-24'>
        <ContentPane activePath={activePath} />
        <ContentSelector activePath={activePath} />
      </div>
      <div className='fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform'>
        <Footer />
      </div>
    </div>
  )

  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTES.ABOUT} replace />} />
      <Route path={activePath} element={routeContent} />
      <Route path='*' element={<Navigate to={ROUTES.ABOUT} replace />} />
    </Routes>
  )
}

export default App
