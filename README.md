# Portafolio — Piero Mateo Rosado

Portafolio personal para postular a prácticas de desarrollo full stack. Es una sola página con un recorrido animado: al hacer scroll, las escenas se fijan en pantalla y avanzan como un video, hecho con imágenes y animación (sin archivos de video).

![Captura del inicio del portafolio](docs/captura.webp)

## Stack

| Necesidad | Herramienta |
| --- | --- |
| Base | React 19 + Vite |
| Estilos | Tailwind CSS 4 (paleta y fuentes en `@theme`, dentro de `src/index.css`) |
| Rutas | React Router (`/` y `/proyectos/:slug`) |
| Animación atada al scroll | GSAP + ScrollTrigger (`pin` y `scrub`) |
| Scroll suave | Lenis, sincronizado con ScrollTrigger |
| Micro-interacciones | Motion |
| Íconos | lucide-react y react-icons (Simple Icons y Devicons) |

## Cómo correrlo

Requiere Node 20 o superior.

```bash
npm install
npm run dev
```

Otros comandos:

- `npm run build`: genera la versión de producción en `dist/`.
- `npm run preview`: sirve esa versión en local.
- `npm run images`: convierte a WebP las imágenes PNG/JPG de `public/images`.

## Cómo está organizado

```
src/
  data/          contenido: perfil, stack y proyectos (los componentes no tienen textos escritos a mano)
  hooks/         useLenis, useReducedMotion, useMediaQuery
  lib/           configuración de GSAP, helpers de scroll y contadores
  components/
    layout/      Navbar, Footer
    ui/          Button, Chip, SectionLabel, BrowserFrame, TechCard, Reveal, Counter...
    projects/    escena de proyectos (desktop) y lista (móvil)
  sections/      Intro (Hero + About), Timeline, Stack, Projects, Contact
  pages/         Home, ProjectDetail, NotFound
```

### El recorrido de scroll

1. **Intro → Sobre mí** (`sections/Intro.jsx`): un solo escenario fijado. El fondo pasa de ciruela a crema, la foto se desliza a la izquierda y cambia de color a blanco y negro, y la biografía se revela palabra por palabra.
2. **Stack** (`sections/Stack.jsx`): la sección se fija y el scroll vertical mueve la fila de tarjetas hacia la izquierda.
3. **Proyectos** (`components/projects/ProjectsScene.jsx`): cada captura se revela de abajo hacia arriba con `clip-path`, y el texto cambia según la captura visible.
4. **Contacto**: sección normal, sin pin.

Cada animación vive dentro de `useGSAP` con `gsap.matchMedia()`, así que se limpia sola al desmontar o al cambiar de tamaño de pantalla.

### Móvil y accesibilidad

- El modo con pin y scrub solo se activa en pantallas de 768 px o más **y** sin `prefers-reduced-motion`. En Tailwind este modo es la variante `cinematic:`, y en JavaScript es `MEDIA.cinematic` (`src/lib/gsap.js`).
- En móvil cada escena es una sección normal con entradas suaves, y el stack es un carrusel deslizable.
- Con `prefers-reduced-motion` no hay Lenis, pin ni scrub: todo se ve estático.

## Contenido pendiente

- Capturas de Postman del proyecto de microservicios: los espacios ya existen en `src/data/projects.js` (marcados con `pending: true`). Basta con poner la imagen en `public/images`, completar `src` y borrar `pending`.

## Despliegue

Está preparado para Vercel. `vercel.json` redirige todas las rutas a `index.html` para que `/proyectos/:slug` funcione al recargar la página.
