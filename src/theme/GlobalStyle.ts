import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { ThemeType } from '.'

type ThemeProps = {
  theme: ThemeType
}
// color: ${({ theme }) => theme.colors.mode.light.text};
// background: ${({ theme }) => theme.colors.mode.light.background};
const GlobalStyle = createGlobalStyle<ThemeProps>`
  * {
    box-sizing: border-box;
  }
  /* Full height layout */
  ${normalize}
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colors.mode.light.text};
    background: ${({ theme }) => theme.colors.mode.light.background};
  }
  
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
export default GlobalStyle
