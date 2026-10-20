import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import useLenis from './hooks/useLenis'
import { scrollToTop } from './lib/scroll'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/ui/ScrollProgress'
import CustomCursor from './components/ui/CustomCursor'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname, hash } = useLocation()
  useLenis()

  // Cada página nueva empieza arriba (salvo que la URL apunte a una sección)
  useLayoutEffect(() => {
    if (!hash) scrollToTop()
  }, [pathname, hash])

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CustomCursor />
    </MotionConfig>
  )
}
