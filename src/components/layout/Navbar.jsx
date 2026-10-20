import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../../data/profile'
import { scrollToSection, scrollToTop } from '../../lib/scroll'

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => setOpen(false), [pathname])

  const goTo = (event, id) => {
    event.preventDefault()
    setOpen(false)
    if (isHome) scrollToSection(id)
    else navigate(`/#${id}`)
  }

  const goHome = (event) => {
    if (!isHome) return
    event.preventDefault()
    scrollToTop(false)
  }

  return (
    <header>
      {/* mix-blend-difference: el texto crema se vuelve oscuro sobre el fondo crema de "Sobre mí" */}
      <nav
        aria-label="Principal"
        className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 text-cream-50 mix-blend-difference md:px-10"
      >
        <Link to="/" onClick={goHome} className="font-display text-2xl font-extrabold tracking-tightest">
          {profile.brand}
          <span className="sr-only"> — inicio</span>
        </Link>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`/#${id}`} onClick={(event) => goTo(event, id)} className="text-sm font-medium hover:underline hover:underline-offset-4">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-m-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            className="fixed inset-0 z-30 flex flex-col justify-end bg-plum-950 px-5 pb-12 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="space-y-2">
              {navLinks.map(({ id, label }, index) => (
                <li key={id}>
                  <a
                    href={`/#${id}`}
                    onClick={(event) => goTo(event, id)}
                    className="flex items-baseline gap-4 font-display text-4xl font-extrabold tracking-tightest"
                  >
                    <span className="font-mono text-xs font-normal tracking-normal text-rose-200">0{index + 2}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
