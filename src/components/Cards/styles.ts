import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  min-height: 30rem;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 19px 27px 14px 0px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;

  background: ${(props) => props.theme['gray-600']};
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  max-width: 28rem;
  max-height: 16rem;
  border-radius: 8px;
  margin: 1rem;
`
export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    color: ${(props) => props.theme['purple-400']};
    text-align: center;
    line-height: normal;
  }

  p {
    color: ${(props) => props.theme['green-300']};
    margin-bottom: 0.5rem;
    min-height: 5rem;
    text-align: center;
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
`
