import { profile, sectionLabels } from '../data/profile'
import SectionLabel from '../components/ui/SectionLabel'
import Counter from '../components/ui/Counter'

/*
 * Capa "Sobre mí". En desktop se superpone a la escena fijada de Intro.jsx
 * (la foto B/N es la del Hero que se desliza); en móvil es una sección normal con su propia foto.
 */
export default function About() {
  const words = profile.aboutText.split(' ')

  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="on-light relative bg-cream-50 px-5 py-24 text-plum-950 md:px-10 cinematic:pointer-events-none cinematic:absolute cinematic:inset-0 cinematic:z-30 cinematic:flex cinematic:items-center cinematic:bg-transparent cinematic:py-0"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[5fr_7fr] md:items-center cinematic:block cinematic:w-full cinematic:pl-[46vw]">
        <img
          src={profile.photos.bw.src}
          alt={profile.photos.bw.alt}
          width="830"
          height="1321"
          loading="lazy"
          className="mx-auto w-[min(80vw,420px)] cinematic:hidden"
        />

        <div data-anim="about-content" className="max-w-2xl cinematic:pointer-events-auto">
          <SectionLabel tone="light" data-anim="about-item">
            {sectionLabels.about}
          </SectionLabel>

          <h2
            id="about-title"
            data-anim="about-item"
            className="mt-4 font-display text-[clamp(5rem,11vw,9.5rem)] leading-[0.85] font-extrabold tracking-tightest"
          >
            <span className="sr-only">Sobre mí: </span>
            {profile.aboutWord}
          </h2>

          {/* Cada palabra es un span para revelarla con el scroll */}
          <p className="mt-6 max-w-[34ch] text-[clamp(1.25rem,1.9vw,1.75rem)] leading-snug font-medium">
            {words.map((word, index) => (
              <span key={index} data-anim="word">
                {word}{' '}
              </span>
            ))}
          </p>

          <dl data-anim="about-item" className="mt-8 grid grid-cols-3 gap-4 border-t border-plum-700 pt-6">
            {profile.aboutFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs tracking-[0.15em] uppercase">{fact.label}</dt>
                <dd className="mt-2 font-display text-[clamp(1.125rem,1.8vw,1.75rem)] leading-tight font-extrabold tracking-tight md:whitespace-nowrap">
                  {fact.count ? <Counter value={fact.count} /> : fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
