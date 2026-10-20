import useMediaQuery from '../hooks/useMediaQuery'
import { MEDIA } from '../lib/gsap'
import ProjectsScene from '../components/projects/ProjectsScene'
import ProjectsList from '../components/projects/ProjectsList'

// La escena fijada solo tiene sentido en desktop con animaciones; si no, una lista simple.
export default function Projects() {
  const cinematic = useMediaQuery(MEDIA.cinematic)

  return cinematic ? <ProjectsScene /> : <ProjectsList />
}
