import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StH1 = styled.h2`
  text-decoration: underline ${colors.primary} 2px;
  text-align: center;
  padding: 7%;
`
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10%;
`
const StDivBtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px 0;
`
const StBtn = styled.button`
  padding: 5% 15%;
  margin: 3%;
  background: ${colors.backgroundLight};
  border: transparent 2px solid;
  border-radius: 20px;
  font-size: 24px;
  color: dark-grey;
  &:hover {
    cursor: pointer;
    border: ${colors.primary} 2px solid;
  }
`
const StLink = styled(Link)`
  padding: 0 5%;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  return (
    <StContainer>
      <StContainer>
        <div>
          <StH1>Question {questionNumber}</StH1>
          <p>
            Votre application doit-elle impérativement apparaître en premier
            dans les résultats de recherche ?
          </p>
        </div>
        <StDivBtn>
          <StBtn>Oui</StBtn>
          <StBtn>Non</StBtn>
        </StDivBtn>
      </StContainer>
      <StDivBtn>
        <StLink to={`/survey/${prevQuestionNumber}`}>Précédente</StLink>
        {questionNumberInt === 10 ? (
          <StLink to="/results">Résultats</StLink>
        ) : (
          <StLink to={`/survey/${nextQuestionNumber}`}>Suivant</StLink>
        )}
      </StDivBtn>
    </StContainer>
  )
}

export default Survey
