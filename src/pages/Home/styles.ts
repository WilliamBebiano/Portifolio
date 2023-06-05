import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 40% 10%;
  height: 85vh;
  justify-content: center;
  align-items: center;
`
export const FotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 9rem;
  margin-bottom: -15rem;
  position: relative;
  height: 10vh;
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28rem;
  height: 28rem;

  border-radius: 360px;
  background-color: ${(props) => props.theme['gray-700']};
  box-shadow: 20px 25px 15px -3px rgba(0, 0, 0, 0.1);
`
export const ImagemPrincipal = styled(motion.img)`
  margin-top: 4.8rem;
  width: 25rem;
  height: 80%;
  border-radius: 360px;
`
export const ImagemReact = styled(motion.img)`
  width: 7rem;
  padding: 0.5rem;
  border-radius: 360px;
`
export const ImagemNode = styled(motion.img)`
  width: 5rem;
  border-radius: 360px;
`
export const ImagemTS = styled(motion.img)`
  width: 8rem;
  border-radius: 360px;
`
export const ImagemJs = styled(motion.img)`
  width: 6rem;
  border-radius: 360px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;

  h3 {
    font-size: 2rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: ${(props) => props.theme['purple-600']};
  }
`

export const Text = styled.p`
  width: 15.4rem;
  height: 3rem;
  margin: 0 0 0 10rem;
  margin-top: -2.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  background: ${(props) => props.theme['green-500']};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['green-500']};
`

export const SocialLink = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5rem;
  color: ${(props) => props.theme['green-700']};
`
