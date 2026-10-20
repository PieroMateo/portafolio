export default function Chip({ children, tone = 'dark' }) {
  const colors = tone === 'light' ? 'border-plum-700 text-plum-950' : 'border-plum-700 text-rose-200'

  return (
    <span className={`inline-block rounded-full border px-3 py-1 font-mono text-xs ${colors}`}>{children}</span>
  )
}
