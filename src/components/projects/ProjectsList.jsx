import { projects, readyShots } from '../../data/projects'
import { sectionLabels } from '../../data/profile'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'
import ProjectInfo from './ProjectInfo'
import ShotFrame from './ShotFrame'

// Escena 4 en móvil o con movimiento reducido: un proyecto debajo de otro.
export default function ProjectsList() {
  return (
    <section id="proyectos" aria-labelledby="projects-title" className="bg-plum-950 px-5 py-24 md:px-10">
      <SectionLabel>{sectionLabels.projects}</SectionLabel>
      <h2
        id="projects-title"
        className="mt-4 font-display text-[clamp(2.5rem,8vw,7.5rem)] leading-[0.9] font-extrabold tracking-tightest"
      >
        Proyectos
      </h2>

      <div className="mt-14 space-y-24">
        {projects.map((project) => (
          <article key={project.slug} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <Reveal>
              <ShotFrame shot={readyShots(project)[0]} slug={project.slug} />
            </Reveal>
            <Reveal delay={0.1}>
              <ProjectInfo project={project} />
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  )
}
