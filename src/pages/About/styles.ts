import styled from 'styled-components'

export const AboutContainner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5rem;
`
export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    justify-content: flex-start;
  }
`

export const TextWithImageCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

  p {
    width: 30rem;
    padding: 0.5rem;
    text-align: justify;
    line-height: 2rem;
  }
`
export const Imagem = styled.img`
  width: 35rem;
  height: 35rem;
`
