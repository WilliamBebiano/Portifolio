import styled from 'styled-components'

export const AboutContainner = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  text-align: justify;

  width: 60%;

  h1 {
    color: ${(props) => props.theme['purple-500']};
    font-size: 3rem;
  }

  h2 {
    width: 30rem;
    font-size: 1.5rem;
    text-align: justify;
  }
  p {
    width: 30rem;
    padding: 0.5rem;
    text-align: justify;
    line-height: 1.7rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const TextWithImageCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`
export const Imagem = styled.img`
  width: 18rem;
  height: 35rem;
  border-radius: 8px;
`
export const ButtonBase = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 4rem;
  border: 0;
  color: ${(props) => props.theme['gray-100']};
  border-radius: 8px;
  padding: 1rem, 2.5rem;
  margin: 1rem;
  font-size: 1rem;
  line-height: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 19px 27px 14px 0px rgba(0, 0, 0, 0.1);

  background-color: ${(props) => props.theme['green-500']};

  &:hover {
    background-color: ${(props) => props.theme['green-300']};
  }

  &:active {
    background-color: ${(props) => props.theme['green-700']};
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`
export const ButtonGitHub = styled(ButtonBase)``

export const ButtonHireMe = styled(ButtonBase)`
  background: ${(props) => props.theme['purple-400']};
  color: ${(props) => props.theme['gray-800']};
`

export const ButtonWrapper = styled.div`
  display: flex;
`
