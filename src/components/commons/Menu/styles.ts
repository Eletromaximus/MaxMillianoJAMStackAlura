import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'
import { TextStyleVariants } from '../../foundation/Text'

export const MenuWrapper: any = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  opacity: 0.8;
  background-color: #C4C4C4;
  color: #000000;
  font-family: 'Poppins', sans-serif;

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

  li a {
    text-decoration: none;
    margin-right: 75px;
  }
`
MenuWrapper.LeftSide = styled.div`
    padding-left: 80px;
  /* ${breakpointsMedia({
    md: css`
      padding-left: 100px;
    `
  })} */

  #modeChange {
    color: ${({ theme }) => theme.colors.background}
  }
`
MenuWrapper.MiddleSide = styled.div`
  display: flex;
  width: 511px;
  justify-content: space-between ;

`
MenuWrapper.RightSide = styled.div`
`
