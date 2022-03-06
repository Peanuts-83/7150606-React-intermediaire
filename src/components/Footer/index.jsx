import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/index'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`

const NightModeBtn = styled.button`
    background-color: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: ${colors.secondary};
`


function Footer() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <FooterContainer>
            <NightModeBtn onClick={() => toggleTheme()}>Changer de mode {theme === 'light' ? '☀️' : '🌙'}  </NightModeBtn>
        </FooterContainer>
    )
}

export default Footer