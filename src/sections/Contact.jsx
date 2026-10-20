import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Download } from 'lucide-react'
import { profile, sectionLabels } from '../data/profile'
import SectionLabel from '../components/ui/SectionLabel'
import Reveal from '../components/ui/Reveal'

const links = [
  { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github, icon: ArrowUpRight },
  { label: 'LinkedIn', value: profile.linkedin.replace('https://www.', ''), href: profile.linkedin, icon: ArrowUpRight },
  { label: 'CV', value: 'Descargar PDF', href: profile.cv, icon: Download, download: true },
]

// Escena 5: sin pin. Titular grande y formas de contacto.
export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contacto" aria-labelledby="contact-title" className="bg-plum-950 px-5 pt-28 pb-20 md:px-10 md:pt-40">
      <SectionLabel>{sectionLabels.contact}</SectionLabel>

      <Reveal>
        <h2
          id="contact-title"
          className="mt-6 font-display text-[clamp(2rem,9vw,10rem)] leading-[0.85] font-extrabold tracking-tightest"
        >
          ¿Hablamos?
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[5fr_7fr]">
        <p className="max-w-sm text-lg leading-relaxed text-rose-200">
          {profile.contactText}
        </p>

        <dl className="border-t border-plum-700">
          <div className="grid grid-cols-1 gap-2 border-b border-plum-700 py-6 md:grid-cols-[6rem_1fr] md:items-center md:gap-6">
            <dt className="font-mono text-xs tracking-[0.15em] text-rose-200 uppercase">Correo</dt>
            <dd className="flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="min-w-0 text-[clamp(1.05rem,2vw,1.75rem)] font-bold hover:underline hover:underline-offset-4"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-sm font-medium text-rose-200 transition-colors hover:bg-rose-200 hover:text-plum-950"
              >
                {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                <span aria-live="polite">{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </dd>
          </div>

          {links.map(({ label, value, href, icon: Icon, download }) => (
            <div key={label} className="grid grid-cols-1 gap-2 border-b border-plum-700 py-6 md:grid-cols-[6rem_1fr] md:items-center md:gap-6">
              <dt className="font-mono text-xs tracking-[0.15em] text-rose-200 uppercase">{label}</dt>
              <dd className="min-w-0">
                <a
                  href={href}
                  {...(download ? { download: true } : { target: '_blank', rel: 'noreferrer' })}
                  className="group flex items-center justify-between gap-4 text-lg font-medium"
                >
                  <span className="truncate group-hover:underline group-hover:underline-offset-4">{value}</span>
                  <Icon size={20} aria-hidden="true" className="shrink-0 transition-transform group-hover:-translate-y-0.5" />
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
