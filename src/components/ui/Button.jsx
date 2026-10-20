import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

const VARIANTS = {
  primary: 'bg-cream-50 text-plum-950 hover:bg-rose-200',
  secondary: 'border border-rose-200 text-rose-200 hover:bg-rose-200 hover:text-plum-950',
  ink: 'bg-plum-950 text-cream-50 hover:bg-plum-900',
}

const BASE =
  'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200'

// Botón píldora: se renderiza como <Link> (to), <a> (href) o <button>.
export default function Button({ variant = 'primary', to, href, icon: Icon, children, className = '', ...props }) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`
  const motionProps = { whileHover: { y: -2 }, whileTap: { scale: 0.97 } }
  const content = (
    <>
      {children}
      {Icon && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps} {...props}>
        {content}
      </MotionLink>
    )
  }

  if (href) {
    const external = href.startsWith('http')
    return (
      <motion.a
        href={href}
        className={classes}
        {...(external && { target: '_blank', rel: 'noreferrer' })}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...props}>
      {content}
    </motion.button>
  )
}
