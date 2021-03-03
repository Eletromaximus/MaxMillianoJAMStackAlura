import styled, { css } from 'styled-components'
import typographyVariants from '../../../components/theme/typographyVariants'
import breakpointsMedia from '../../../components/theme/utils/breakpointsMedia'

const CapaStyle = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
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
