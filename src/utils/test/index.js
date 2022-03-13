import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider, SurveyProvider } from '../../utils/context'
import { MemoryRouter } from 'react-router-dom'

function Wrapper({ children }) {
    return (
        <MemoryRouter>
            <SurveyProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </SurveyProvider>
        </MemoryRouter>
    )
}

export function render(ui) {
    rtlRender(ui, { wrapper: Wrapper })
}