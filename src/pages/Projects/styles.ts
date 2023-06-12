import styled from 'styled-components'

export const ProjectsContainner = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  overflow-y: hidden;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
    justify-content: center;

    p {
      font-size: 0.875rem;
    }
  }
`
export const TextTitle = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme['purple-400']};
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`
export const CardWrapper = styled.div`
  flex: 1;
`
export const HeaderProjects = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.5rem;

    p {
      font-size: 0.875rem;
    }
  }
`
