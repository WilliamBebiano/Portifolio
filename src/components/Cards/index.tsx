import { NavLink } from 'react-router-dom'
import webProject from '../../assets/dudasProject.svg'
import {
  CardContainer,
  CardWrapper,
  Divisor,
  Footer,
  Image,
  TextCard,
} from './styles'
import { Button } from '../Button'

export function Cards() {
  return (
    <CardContainer>
      <CardWrapper>
        <Image src={webProject} alt="Green double couch with wooden legs" />
        <TextCard>
          <span>Dudas Lanches (Snack Web Site)</span>
          <p>Web Application development with React </p>
        </TextCard>
      </CardWrapper>
      <Divisor />
      <Footer>
        <NavLink to={'/'}>
          <Button />
        </NavLink>
      </Footer>
    </CardContainer>
  )
}
