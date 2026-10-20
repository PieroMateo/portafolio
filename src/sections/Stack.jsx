import { useRef } from 'react'
import { stack } from '../data/stack'
import { sectionLabels } from '../data/profile'
import { gsap, useGSAP, MEDIA } from '../lib/gsap'
import SectionLabel from '../components/ui/SectionLabel'
import TechCard from '../components/ui/TechCard'
import Reveal from '../components/ui/Reveal'

/*
 * Escena 3: pasarela horizontal. En desktop la sección se fija y el scroll vertical
 * mueve la fila de tarjetas hacia la izquierda; en móvil es un carrusel con scroll-snap.
 */
export default function Stack() {
  const section = useRef(null)
  const track = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MEDIA.cinematic, () => {
        // Cuánto hay que mover la fila para que la última tarjeta quede dentro del margen derecho
        const distance = () => {
          const last = track.current.lastElementChild
          const gutter = parseFloat(getComputedStyle(track.current).paddingLeft)
          return Math.max(0, last.offsetLeft + last.offsetWidth + gutter - track.current.clientWidth)
        }

        gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            id: 'stack',
            trigger: section.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      })
    },
    { scope: section },
  )

  return (
    <section
      ref={section}
      id="stack"
      aria-labelledby="stack-title"
      className="overflow-hidden bg-plum-950 py-24 cinematic:flex cinematic:h-svh cinematic:flex-col cinematic:justify-center cinematic:py-0"
    >
      <Reveal className="flex flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <SectionLabel>{sectionLabels.stack}</SectionLabel>
          <h2
            id="stack-title"
            className="mt-4 font-display text-[clamp(2.5rem,8vw,7.5rem)] leading-[0.9] font-extrabold tracking-tightest"
          >
            Con qué construyo
          </h2>
        </div>
        <p className="max-w-xs text-base text-rose-200">
          Qué hago con cada tecnología y en qué proyecto la usé.
          <span className="cinematic:hidden"> Desliza para ver todas.</span>
        </p>
      </Reveal>

      <div
        ref={track}
        role="region"
        aria-label="Tecnologías"
        tabIndex={0}
        className="mt-12 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-2 scrollbar-none md:scroll-px-10 md:px-10 cinematic:snap-none cinematic:overflow-visible"
      >
        {stack.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </section>
  )
}
