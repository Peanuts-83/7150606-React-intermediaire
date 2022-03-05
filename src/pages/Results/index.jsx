import styled from 'styled-components'
import colors from '../../utils/style/colors'

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
          Les compétences dont vous avez besoin: UX Design, frontend, backend
        </h1>
        <StyledLink to="/freelances" $isFullLink>Découvrez nos profils</StyledLink>
      </StCentered>
      <StLeft>
        <p><strong>UX Design</strong><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci ullam sapiente facilis voluptate neque! Aliquam nobis, vero ab, itaque omnis.
        </p>
        <p><strong>Frontend</strong><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci ullam sapiente liquam nobis, vero ab, itaque omnis etiam.
        </p>
        <p><strong>Backend</strong><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci ullam sapiente facilis voluptate neque! Aliquam nobis, vero ab, itaque omnis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum assumenda possimus suscipit blanditiis quo, quibusdam asperiores. Sequi saepe eveniet esse quis minus exercitationem porro nostrum sint, illo asperiores magnam doloribus.
        </p>
      </StLeft>
    </StContainer>
  )
}

export default Results
