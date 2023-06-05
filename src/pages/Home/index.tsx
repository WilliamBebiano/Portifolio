import { InstagramLogo, LinkedinLogo, GithubLogo } from 'phosphor-react'
import williamFoto from '../../assets/William-foto.svg'
import react from '../../assets/react.svg'
import node from '../../assets/node.svg'
import ts from '../../assets/ts.svg'
import js from '../../assets/js.svg'

import {
  FotoWrapper,
  HomeContainer,
  ImageWrapper,
  ImagemJs,
  ImagemNode,
  ImagemPrincipal,
  ImagemReact,
  ImagemTS,
  SocialLink,
  TextWrapper,
  Text,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <HomeContainer>
      <FotoWrapper>
        <ImageWrapper>
          <ImagemPrincipal src={williamFoto} alt="" />
        </ImageWrapper>
        <ImagemReact
          src={react}
          alt="React"
          className="icon"
          animate={{
            x: [-190],
            y: [-380],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'linear',
          }}
        />
        <ImagemNode
          src={node}
          alt="Node"
          className="icon"
          animate={{
            x: [120],
            y: [-550],
            rotate: [0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'linear',
          }}
        />
        <ImagemTS
          src={ts}
          alt="TypeScript"
          className="icon"
          animate={{
            x: [-200],
            y: [-300],
            rotate: [0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'linear',
          }}
        />
        <ImagemJs
          src={js}
          alt="TypeScript"
          className="icon"
          animate={{
            x: [200],
            y: [-600],
            rotate: [0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'linear',
          }}
        />
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
