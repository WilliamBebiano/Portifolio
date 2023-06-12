import { GithubLogo, WhatsappLogo } from 'phosphor-react'
import BudapestImg from '../../assets/Will.jpeg'

import {
  AboutContainner,
  BootcampLink,
  ButtonGitHub,
  ButtonHireMe,
  ButtonWrapper,
  ColorNav,
  Imagem,
  TextWithImageCard,
  TextWrapper,
} from './styles'

export function About() {
  return (
    <AboutContainner>
      <TextWithImageCard>
        <Imagem src={BudapestImg} alt="imagem" />
      </TextWithImageCard>
      <TextWrapper>
        <h1>About.</h1>
        <h2>
          I´m a Front-End Developer based in Bad Neuenahr Ahrweiler, Germany
        </h2>
        <p>
          Since 2021, I've been on a mission to transform myself into a
          Front-End Developer extraordinaire. I even survived a FullStack
          Bootcamp{' '}
          <BootcampLink to={'https://rodolfomori.com.br/devclub-n1/'}>
            DevClub
          </BootcampLink>{' '}
          and I'm now hooked on the{' '}
          <BootcampLink to={'https://www.rocketseat.com.br/'}>
            Rocket Seat
          </BootcampLink>{' '}
          Ignite program, geeking out over TypeScript, React, Next.js, Node.js,
          Elixir, and React Native. This is your chance to Hire me!
        </p>
        <ButtonWrapper>
          <ButtonGitHub>
            <ColorNav
              to="https://github.com/WilliamBebiano"
              title="GitHub/WilliamBebiano"
            >
              See my Code <GithubLogo size={24} />
            </ColorNav>
          </ButtonGitHub>
          <ButtonHireMe>
            <ColorNav to={'https://bit.ly/3J955Cr'} title="Contacts">
              <WhatsappLogo size={24} />
              Hire me!
            </ColorNav>{' '}
          </ButtonHireMe>
        </ButtonWrapper>
      </TextWrapper>
    </AboutContainner>
  )
}
