import { ArrowDown, Download } from 'lucide-react'
import { profile, sectionLabels } from '../data/profile'
import { scrollToSection } from '../lib/scroll'
import Button from '../components/ui/Button'
import SectionLabel from '../components/ui/SectionLabel'

/*
 * Capa "Intro" de la escena inicial. En desktop sus elementos están superpuestos
 * (nombre gigante detrás, foto delante); en móvil se apilan en columna.
 * Los atributos data-anim son los ganchos que usa la timeline de Intro.jsx.
 */
export default function Hero() {
  const [first, last] = profile.heroName

  return (
    <section
      id="intro"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh flex-col px-5 pt-24 pb-6 md:block md:px-10 md:pb-0"
    >
      <SectionLabel className="relative z-30" data-anim="hero-ui">
        {sectionLabels.intro}
      </SectionLabel>

      <h1
        id="hero-title"
        data-anim="name"
        className="relative z-10 mt-6 text-center font-display text-[14vw] leading-[0.8] font-extrabold tracking-tightest uppercase md:absolute md:inset-x-0 md:top-[14svh] md:mt-0 md:text-[16vw]"
      >
        <span className="sr-only">{profile.fullName}, desarrollador full stack</span>
        <span aria-hidden="true" className="block overflow-hidden pb-[0.04em]">
          <span data-anim="name-line" className="block">
            {first}
          </span>
        </span>
        <span aria-hidden="true" className="block overflow-hidden pb-[0.04em]">
          <span data-anim="name-line" className="text-outline-cream block">
            {last}
          </span>
        </span>
      </h1>

      {/* La misma foto en color y en B/N, apiladas para el fundido cruzado */}
      <div
        data-anim="portrait"
        className="relative z-20 mx-auto -mt-[14vw] aspect-[830/1321] w-[min(80vw,360px)] origin-bottom md:absolute md:bottom-0 md:left-1/2 md:mt-0 md:h-[86svh] md:w-auto md:-translate-x-1/2"
      >
        <img
          data-anim="photo-color"
          src={profile.photos.color.src}
          alt={profile.photos.color.alt}
          width="830"
          height="1321"
          fetchPriority="high"
          className="absolute inset-0 size-full object-contain object-bottom"
        />
        <img
          data-anim="photo-bw"
          src={profile.photos.bw.src}
          alt=""
          width="830"
          height="1321"
          loading="lazy"
          className="absolute inset-0 hidden size-full object-contain object-bottom opacity-0 cinematic:block"
        />
      </div>

      <div
        data-anim="hero-ui"
        className="relative z-30 mt-8 max-w-md md:absolute md:bottom-24 md:left-10 md:mt-0 md:max-w-[min(26rem,30vw)]"
      >
        <p className="text-lg font-bold">{profile.tagline}</p>
        <p className="mt-3 text-base leading-relaxed text-rose-200">{profile.heroText}</p>
      </div>

      <div
        data-anim="hero-ui"
        className="relative z-30 mt-6 flex flex-wrap gap-3 md:absolute md:right-10 md:bottom-24 md:mt-0 md:flex-col md:items-end"
      >
        <Button onClick={() => scrollToSection('proyectos')}>Ver proyectos</Button>
        <Button variant="secondary" href={profile.cv} download icon={Download}>
          Descargar CV
        </Button>
      </div>

      <div
        data-anim="hero-ui"
        className="relative z-30 mt-auto flex items-center justify-between gap-4 pt-10 font-mono text-[11px] tracking-[0.18em] text-rose-200 uppercase md:absolute md:inset-x-10 md:bottom-7 md:pt-0"
      >
        <span className="flex items-center gap-10">
          {profile.location}
          <span className="hidden items-center gap-2 md:flex" aria-hidden="true">
            <ArrowDown size={14} className="animate-bounce" />
            Scroll
          </span>
        </span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-rose-200" aria-hidden="true" />
          {profile.availability}
        </span>
      </div>
    </section>
  )
}
