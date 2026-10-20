// El valor final se renderiza siempre; GSAP lo anima desde 0 leyendo data-count.
export default function Counter({ value, className = '' }) {
  return (
    <span data-count={value} className={`tabular-nums ${className}`}>
      {value}
    </span>
  )
}
