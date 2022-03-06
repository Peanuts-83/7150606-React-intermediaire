import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState, useEffect } from 'react'
import { Loader } from '../../utils/style/Atoms'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrap = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`


function Freelances() {
  const [freelances, setFreelances] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getFreelances() {
      setLoading(true)
      try {
        const response = await fetch('http://localhost:8000/freelances')
        const  data = await response.json()
        setFreelances(data.freelancersList)
      } catch (err) {
        console.log('ERROR', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getFreelances()
  }, [])

  if (error) return <div>Oups... ya un problème!</div>

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {isLoading ? (
          <LoaderWrap>
            <Loader />
          </LoaderWrap>
        ) : (
          freelances.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              title={profile.name}
            />
          ))
        )}
      </CardsContainer>
    </div>
  )
}

export default Freelances
