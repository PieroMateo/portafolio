import Chip from './Chip'

export default function TechCard({ tech, index }) {
  const Icon = tech.icon

  return (
    <article className="flex h-full w-[min(82vw,360px)] shrink-0 snap-start flex-col rounded-2xl border border-plum-700 bg-plum-900 p-7">
      <div className="flex items-start justify-between">
        <Icon size={44} className="text-cream-50" aria-hidden="true" />
        <span className="font-mono text-xs text-rose-200">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <p className="mt-10 font-mono text-xs tracking-[0.15em] text-rose-200 uppercase">{tech.category}</p>
      <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tightest">{tech.name}</h3>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Qué hago con ${tech.name}`}>
        {tech.skills.map((skill) => (
          <li key={skill}>
            <Chip>{skill}</Chip>
          </li>
        ))}
      </ul>

      <p className="mt-auto border-t border-plum-700 pt-5 text-sm text-rose-200">
        Usado en <span className="font-medium text-cream-50">{tech.usedIn}</span>
      </p>
    </article>
  )
}
