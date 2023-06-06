import styled from 'styled-components'

export const ProjectsContainner = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 1rem;
`
export const TextTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme['purple-300']};
`
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`
