import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1.5rem;

    a {
      width: 5rem;
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
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      gap: 0.1rem;
    }
    a {
      width: 4rem;
      height: 3rem;
      font-size: 0.875rem;
      gap: 0.2;
    }
  }
`
export const ImagemLogo = styled.img`
  width: 2rem;
  color: ${(props) => props.theme['gray-100']};
`
