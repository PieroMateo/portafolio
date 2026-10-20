import { useRef } from 'react'
import { gsap, useGSAP, MEDIA } from '../lib/gsap'
import { countUpOnEnter, countUpVars } from '../lib/animations'
import Hero from './Hero'
import About from './About'
import Timeline from './Timeline'

/*
 * Escenas 1 y 2 del recorrido: Intro → Sobre mí.
 * En desktop ambas comparten un escenario fijado (pin) para que la foto pase
 * de una a otra; el scroll avanza la timeline (scrub).
 */
export default function Intro() {
  const scope = useRef(null)
  const stage = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope)
      const mm = gsap.matchMedia()

      // Entrada al cargar la página
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power4.out' } })
          .from(q('[data-anim="name-line"]'), { yPercent: 105, duration: 1.2, stagger: 0.12 })
          .from(q('[data-anim="portrait"]'), { y: '35%', scale: 0.8, autoAlpha: 0, duration: 1.4 }, 0.25)
          .from(q('[data-anim="hero-ui"]'), { y: 16, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, 0.9)
      })

      mm.add(MEDIA.cinematic, () => {
        const portrait = q('[data-anim="portrait"]')[0]
        // Distancia para llevar la foto del centro al margen izquierdo
        const portraitShift = () => {
          const gutter = Math.max(40, window.innerWidth * 0.06)
          return gutter - (stage.current.clientWidth / 2 - portrait.offsetWidth / 2)
        }

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            id: 'sobre-mi',
            trigger: stage.current,
            start: 'top top',
            end: '+=240%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        tl.to(q('[data-anim="hero-fade"]'), { autoAlpha: 0, y: -20, duration: 0.3 }, 0)
          .to(q('[data-anim="name"]'), { scale: 1.35, autoAlpha: 0, duration: 0.8, ease: 'power1.in' }, 0)
          // "Se enciende la luz": el fondo crema aparece sobre el ciruela
          .to(q('[data-anim="light"]'), { opacity: 1, duration: 0.6 }, 0.1)
          .to(portrait, { x: portraitShift, duration: 0.9, ease: 'power2.inOut' }, 0.15)
          .to(q('[data-anim="photo-color"]'), { opacity: 0, duration: 0.6 }, 0.3)
          .to(q('[data-anim="photo-bw"]'), { opacity: 1, duration: 0.6 }, 0.3)
          .fromTo(q('[data-anim="about-content"]'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.01 }, 0.75)
          .from(q('[data-anim="about-item"]'), { x: 80, autoAlpha: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' }, 0.75)
          .fromTo(q('[data-anim="word"]'), { opacity: 0.12 }, { opacity: 1, duration: 0.1, stagger: 0.035 }, 1.1)
          .from(q('#sobre-mi [data-count]'), countUpVars({ duration: 0.6 }), 1.3)
          .addLabel('navTarget')
          .to({}, { duration: 0.4 }) // pausa antes de soltar el pin

        // El contador de la línea de tiempo queda fuera de la escena fijada
        countUpOnEnter(q('[data-count]').filter((element) => !element.closest('#sobre-mi')))
      })

      mm.add(MEDIA.mobile, () => {
        countUpOnEnter(q('[data-count]'))
      })
    },
    { scope },
  )

  return (
    <div ref={scope}>
      <div ref={stage} className="relative overflow-hidden cinematic:h-svh">
        <div
          data-anim="light"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-cream-50 opacity-0 cinematic:block"
        />
        <Hero />
        <About />
      </div>
      <Timeline />
    </div>
  )
}
