import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 40% 10%;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 1rem;
  }
`
export const FotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28rem;
  height: 28rem;

  background-color: ${(props) => props.theme['gray-700']};
  box-shadow: 20px 25px 15px -3px rgba(0, 0, 0, 0.1);
`
export const ImagemPrincipal = styled.img`
  width: 30rem;

  @media (max-width: 768px) {
    width: 20rem;
    margin-top: 1rem;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;

  h3 {
    font-size: 2rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: ${(props) => props.theme['purple-600']};
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: auto;
    margin: 2rem;
    padding: 0.5rem;

    h3 {
      font-size: 1.4rem;
      line-height: 1.7;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: ${(props) => props.theme['purple-600']};
    }
  }
`

export const Text = styled.p`
  width: 15.4rem;
  height: 3rem;
  margin: 0 0 0 10rem;
  margin-top: -2.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  background: ${(props) => props.theme['green-500']};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['green-500']};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin: 0.5rem;
    margin-top: 0rem;
    font-size: 1.4rem;
    font-weight: 700;
    width: 100%;
  }
`

export const SocialLink = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5rem;
  color: ${(props) => props.theme['green-700']};

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
