import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #C4C4C4;
  color: #000000;
  padding: 10px;
  width: 100%;

  a + a {
    margin-left: 50px;
  }

  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
    `,
    sm: css`
      flex-direction: row;
    `
    // md: css`
    //   justify-content: center;
    // `
  })}

`
export const LeftSide = styled.div`
  order: 1;
`
export const MiddleSide = styled.div`
  display: flex;
  order: 2;
  
  ${breakpointsMedia({
    xs: css`
      width: auto;
      padding-top: 15px;
    `,
    sm: css`
      width: 170px;
      justify-content: center;
      `,
    md: css`
      width: 170px;
      justify-content: center;
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
      width: auto;
      padding-top: 15px;
    `
  })}
  
`
