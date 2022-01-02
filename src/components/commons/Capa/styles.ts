import styled, { css } from 'styled-components'
import typographyVariants from '../../../theme/typographyVariants'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

const CapaStyle = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  height: 846px;
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  background-size: 'contain';

  ${breakpointsMedia({
    xs: css`
      background: linear-gradient(
        rgba(0, 0, 0, 0.6), 
        rgba(0, 0, 0, 0.6)
      ), url('/citymini.png');
      background-repeat: no-repeat;
    `,
    sm: css`
      background: linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ), url('/city.png');

    `
  })}
  
  span {
    weight: 400;
    font-family: Poppins, sans-serif;
    ${breakpointsMedia({
      xs: css`
        font-size: 48px;`,
      sm: css`
        font-size: 48px;
      `,
      md: css`
        font-size: 72px;
      `
    })}
    weight: 400;
    font-family: Poppins, sans-serif;
    font-size: 72px;
  }

  span:nth-child(3) {
    font-size: 42px;
  }

  a {
    ${breakpointsMedia({
    xs: css`
        font-size: ${typographyVariants.title.fontSize};
        font-weight: ${typographyVariants.title.fontWeight};
        font-size: ${typographyVariants.title.fontSize};
      `
  })}
    
  }
`

export default CapaStyle
