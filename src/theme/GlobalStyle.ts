import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import breakpoints from './breakpoints';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  /* Full height layout */
  ${normalize}
  body {
    margin: 0;
    padding: 0;
    font-family: '\'Lato\', sans-serif';
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text}
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
`;
export default GlobalStyle;
