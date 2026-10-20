import { gsap } from './gsap'

// Contador de 0 al valor que ya está escrito en el elemento.
export const countUpVars = (vars = {}) => ({
  textContent: 0,
  snap: { textContent: 1 },
  ease: 'power2.out',
  ...vars,
})

export function countUpOnEnter(elements) {
  gsap.utils.toArray(elements).forEach((element) => {
    gsap.from(element, countUpVars({ duration: 1.6, scrollTrigger: { trigger: element, start: 'top 85%', once: true } }))
  })
}
