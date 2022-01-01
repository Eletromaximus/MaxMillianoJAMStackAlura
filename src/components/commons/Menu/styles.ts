import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'
import { TextStyleVariants } from '../../foundation/Text'

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 60px;
  opacity: 0.8;
  background-color: #C4C4C4;
  color: #000000;
  min-width: 360px;  

  a + a {
    margin-left: 50px;
  }

  ${breakpointsMedia({
    xs: css`
      position: relative;
      flex-wrap: wrap;
    `,
    sm: css`
      position: absolute;
      flex-wrap: nowrap;
    `,
    md: css`
      flex-wrap: nowrap;
      a {
        ${TextStyleVariants.title}
      }
    `
  })}

`
export const LeftSide = styled.div`
  order: 1;

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
  order: 2;

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
  order: 3;

  ${breakpointsMedia({
    xs: css`
    padding-right: 20px;
  `,
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
