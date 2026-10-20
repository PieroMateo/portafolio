export const profile = {
  fullName: 'Piero Mateo Rosado',
  brand: 'PM.',
  heroName: ['Piero', 'Mateo'],
  age: 24,
  role: 'Desarrollador full stack en formación',
  tagline: 'Desarrollador full stack · ISIL',
  location: 'Lima — PE',
  availability: 'Disponible para prácticas',

  email: 'pieromateo170502@gmail.com',
  github: 'https://github.com/PieroMateo',
  linkedin: 'https://www.linkedin.com/in/pieromateo1705',
  cv: '/cv-piero-mateo.pdf',

  photos: {
    color: {
      src: '/images/piero-cutout.webp',
      alt: 'Piero Mateo sonriendo, con camisa celeste de manga corta',
    },
    bw: {
      src: '/images/piero-bn.webp',
      alt: 'Piero Mateo en blanco y negro, con camisa de manga corta',
    },
  },

  heroText:
    'Desarrollador full stack en formación, último ciclo de Ingeniería de Software en ISIL. Construyo APIs con Java y .NET, interfaces con React y dashboards en Power BI.',

  contactText: 'Busco prácticas de desarrollo full stack en Lima. Si tienes un puesto o un proyecto, escríbeme.',

  aboutWord: 'dev.',
  aboutText:
    'Tengo 24 años y estoy en el último ciclo de Ingeniería de Software en ISIL. Me muevo en todo el ciclo: base de datos en SQL Server, APIs con Spring Boot y .NET, interfaces en React y reportes en Power BI.',

  // `count` marca los valores que se animan como contador
  aboutFacts: [
    { label: 'Edad', value: '24', count: 24 },
    { label: 'En ISIL', value: '2023–26' },
    { label: 'Egreso', value: 'dic. 2026' },
  ],

  timeline: [
    {
      date: '2023',
      title: 'Ingreso a ISIL',
      detail: 'Ingeniería de Software en el Instituto San Ignacio de Loyola.',
    },
    {
      date: 'Jul. 2025',
      title: 'Certificado modular',
      highlight: { count: 864, unit: 'h' },
      detail:
        'Módulo "Tecnologías de Desarrollo de Software", del programa "Desarrollo de Sistemas de Información". Del 3 de abril al 26 de julio de 2025, 41 créditos.',
      proof: { href: '/images/certificados/cert-isil.webp', label: 'Ver certificado' },
    },
    {
      date: 'Jun. 2026',
      title: '1er Tech Challenge Lozamora',
      detail:
        'Grupo Lozamora, 5 de junio de 2026. Reto de innovación para resolver una problemática real del área de Call Center.',
      proof: { href: '/images/certificados/diploma-lozamora.webp', label: 'Ver diploma' },
    },
    {
      date: 'Dic. 2026',
      title: 'Egreso',
      detail: 'Termino el último ciclo de Ingeniería de Software.',
    },
  ],
}

export const navLinks = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'stack', label: 'Stack' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

export const sectionLabels = {
  intro: '01 / Intro',
  about: '02 / Sobre mí',
  stack: '03 / Stack',
  projects: '04 / Proyectos',
  contact: '05 / Contacto',
}
