import { ScrollTrigger } from './gsap'

let lenis = null

export const setLenis = (instance) => {
  lenis = instance
}

/*
 * Lleva a una sección por su id. Si la sección es una escena fijada (pin),
 * su ScrollTrigger tiene el mismo id y una etiqueta "navTarget" en su timeline
 * que indica en qué punto del recorrido se ve completa.
 */
export function scrollToSection(id, { immediate = false } = {}) {
  const trigger = ScrollTrigger.getById(id)
  const element = document.getElementById(id)
  if (!trigger && !element) return

  let top
  if (trigger) {
    const hasLabel = trigger.animation?.labels?.navTarget !== undefined
    top = hasLabel ? trigger.labelToScroll('navTarget') : trigger.start
  } else {
    top = element.getBoundingClientRect().top + window.scrollY
  }

  if (lenis) {
    // Tras cambiar de página Lenis aún puede tener la altura anterior y recortaría el destino
    lenis.resize()
    lenis.scrollTo(top, { duration: 1.4, immediate })
  } else {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top, behavior: smooth && !immediate ? 'smooth' : 'auto' })
  }
}

export function scrollToTop(immediate = true) {
  if (lenis) lenis.scrollTo(0, { immediate })
  else window.scrollTo(0, 0)
}
