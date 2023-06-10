import BudapestImg from '../../assets/BudapestWilliam.svg'

import {
  AboutContainner,
  Imagem,
  TextWithImageCard,
  TextWrapper,
} from './styles'

export function About() {
  return (
    <AboutContainner>
      <div>
        <p>I am</p> <h1>William Bebiano</h1>
        <p>
          I am a Web-Developer with a background in Aeroespace and Automotive
          Industry.
        </p>
      </div>
      <TextWrapper>
        <TextWithImageCard>
          <p>
            {' '}
            and I have a Production Engineering graduate with over 10 years of
            experience in the automotive and aerospace industries. I recently
            relocated to Germany and currently work in logistics. However, my
            true passion lies in web development. Since 2021, I've been studying
            and transitioning my career to become a Web Developer. I completed a
            FullStack Bootcamp and continue to enhance my skills through the
            Rocket Seat Ignite program, focusing on TypeScript, React, Next.js,
            Node.js, Elixir, and React Native. I've worked on diverse projects
            using these technologies. Outside of work, I love traveling and have
            visited over 14 countries. I'm dedicated to continuous learning and
            growth as a professional. Let's connect and create innovative
            projects together."
          </p>
        </TextWithImageCard>
        <Imagem src={BudapestImg} alt="imagem" />
      </TextWrapper>
    </AboutContainner>
  )
}
