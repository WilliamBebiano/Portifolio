import { NavLink } from 'react-router-dom'
import willLogo from '../../assets/WillLogo.svg'
import { HeaderContainer, ImagemLogo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <ImagemLogo src={willLogo} alt="" />
      <nav>
        <NavLink to={'/'} title="Home">
          Home
        </NavLink>
        <NavLink to={'/projects'} title="Projects">
          Projects
        </NavLink>
        <NavLink to={'/contacts'} title="Contacts">
          Contact
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
