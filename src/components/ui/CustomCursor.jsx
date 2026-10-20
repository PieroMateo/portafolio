import { useRef, useState } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import useMediaQuery from '../../hooks/useMediaQuery'

// Círculo que sigue al mouse y crece con la palabra "Ver" sobre elementos con data-cursor="view".
export default function CustomCursor() {
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const cursor = useRef(null)
  const [active, setActive] = useState(false)

  useGSAP(
    () => {
      if (!finePointer) return
      const moveX = gsap.quickTo(cursor.current, 'x', { duration: 0.35, ease: 'power3' })
      const moveY = gsap.quickTo(cursor.current, 'y', { duration: 0.35, ease: 'power3' })

      const onMove = (event) => {
        moveX(event.clientX)
        moveY(event.clientY)
        setActive(Boolean(event.target.closest?.('[data-cursor="view"]')))
      }

      window.addEventListener('pointermove', onMove)
      return () => window.removeEventListener('pointermove', onMove)
    },
    { dependencies: [finePointer] },
  )

  if (!finePointer) return null

  return (
    <div ref={cursor} aria-hidden="true" className="pointer-events-none fixed top-0 left-0 z-[60]">
      <div
        className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 font-mono text-xs font-medium text-plum-950 uppercase transition-[width,height,opacity] duration-300 ${
          active ? 'size-20 opacity-100' : 'size-0 opacity-0'
        }`}
      >
        {active && 'Ver'}
      </div>
    </div>
  )
}
