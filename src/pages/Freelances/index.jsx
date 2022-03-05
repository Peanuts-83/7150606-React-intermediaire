import Card from '../../components/Card'
import styled from 'styled-components'

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  border-radius: 10px;
  background: white;
  p {
    font-size: 18px;
    font-weight: 300;
  }
`
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  justify-content: center;
  justify-items: center;
  grid-auto-rows: 350px;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 20%;
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
  {
    name: 'Jeannette Amustache',
    jobTitle: 'UX Designer',
  },
]

function Freelances() {
  return (
    <StContainer>
      <h1>Trouvez votre prestataire</h1>
      <p>Chez Shiny, nous réunissons les meilleurs profils pour vous.</p>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </StContainer>
  )
}

export default Freelances
