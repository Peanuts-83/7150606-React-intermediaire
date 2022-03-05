import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import colors from './utils/style/colors'
import './utils/style/app.css'


const GlobalStyle = createGlobalStyle`
    * {
      font-family: Ubuntu, Helvetica, sans-serif;
      background: 'white';
    }
    a {
      color: #444;
      &:hover {
        color: black;
      }
    }
`
const StyledLink = styled(Link)`
  padding: 15px;
  margin-right: 30px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: ${colors.hover};
  }
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header StyledLink={StyledLink} />
      <Switch>
        <Route exact path="/">
          <Home StyledLink={StyledLink} />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/results">
          <Results StyledLink={StyledLink}  />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
