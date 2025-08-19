import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ContentPane } from './components/content-pane'
import { ContentSelector } from './components/content-selector'
import { isValidRoute, ROUTES, type RouteType } from './routes'
import { SocialsContainer } from './components/socials-container'

function App() {
  const location = useLocation()

  const activePath = location.pathname as RouteType

  if (!isValidRoute(activePath)) {
    return <Navigate to={ROUTES.ABOUT} replace />
  }

  const routeContent = (
    <div className='bg-app-bg flex h-screen flex-col'>
      {activePath !== '/contact' && (
        <div className='fixed top-4 left-1/2 -translate-x-1/2 transform'>
          <SocialsContainer />
        </div>
      )}
      <div className='flex h-screen items-center justify-center space-x-20 overflow-hidden px-24'>
        <ContentPane activePath={activePath} />
        <ContentSelector activePath={activePath} />
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
