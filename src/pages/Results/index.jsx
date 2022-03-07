import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'
import { Loader, StyledLink } from '../../utils/style/Atoms'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Container = styled.div`
  margin: 0 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StH1 = styled.h1`
  span {
    color: ${colors.primary};
  }
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  h3 {
    color: ${colors.primary};
  }
`

function stringifyAnswers(answers) {
  return Object.keys(answers).reduce((prevAnswers, nextKey, i) => {
    const isFirstAnswer = i === 0
    const separator = isFirstAnswer ? '' : '&'
    return `${prevAnswers}${separator}a${i + 1}=${
      answers[nextKey] === true ? 1 : 0
    }`
  }, '')
}

function Results() {
  const { answers } = useContext(SurveyContext)
  const answersString = stringifyAnswers(answers)
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results/?${answersString}`
  )
  const resultsData = data?.resultsData
  const resultError = error

  if (resultError) {
    return <div>Oups! Quelque chose ne va pas!</div>
  }

  return (
    <Container>
      <StH1>
        Les compétences dont vous avez besoin:
        <span>
          {resultsData &&
            resultsData.map((elt, i) => {
              const sep = i === data.resultsData.length - 1 ? '' : ','
              return ` ${elt.title.replace(/^[a-z]/, (letter) =>
                letter.toUpperCase()
              )}${sep}`
            })}
        </span>
      </StH1>
      {resultsData && (
        <StyledLink to="/freelances" $isFullLink>
          Découvrez nos profils
        </StyledLink>
      )}
      { isLoading && <Loader /> }
      <Description>
        {resultsData &&
          resultsData.map((elt, i) => {
            const title = elt.title.replace(/^[a-z]/, (letter) =>
              letter.toUpperCase()
            )
            const descr = elt.description
            return (
              <div>
                <h3>{title}</h3>
                <p>{descr}</p>
              </div>
            )
          })}
      </Description>
    </Container>
  )
}

export default Results
