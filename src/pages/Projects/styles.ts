import styled from 'styled-components'

export const ProjectsContainner = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  overflow-y: hidden;

  @media (max-width: 768px) {
    flex: 1;
    gap: 1rem;
  }
`
export const TextTitle = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme['purple-400']};
`
export const CardWrapper = styled.div`
  flex: 1;
`
