// Marco de ventana para las capturas: barra con tres puntos y una "URL".
export default function BrowserFrame({ url, children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-plum-700 bg-plum-900 ${className}`}>
      <div className="flex h-9 items-center gap-3 border-b border-plum-700 px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-plum-500" />
          <span className="size-2.5 rounded-full bg-plum-500" />
          <span className="size-2.5 rounded-full bg-plum-500" />
        </div>
        <p className="truncate rounded-full bg-plum-950 px-3 py-0.5 font-mono text-[11px] text-rose-200">{url}</p>
      </div>
      {children}
    </div>
  )
}
