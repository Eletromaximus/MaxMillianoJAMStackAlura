import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    text-decoration: none;
  }
  
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100vw;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
export default GlobalStyle
