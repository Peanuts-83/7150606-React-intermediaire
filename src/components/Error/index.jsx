import error from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  border-radius: 10px;
  background: ${colors.backgroundLight};
  p {
    font-weight: 500;
    font-size: 30px;
    padding: 3% 0;
  }
`

function Error() {
  return (
    <StContainer>
      <p>Oups...</p>
      <img src={error} alt="error" />
      <p>Il semblerait qu'il y ait un problème'</p>
    </StContainer>
  )
}

export default Error
