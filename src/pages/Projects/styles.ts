import styled from 'styled-components'

export const ProjectsContainner = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  overflow-y: hidden;
`
export const TextTitle = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme['purple-400']};
`
