import { ArrowUpRight } from 'lucide-react'
import Button from '../ui/Button'
import Chip from '../ui/Chip'

// Número, nombre, descripción y enlaces de un proyecto. Se usa en la escena y en la lista móvil.
export default function ProjectInfo({ project, headingLevel: Heading = 'h3' }) {
  return (
    <div>
      <p className="flex items-baseline gap-4">
        <span className="text-outline-cream font-display text-7xl leading-none font-extrabold tracking-tightest">
          {project.number}
        </span>
        <span className="font-mono text-xs tracking-[0.15em] text-rose-200 uppercase">{project.type}</span>
      </p>

      <Heading className="mt-5 font-display text-[clamp(2rem,2.8vw,2.75rem)] leading-[0.95] font-extrabold tracking-tightest">
        {project.name}
      </Heading>

      <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-rose-200">{project.summary}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías del proyecto">
        {project.stack.map((item) => (
          <li key={item}>
            <Chip>{item}</Chip>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button to={`/proyectos/${project.slug}`}>Ver caso completo</Button>
        <Button variant="secondary" href={project.repo} icon={ArrowUpRight}>
          Código en GitHub
        </Button>
      </div>
    </div>
  )
}
