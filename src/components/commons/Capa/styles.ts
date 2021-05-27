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
  width: 100%;
  height: 50vh;
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
