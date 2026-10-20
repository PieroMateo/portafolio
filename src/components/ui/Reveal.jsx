import { motion } from 'motion/react'
import useMediaQuery from '../../hooks/useMediaQuery'
import { MEDIA } from '../../lib/gsap'

// Entrada suave solo en móvil: en desktop las escenas las anima GSAP.
export default function Reveal({ children, className = '', delay = 0 }) {
  const isMobile = useMediaQuery(MEDIA.mobile)

  if (!isMobile) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
