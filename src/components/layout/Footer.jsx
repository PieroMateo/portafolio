import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import { scrollToTop } from '../../lib/scroll'

export default function Footer() {
  return (
    <footer className="border-t border-plum-700 px-5 py-8 md:px-10">
      <div className="flex flex-col gap-4 text-sm text-rose-200 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display text-base font-extrabold tracking-tightest text-cream-50">{profile.brand}</span>{' '}
          {profile.fullName}, {new Date().getFullYear()}. Hecho con React, GSAP y Tailwind CSS.
        </p>
        <button
          type="button"
          onClick={() => scrollToTop(false)}
          className="inline-flex items-center gap-2 self-start font-medium text-cream-50 hover:underline hover:underline-offset-4"
        >
          Volver arriba
          <ArrowUp size={16} aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}
