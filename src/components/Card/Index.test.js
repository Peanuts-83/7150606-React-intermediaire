import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import { ThemeProvider } from '../../utils/context'
import Card from './'
import photo from '../../assets/profile.png'


describe('Test Card', () => {
    it('should render right picture & name', () => {
        const index = 'fakeIndex'
        const profile = {
            name: 'Roberto',
            job: 'Chief officer',
            picture: photo
        }

        render(
            <Router>
                <ThemeProvider>
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.job}
                        title={profile.name}
                        picture={profile.picture}
                    />
                </ThemeProvider>
            </Router>
        )

        const image = screen.getByAltText('freelance')
        expect(image.src).toEqual('http://localhost/' + profile.picture)
        expect(screen.getByText(profile.name)).toBeTruthy()
    })

    it('should switch ⭐️ around title when clicked', () => {
        const index = 'fakeIndex'
        const profile = {
            name: 'Roberto',
            job: 'Chief officer',
            picture: photo
        }

        render(
            <Router>
                <ThemeProvider>
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.job}
                        title={profile.name}
                        picture={profile.picture}
                    />
                </ThemeProvider>
            </Router>
        )

        const image = screen.getByAltText('freelance')
        const card = image.closest('div')
        const title = screen.getByText('Roberto')

        fireEvent.click(card)
        expect(title).toHaveTextContent('⭐️ Roberto ⭐️')
        fireEvent.click(card)
        expect(title).toHaveTextContent('Roberto')
    })
})