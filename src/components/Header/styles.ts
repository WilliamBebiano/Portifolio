import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1.5rem;

    a {
      width: 3rem;
      height: 3rem;
      font-weight: 700;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
        border-bottom: 3px solid transparent;
      }
    }
  }
`
export const ImagemLogo = styled.img`
  width: 2.5rem;
  color: ${(props) => props.theme['gray-100']};
`
