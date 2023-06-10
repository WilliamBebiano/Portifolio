import { Cards } from '../../components/Cards'
import { ProjectsContainner, TextTitle } from './styles'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export function Projects() {
  const handleCarouselChange = (index: number) => {
    console.log('Índice alterado:', index)
  }

  const handleItemClick = (index: number) => {
    console.log('Item clicado:', index)
  }

  const handleThumbClick = (index: number) => {
    console.log('Miniatura clicada:', index)
  }

  return (
    <>
      <TextTitle>Projects</TextTitle>
      <ProjectsContainner>
        <Carousel
          showArrows={true}
          onChange={(index) => handleCarouselChange(index)}
          onClickItem={(index) => handleItemClick(index)}
          onClickThumb={(index) => handleThumbClick(index)}
          width={'70rem'}
          centerMode={true}
          centerSlidePercentage={50}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          stopOnHover={true}
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Carousel>
      </ProjectsContainner>
    </>
  )
}
