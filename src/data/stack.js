import { SiDotnet, SiReact, SiPython, SiGit } from 'react-icons/si'
// Simple Icons retiró Java y SQL Server por pedido de sus marcas: se usan los de Devicons.
import { DiJava, DiMsqlServer } from 'react-icons/di'
import PowerBiIcon from '../components/ui/PowerBiIcon'

export const stack = [
  {
    name: 'Java',
    category: 'Backend',
    icon: DiJava,
    skills: ['Spring Boot', 'APIs REST', 'HTTP/JSON', 'JPA', 'Maven', 'Microservicios'],
    usedIn: 'Microservicios de Seguridad',
  },
  {
    name: 'C# / .NET',
    category: 'Backend · Escritorio',
    icon: SiDotnet,
    skills: ['Arquitectura de 3 capas', 'CRUD', 'ADO.NET'],
    usedIn: 'Pólizas Vehiculares',
  },
  {
    name: 'SQL Server',
    category: 'Base de datos',
    icon: DiMsqlServer,
    skills: ['T-SQL', 'Procedimientos almacenados', 'Vistas', 'Restricciones', 'MySQL'],
    usedIn: 'Todos mis proyectos',
  },
  {
    name: 'Power BI',
    category: 'Datos',
    icon: PowerBiIcon,
    skills: ['Power Query', 'Modelado', 'Filtros y segmentación', 'Cubos OLAP'],
    usedIn: 'Dashboards de ventas',
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: SiReact,
    skills: ['Hooks', 'React Router', 'Tailwind CSS', 'HTML5/CSS3'],
    usedIn: 'Este portafolio',
  },
  {
    name: 'Python',
    category: 'Backend',
    icon: SiPython,
    skills: ['FastAPI', 'APIs REST'],
    usedIn: 'En aprendizaje',
  },
  {
    name: 'Herramientas',
    category: 'Flujo de trabajo',
    icon: SiGit,
    skills: ['Git', 'GitHub', 'Postman', 'Maven', 'IntelliJ IDEA', 'Visual Studio'],
    usedIn: 'Día a día',
  },
]
