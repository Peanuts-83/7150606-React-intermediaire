import homeIllustration from '../../assets/home-illustration.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
  border-radius: 10px;
  background: ${colors.backgroundLight};
`
const StText = styled.div`
  margin: 50px 70px;
  width: 50%;
  font-size: 1.8em;
  line-height: 300%;
`
const StImg = styled.div`
  padding: 30px;
`

function Home({StyledLink}) {
  return (
    <StContainer>
      <StText>
        <h1>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </h1>
        <StyledLink to="survey/1" $isFullLink>Faire le test</StyledLink>
      </StText>
      <StImg>
        <img src={homeIllustration} alt="Home illustration" />
      </StImg>
    </StContainer>
  )
}

export default Home
