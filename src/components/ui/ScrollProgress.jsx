import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap'

export default function ScrollProgress() {
  const bar = useRef(null)

  useGSAP(() => {
    const setScale = gsap.quickSetter(bar.current, 'scaleX')
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => setScale(self.progress),
    })
  })

  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left scale-x-0 bg-rose-200"
    />
  )
}
