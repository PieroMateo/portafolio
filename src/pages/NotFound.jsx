import { useEffect } from 'react'
import Button from '../components/ui/Button'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Página no encontrada — Piero Mateo'
  }, [])

  return (
    <main className="flex min-h-svh flex-col justify-center px-5 py-28 md:px-10">
      <p className="text-outline-cream font-display text-[clamp(8rem,30vw,24rem)] leading-[0.8] font-extrabold tracking-tightest" aria-hidden="true">
        404
      </p>
      <h1 className="mt-12 font-display text-4xl font-extrabold tracking-tight">Esta página no existe.</h1>
      <p className="mt-3 text-lg text-rose-200">Revisa la dirección o vuelve al inicio para ver los proyectos.</p>
      <Button to="/" className="mt-8 self-start">
        Volver al inicio
      </Button>
    </main>
  )
}
