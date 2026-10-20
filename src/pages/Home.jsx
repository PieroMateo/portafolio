import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from '../lib/gsap'
import { scrollToSection } from '../lib/scroll'
import Intro from '../sections/Intro'
import Stack from '../sections/Stack'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Footer from '../components/layout/Footer'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'Piero Mateo — Desarrollador full stack'

    // Las fuentes cambian la altura de los textos: recalcula las escenas cuando terminen de cargar
    let timer
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh()
      // Al llegar desde otra página con /#seccion, baja hasta esa sección
      if (hash) timer = setTimeout(() => scrollToSection(hash.slice(1), { immediate: true }), 100)
    })
    return () => clearTimeout(timer)
  }, [hash])

  return (
    <>
      <main>
        <Intro />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
