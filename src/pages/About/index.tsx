import { GithubLogo } from 'phosphor-react'
import BudapestImg from '../../assets/Will.jpeg'

import {
  AboutContainner,
  ButtonGitHub,
  ButtonHireMe,
  ButtonWrapper,
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
          Bootcamp DevClub and I'm now hooked on the Rocket Seat Ignite program,
          geeking out over TypeScript, React, Next.js, Node.js, Elixir, and
          React Native.
        </p>
        <ButtonWrapper>
          <ButtonGitHub>
            See my Code <GithubLogo size={24} />
          </ButtonGitHub>
          <ButtonHireMe>Hire me</ButtonHireMe>
        </ButtonWrapper>
      </TextWrapper>
    </AboutContainner>
  )
}
