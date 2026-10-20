import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import Counter from '../components/ui/Counter'
import Reveal from '../components/ui/Reveal'

// Continuación de "Sobre mí" sobre el mismo fondo crema, ya fuera de la escena fijada.
export default function Timeline() {
  return (
    <section aria-labelledby="timeline-title" className="on-light bg-cream-50 px-5 pt-8 pb-28 text-plum-950 md:px-10 md:pt-24">
      <h2
        id="timeline-title"
        className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none font-extrabold tracking-tightest"
      >
        Trayectoria
      </h2>

      <ol className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
        {profile.timeline.map((item, index) => (
          <li key={item.title} className="relative border-t border-plum-700 pt-6">
            <span className="absolute -top-[5px] left-0 size-2.5 rounded-full bg-plum-500" aria-hidden="true" />
            <Reveal delay={index * 0.05}>
              <p className="font-mono text-sm font-medium tracking-[0.1em] uppercase">{item.date}</p>
              <h3 className="mt-3 font-display text-xl leading-tight font-extrabold tracking-tight">{item.title}</h3>

              {item.highlight && (
                <p className="mt-4 font-display text-6xl leading-none font-extrabold tracking-tightest">
                  <Counter value={item.highlight.count} />
                  <span className="ml-1 text-3xl">{item.highlight.unit}</span>
                </p>
              )}

              <p className="mt-4 text-base leading-relaxed text-plum-700">{item.detail}</p>

              {item.proof && (
                <a
                  href={item.proof.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-base font-medium underline underline-offset-4 hover:no-underline"
                >
                  {item.proof.label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
