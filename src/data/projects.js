/*
 * Cada captura con `pending: true` es un espacio reservado:
 * basta con poner la imagen en public/images, completar `src` y quitar `pending`.
 */
export const projects = [
  {
    slug: 'polizas',
    number: '01',
    name: 'Sistema de Gestión de Pólizas Vehiculares',
    type: 'Aplicación de escritorio · .NET',
    stack: ['C#', '.NET', 'SQL Server', 'Arquitectura de 3 capas'],
    summary:
      'Gestión de autos, clientes y pólizas para la aseguradora ficticia "Seguros Avanza". Arquitectura de 3 capas (presentación, lógica de negocio y acceso a datos) y base de datos en SQL Server con procedimientos almacenados, vistas y restricciones de integridad.',
    problem:
      'Una aseguradora necesita registrar autos, clientes y pólizas en un mismo sistema, sin datos duplicados y sin pólizas que apunten a vehículos o clientes que no existen.',
    contributions: [
      'Diseñé la base de datos en SQL Server con procedimientos almacenados, vistas y restricciones de integridad.',
      'Separé la aplicación en tres capas: presentación, lógica de negocio y acceso a datos con ADO.NET.',
      'Construí los formularios de mantenimiento para registrar, actualizar y consultar autos, clientes y pólizas.',
    ],
    repo: 'https://github.com/PieroMateo/Seguros_Auto',
    shots: [
      {
        src: '/images/polizas-menu.webp',
        alt: 'Menú principal del sistema de pólizas de Seguros Avanza',
        caption: 'Menú principal',
        url: 'seguros-avanza/menu',
      },
      {
        src: '/images/polizas-mant.webp',
        alt: 'Formulario de mantenimiento y actualización de autos',
        caption: 'Mantenimiento y actualización de autos',
        url: 'seguros-avanza/autos',
      },
    ],
  },
  {
    slug: 'microservicios',
    number: '02',
    name: 'Microservicios RESTful de Seguridad y Accesos',
    type: 'Backend · API REST',
    stack: ['Java', 'Spring Boot', 'JPA', 'SQL Server', 'Maven'],
    summary:
      'Servicios backend para la gestión de usuarios, roles y permisos con Spring Boot y arquitectura multicapa (controller, service, repository, entity). Endpoints REST probados en Postman, validando solicitudes, respuestas HTTP y el comportamiento de los servicios.',
    problem:
      'Un sistema necesita controlar quién entra y qué puede hacer cada persona: usuarios, roles y permisos expuestos como servicios independientes.',
    contributions: [
      'Construí los servicios REST con Spring Boot, separados en capas controller, service, repository y entity.',
      'Mapeé las entidades con JPA sobre SQL Server y gestioné las dependencias con Maven.',
      'Probé cada endpoint en Postman, validando solicitudes, códigos HTTP y respuestas JSON.',
    ],
    repo: 'https://github.com/PieroMateo/Hasamy-microservices-springboot',
    shots: [
      {
        src: '/images/ms-codigo.webp',
        alt: 'Estructura del proyecto y ClienteController abiertos en IntelliJ IDEA',
        caption: 'Estructura del proyecto y ClienteController en IntelliJ',
        url: 'intellij/ClienteController.java',
      },
      {
        src: null,
        pending: true,
        alt: 'Petición POST en Postman con respuesta 201 Created',
        caption: 'POST con respuesta 201 en Postman',
        url: 'postman/POST',
      },
      {
        src: null,
        pending: true,
        alt: 'Petición GET en Postman con su respuesta JSON',
        caption: 'GET con su respuesta JSON en Postman',
        url: 'postman/GET',
      },
    ],
  },
  {
    slug: 'power-bi',
    number: '03',
    name: 'Dashboards de Ventas en Power BI',
    type: 'Datos · Business intelligence',
    stack: ['Power BI', 'Power Query', 'Modelado de datos', 'OLAP'],
    summary:
      'Reportes interactivos con filtros por año y por rango de fechas, que muestran las ventas por país del cliente (1996–1998) y el desempeño 2017 por fabricante, segmento y estado, con mapas, matrices y gráficos combinados.',
    problem:
      'Los datos de ventas existían, pero no había una forma rápida de compararlos por país, año, fabricante o segmento.',
    contributions: [
      'Limpié y transformé los datos de origen con Power Query.',
      'Armé el modelo de datos y los cubos OLAP para analizar las ventas desde varias dimensiones.',
      'Diseñé los reportes con filtros por año y rango de fechas, mapas, matrices y gráficos combinados.',
    ],
    repo: 'https://github.com/PieroMateo/Proyecto-DIAH-Power-BI',
    shots: [
      {
        src: '/images/bi-ventas.webp',
        alt: 'Dashboard de ventas por país del cliente entre 1996 y 1998',
        caption: 'Ventas por país del cliente (1996–1998)',
        url: 'powerbi/ventas-por-pais',
      },
      {
        src: '/images/bi-performance.webp',
        alt: 'Dashboard de desempeño 2017 por fabricante, segmento y estado',
        caption: 'Desempeño 2017 por fabricante, segmento y estado',
        url: 'powerbi/desempeno-2017',
      },
    ],
  },
]

export const readyShots = (project) => project.shots.filter((shot) => !shot.pending)

export const getProject = (slug) => projects.find((project) => project.slug === slug)
