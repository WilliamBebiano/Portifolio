import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 80rem;
  height: 100vh;
  margin: 0 auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
