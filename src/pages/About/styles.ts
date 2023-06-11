import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const AboutContainner = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    width: auto;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  text-align: justify;

  h1 {
    color: ${(props) => props.theme['purple-500']};
    font-size: 3rem;
  }

  h2 {
    font-size: 1.5rem;
    text-align: justify;
  }
  p {
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
  -webkit-box-shadow: 9px 10px 24px 16px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 10px 24px 16px rgba(0, 0, 0, 0.75);
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
    font-size: 1rem;
  }
`
export const ButtonGitHub = styled(ButtonBase)``

export const ButtonHireMe = styled(ButtonBase)`
  background: ${(props) => props.theme['purple-700']};

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }

  &:active {
    background-color: ${(props) => props.theme['purple-400']};
  }
`
export const ColorNav = styled(NavLink)`
  display: flex;
  gap: 0.875rem;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-100']};
  text-decoration: none;
`

export const ButtonWrapper = styled.div`
  display: flex;
`
