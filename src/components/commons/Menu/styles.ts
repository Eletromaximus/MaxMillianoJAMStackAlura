import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'
import { TextStyleVariants } from '../../foundation/Text'

export const MenuWrapper = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  opacity: 0.8;
  background-color: #C4C4C4;
  color: #000000;
  font-family: 'Poppins', sans-serif;
  min-width: 480px;
  a + a {
    margin-left: 50px;
  }

  ${breakpointsMedia({
    md: css`
      a {
        ${TextStyleVariants.title}
      }
    `
  })}

`
export const LeftSide = styled.div`
  ${breakpointsMedia({
    xs: css`
      padding-left: 20px;
    `,
    sm: css`
      padding-left: 20px;
    `,
    md: css`
      padding-left: 20px;
    `,
    xl: css`
      padding-left: 80px;
    `
  })}

`
export const MiddleSide = styled.div`
  display: flex;

  ${breakpointsMedia({
    sm: css`
      width: auto;
    `,
    lg: css`
      justify-content: space-between;
      width: 511px;
    `
  })}

`
export const RightSide = styled.div`

  ${breakpointsMedia({
    sm: css`
      padding-right: 20px;
    `,
    md: css`
      padding-right: 40px;
    `,
    xl: css`
      padding-right: 100px;
    `
  })}
  
`
