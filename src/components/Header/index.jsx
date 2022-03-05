import styled from 'styled-components'
// import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const StyledLogo = styled.img`
  width: auto;
  padding: 20px;
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header({StyledLink}) {
  return (
    <StyledNav>
      <StyledLogo to="/" src={logo} alt="Blabla logo" />
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </StyledNav>
  )
}

export default Header
