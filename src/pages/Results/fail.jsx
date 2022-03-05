import styled from 'styled-components'
import colors from '../../utils/style/colors'
import dommage from '../../assets/?'

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  border-radius: 10px;
  background: ${colors.backgroundLight};
`
const StCentered = styled.div`
  text-align: center;
  padding: 5% 20%;
  * {
    margin-bottom: 60px;
  }
`
const StLeft = styled.div`
  padding: 0 20%;
  p {
    color: ${colors.secondary};
    font-weight: 300;
    margin-bottom: 40px;
  }
  strong {
    color: ${colors.primary};
    font-weight: 400;
    font-size: 18px;
  }
`

function Results({ StyledLink }) {
  return (
    <StContainer>
      <StCentered>
        <h1>
          Dommage...
        </h1>
        <img />
        <p>Il semblerait que vous n'ayez beoin d'aucune compétence</p>
      </StCentered>
    </StContainer>
  )
}

export default Results
