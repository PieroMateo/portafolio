export default function SectionLabel({ children, tone = 'dark', className = '', ...props }) {
  const color = tone === 'light' ? 'text-plum-950' : 'text-rose-200'

  return (
    <p className={`font-mono text-xs font-medium tracking-[0.2em] uppercase ${color} ${className}`} {...props}>
      {children}
    </p>
  )
}
