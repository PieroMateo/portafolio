import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { getProject, projects, readyShots } from '../data/projects'
import BrowserFrame from '../components/ui/BrowserFrame'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'
import SectionLabel from '../components/ui/SectionLabel'
import Footer from '../components/layout/Footer'
import NotFound from './NotFound'

const enter = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    if (project) document.title = `${project.name} — Piero Mateo`
  }, [project])

  if (!project) return <NotFound />

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <main className="px-5 pt-28 pb-24 md:px-10 md:pt-36">
        <Link
          to="/#proyectos"
          className="inline-flex items-center gap-2 text-sm font-medium text-rose-200 hover:text-cream-50"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Volver a proyectos
        </Link>

        <motion.header className="mt-12" {...enter}>
          <SectionLabel>
            Proyecto {project.number} / {String(projects.length).padStart(2, '0')} · {project.type}
          </SectionLabel>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.9] font-extrabold tracking-tightest">
            {project.name}
          </h1>
          <p className="mt-8 max-w-[65ch] text-lg leading-relaxed text-rose-200">{project.summary}</p>
        </motion.header>

        <motion.div className="mt-16 grid grid-cols-1 gap-12 border-t border-plum-700 pt-12 md:grid-cols-[4fr_8fr]" {...enter}>
          <aside className="space-y-10">
            <div>
              <h2 className="font-mono text-xs tracking-[0.15em] text-rose-200 uppercase">Stack</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-xs tracking-[0.15em] text-rose-200 uppercase">Repositorio</h2>
              <Button variant="secondary" href={project.repo} icon={ArrowUpRight} className="mt-4">
                Código en GitHub
              </Button>
            </div>
          </aside>

          <div className="space-y-14">
            <section aria-labelledby="problema">
              <h2 id="problema" className="font-display text-3xl font-extrabold tracking-tight">
                El problema
              </h2>
              <p className="mt-4 max-w-[65ch] text-lg leading-relaxed">{project.problem}</p>
            </section>

            <section aria-labelledby="que-hice">
              <h2 id="que-hice" className="font-display text-3xl font-extrabold tracking-tight">
                Qué hice
              </h2>
              <ol className="mt-6 space-y-5">
                {project.contributions.map((item, i) => (
                  <li key={item} className="flex max-w-[65ch] gap-5 text-lg leading-relaxed">
                    <span className="pt-1.5 font-mono text-xs text-rose-200">{String(i + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </motion.div>

        <section aria-labelledby="galeria" className="mt-24">
          <h2 id="galeria" className="font-display text-3xl font-extrabold tracking-tight">
            Capturas
          </h2>
          <div className="mt-8 space-y-14">
            {readyShots(project).map((shot) => (
              <figure key={shot.src}>
                <BrowserFrame url={shot.url}>
                  <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full" />
                </BrowserFrame>
                <figcaption className="mt-4 font-mono text-xs text-rose-200">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <Link
          to={`/proyectos/${next.slug}`}
          className="group mt-28 block border-t border-plum-700 pt-10"
        >
          <span className="font-mono text-xs tracking-[0.15em] text-rose-200 uppercase">Siguiente proyecto</span>
          <span className="mt-4 flex items-center justify-between gap-6 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] font-extrabold tracking-tightest">
            <span className="group-hover:underline group-hover:decoration-2 group-hover:underline-offset-8">{next.name}</span>
            <ArrowRight className="size-10 shrink-0 transition-transform group-hover:translate-x-2 md:size-16" aria-hidden="true" />
          </span>
        </Link>
      </main>
      <Footer />
    </>
  )
}
