import { InstagramLogo, LinkedinLogo, GithubLogo } from 'phosphor-react'
import homeFoto from '../../assets/home.svg'

import {
  FotoWrapper,
  HomeContainer,
  ImagemPrincipal,
  SocialLink,
  TextWrapper,
  Text,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <HomeContainer>
      <FotoWrapper>
        <ImagemPrincipal src={homeFoto} alt="" />
      </FotoWrapper>
      <TextWrapper>
        <h3>Hi, my name is</h3>
        <h1> William Bebiano </h1>
        <h3>and I am a</h3>
        <Text>Front-End Developer.</Text>
      </TextWrapper>
      <div>
        <SocialLink>
          <NavLink
            to="https://www.linkedin.com/in/william-bebiano/"
            title="LinkedIn/WilliamBebiano"
          >
            <LinkedinLogo size={60} color="#00875F" />
          </NavLink>
          <NavLink
            to="https://github.com/WilliamBebiano"
            title="GitHub/WilliamBebiano"
          >
            <GithubLogo size={60} color="#00875F" />
          </NavLink>
          <NavLink
            to="https://instagram.com/williambebiano?igshid=YmMyMTA2M2Y="
            title="Instagram/WilliamBebiano"
          >
            <InstagramLogo size={60} color="#00875F" />
          </NavLink>
        </SocialLink>
      </div>
    </HomeContainer>
  )
}
