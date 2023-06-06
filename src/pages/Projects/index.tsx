import { Cards } from '../../components/Cards'
import { ProjectsContainner, ProjectsWrapper, TextTitle } from './styles'

export function Projects() {
  return (
    <ProjectsContainner>
      <TextTitle>Projects</TextTitle>
      <ProjectsWrapper>
        <Cards />
        <Cards />
      </ProjectsWrapper>
    </ProjectsContainner>
  )
}
