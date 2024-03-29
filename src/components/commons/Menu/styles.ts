import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: #000000;
  width: 100%;

  a {
    color: ${({ theme }) => theme.colors.text}
  }

  a + a {
    margin-left: 50px;

  }

  button {
    color: ${({ theme }) => theme.colors.text}
  }

  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
    `,
    sm: css`
      flex-direction: row;
    `
  })}
`
export const LeftSide = styled.div`
  display: flex;
  order: 1;
  padding-left: 5px;

  a + a {
    padding-top: 5px;
  }
`
export const MiddleSide = styled.div`
  display: flex;
  order: 2;
  
  ${breakpointsMedia({
    xs: css`
      width: auto;
    `,
    sm: css`
      width: 170px;
      justify-content: center;
      `,
    md: css`
      width: auto;
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
    `
  })}
`
