import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  height: 80vh;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 19px 27px 14px 0px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  margin: 2rem;

  background: ${(props) => props.theme['gray-600']};

  &:hover {
    transform: scale(1.02);
    border: 1px solid ${(props) => props.theme['gray-100']};
  }

  @media (max-width: 768px) {
    display: block;
    position: relative;
    gap: 1rem;
    width: 18rem;
    height: 80%;
    margin: 1rem;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    flex: 1;
  }
`

export const Image = styled.img`
  max-width: 28rem;
  max-height: 14rem;
  border-radius: 8px;
  margin: 1rem;

  @media (max-width: 768px) {
    flex: 1;
  }
`
export const TextTitle = styled.h1`
  color: ${(props) => props.theme['purple-400']};
  text-align: center;
  line-height: normal;
  margin: 1rem;
  font-size: large;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 18vh;
  margin: 0.5rem;
  text-align: justify;
  line-height: 1.5;

  p {
    color: ${(props) => props.theme['green-300']};
    margin-bottom: 0.5rem;
    min-height: 4rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

export const Divisor = styled.hr`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28rem;
  height: 0.5rem;
  border-top: 1px solid ${(props) => props.theme['gray-100']};
  border-bottom: transparent;
  border-left: transparent;
  border-right: transparent;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 1;
    width: 16rem;
    margin: auto;
  }
`
