import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { projects, readyShots } from '../../data/projects'
import { sectionLabels } from '../../data/profile'
import { gsap, useGSAP } from '../../lib/gsap'
import SectionLabel from '../ui/SectionLabel'
import ProjectInfo from './ProjectInfo'
import ShotFrame from './ShotFrame'

// Todas las capturas en una sola fila, recordando a qué proyecto pertenece cada una
const shots = projects.flatMap((project, projectIndex) =>
  readyShots(project).map((shot) => ({ ...shot, projectIndex, slug: project.slug })),
)

/*
 * Escena 4 (desktop): la sección se fija y cada captura se revela de abajo hacia arriba
 * sobre la anterior. El texto de la izquierda cambia según la captura visible.
 */
export default function ProjectsScene() {
  const section = useRef(null)
  const [activeShot, setActiveShot] = useState(0)
  const project = projects[shots[activeShot].projectIndex]

  useGSAP(
    () => {
      const frames = [...section.current.querySelectorAll('[data-anim="frame"]')]

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          id: 'proyectos',
          trigger: section.current,
          start: 'top top',
          end: () => `+=${frames.length * 85}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          // La captura i termina de revelarse en el segundo i de la timeline
          onUpdate: (self) => {
            const index = gsap.utils.clamp(0, frames.length - 1, Math.round(self.animation.time()))
            setActiveShot(index)
          },
        },
      })

      frames.slice(1).forEach((frame, i) => {
        const image = frame.querySelector('img')
        tl.fromTo(frame, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1 }, i)
          .fromTo(image, { scale: 1.3 }, { scale: 1, duration: 1 }, i)
          .to(frames[i], { scale: 0.92, duration: 1 }, i)
      })

      tl.to({}, { duration: 0.4 }) // pausa antes de soltar el pin
    },
    { scope: section },
  )

  return (
    <section
      ref={section}
      id="proyectos"
      aria-labelledby="projects-title"
      className="grid h-svh grid-cols-12 items-center gap-10 overflow-hidden bg-plum-950 px-10 pt-16"
    >
      <div className="col-span-5">
        <SectionLabel>{sectionLabels.projects}</SectionLabel>
        <h2 id="projects-title" className="sr-only">
          Proyectos
        </h2>

        <ol className="mt-6 flex gap-2" aria-label="Proyectos">
          {projects.map((item) => (
            <li
              key={item.slug}
              aria-current={item.slug === project.slug ? 'true' : undefined}
              className={`h-1 w-12 rounded-full transition-colors duration-300 ${
                item.slug === project.slug ? 'bg-rose-200' : 'bg-plum-700'
              }`}
            >
              <span className="sr-only">{item.name}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectInfo project={project} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="col-span-7">
        <div className="grid">
          {shots.map((shot, index) => (
            <div key={shot.src} data-anim="frame" className="relative origin-top [grid-area:1/1]" style={{ zIndex: index }}>
              <ShotFrame shot={shot} slug={shot.slug} tabIndex={index === activeShot ? 0 : -1} />
            </div>
          ))}
        </div>
        <p className="mt-5 font-mono text-xs text-rose-200">
          {String(activeShot + 1).padStart(2, '0')} / {String(shots.length).padStart(2, '0')} — {shots[activeShot].caption}
        </p>
      </div>
    </section>
  )
}
