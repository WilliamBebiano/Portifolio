import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 10rem;
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
