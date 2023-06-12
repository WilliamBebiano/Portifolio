import { Cards } from '../../components/Cards'
import {
  CardWrapper,
  HeaderProjects,
  ProjectsContainner,
  TextTitle,
} from './styles'

import styles from './styles.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useEffect, useState } from 'react'

import DudasImagem from '../../assets/dudasProject.svg'
import TodoImagem from '../../assets/Todo.svg'
import NlwSpace from '../../assets/NLWSpaceTime.svg'
import Timer from '../../assets/Timer.svg'
import Feed from '../../assets/Feed.svg'
import { Carousel } from 'react-responsive-carousel'

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

  const CardShow = [
    {
      image: DudasImagem,
      title: 'Dudas Lanches (Snack Web Site)',
      description:
        'Dudas Lanches is a full-stack Snack Web Site built with React and Node. It offers a seamless user experience for browsing and ordering delicious snacks. With its robust backend and responsive frontend, Dudas Lanches provides a delightful online snack ordering experience.',
      url: 'https://github.com/WilliamBebiano/dudas-lanches-interface',
    },
    {
      image: Feed,
      title: 'Ignite feed',
      description:
        'Publications Feed project developed using React, creating a modern and responsive interface. Users can share personalized content and interact with likes, comments, and shares.',
      url: 'https://ignite-feed-ts-alpha.vercel.app/',
    },
    {
      image: TodoImagem,
      title: 'ToDo List',
      description:
        'Todo List project using React, allowing users to create, manage, and mark completed tasks. The interface is intuitive and responsive for an efficient and organized experience.',
      url: 'https://to-do-list-tau-flame.vercel.app/',
    },
    {
      image: NlwSpace,
      title: 'NLW Space Time',
      description:
        'Was an amazing learning experience, covering technologies like Next.js, React, React Native, and Node.js. The event provided an opportunity to explore building web, mobile, and server applications with these powerful tools.',
      url: 'https://github.com/WilliamBebiano/nlw-web',
    },
    {
      image: Timer,
      title: 'Timer',
      description:
        'The Timer project is a Pomodoro-style application that allows users to manage their activities and track ongoing, completed, and paused tasks. It provides an efficient way to stay organized and focused on productivity.',
      url: 'https://ignite-timer-seven-green.vercel.app/',
    },
  ]
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

      <ProjectsContainner>
        {typeof window !== 'undefined' && (
          <Carousel
            className={styles.carousel}
            showArrows={true}
            onChange={(index) => handleCarouselChange(index)}
            onClickItem={(index) => handleItemClick(index)}
            onClickThumb={(index) => handleThumbClick(index)}
            width={`${windowWidth >= 780 ? '70rem' : '80vw'}`}
            centerMode={true}
            centerSlidePercentage={centerSlidePercentage}
            stopOnHover={true}
            showThumbs={!(windowWidth >= 780)}
            showStatus={false}
            showIndicators={true}
            swipeable={!(windowWidth >= 780)}
          >
            {CardShow.map((card, index) => (
              <CardWrapper key={index}>
                <Cards
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  url={card.url}
                />
              </CardWrapper>
            ))}
          </Carousel>
        )}
      </ProjectsContainner>
    </>
  )
}
