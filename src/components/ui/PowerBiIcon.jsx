// Simple Icons no incluye Power BI, así que se dibuja como SVG propio.
export default function PowerBiIcon({ size = '1em', ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
      <rect x="15" y="2" width="6" height="20" rx="1.5" />
      <rect x="9" y="7" width="6" height="15" rx="1.5" opacity="0.8" />
      <rect x="3" y="12" width="6" height="10" rx="1.5" opacity="0.6" />
    </svg>
  )
}
