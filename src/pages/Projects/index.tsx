import { Cards } from '../../components/Cards'
import { ProjectsContainner, TextTitle } from './styles'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export function Projects() {
  const handleCarouselChange = (index) => {
    console.log('Índice alterado:', index)
  }

  const handleItemClick = (index, item) => {
    console.log('Item clicado:', index, item)
  }

  const handleThumbClick = (index, item) => {
    console.log('Miniatura clicada:', index, item)
  }

  return (
    <>
      <TextTitle>Projects</TextTitle>
      <ProjectsContainner>
        <Carousel
          showArrows={true}
          onChange={(index) => handleCarouselChange(index)}
          onClickItem={(index, item) => handleItemClick(index, item)}
          onClickThumb={(index, item) => handleThumbClick(index, item)}
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
