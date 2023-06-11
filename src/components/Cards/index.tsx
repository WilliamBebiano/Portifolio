import { NavLink } from 'react-router-dom'

import {
  CardContainer,
  CardWrapper,
  Divisor,
  Footer,
  Image,
  TextCard,
  TextTitle,
} from './styles'
import { Button } from '../Button'

interface CardsProps {
  image: string
  title: string
  description: string
  url: string
}

export function Cards(props: CardsProps) {
  const { image, title, description, url } = props

  return (
    <CardContainer>
      <CardWrapper>
        <TextTitle>{title}</TextTitle>
        <Image src={image} alt="Green double couch with wooden legs" />
        <TextCard>
          <p>{description}</p>
        </TextCard>
      </CardWrapper>
      <Divisor />
      <Footer>
        <NavLink to={url}>
          <Button />
        </NavLink>
      </Footer>
    </CardContainer>
  )
}
