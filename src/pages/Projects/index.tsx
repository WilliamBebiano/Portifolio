import { Cards } from '../../components/Cards'
import {
  CardWrapper,
  HeaderProjects,
  ProjectWrapperContainner,
  ProjectsContainner,
  TextTitle,
} from './styles'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useEffect, useState } from 'react'

export function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const handleCarouselChange = (index: number) => {
    console.log('Índice alterado:', index)
  }

  const handleItemClick = (index: number) => {
    console.log('Item clicado:', index)
  }

  const handleThumbClick = (index: number) => {
    console.log('Miniatura clicada:', index)
  }

  const centerSlidePercentage = windowWidth <= 780 ? 102 : 50

  return (
    <>
      <HeaderProjects>
        <div>
          <TextTitle>Coffee Reacto-Fi Vibe</TextTitle>
          <p>
            Projects developed with the perfect blend of coffee, the relaxing
            lo-fi atmosphere, and the power of React!
          </p>
        </div>
      </HeaderProjects>
      <ProjectWrapperContainner>
        <ProjectsContainner>
          {typeof window !== 'undefined' && (
            <Carousel
              showArrows={true}
              onChange={(index) => handleCarouselChange(index)}
              onClickItem={(index) => handleItemClick(index)}
              onClickThumb={(index) => handleThumbClick(index)}
              width={`${windowWidth >= 780 ? '70rem' : '80vw'}`}
              centerMode={true}
              centerSlidePercentage={centerSlidePercentage}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              stopOnHover={true}
              showThumbs={!(windowWidth >= 780)}
              showStatus={false}
              showIndicators={true}
              swipeable={!(windowWidth >= 780)}
            >
              <CardWrapper>
                <Cards />
              </CardWrapper>
              <CardWrapper>
                <Cards />
              </CardWrapper>
              <CardWrapper>
                <Cards />
              </CardWrapper>
            </Carousel>
          )}
        </ProjectsContainner>
      </ProjectWrapperContainner>
    </>
  )
}
