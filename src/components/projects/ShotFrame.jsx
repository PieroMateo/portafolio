import { Link } from 'react-router-dom'
import BrowserFrame from '../ui/BrowserFrame'

// Captura recortada a 16:9 dentro del marco de ventana, enlazada al caso completo.
export default function ShotFrame({ shot, slug, className = '', imageProps = {}, ...props }) {
  return (
    <Link to={`/proyectos/${slug}`} data-cursor="view" className={`block ${className}`} {...props}>
      <BrowserFrame url={shot.url} className="h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            className="size-full object-cover object-top"
            {...imageProps}
          />
        </div>
      </BrowserFrame>
    </Link>
  )
}
