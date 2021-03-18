import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'
import { TextStyleVariants } from '../../foundation/Text'

export const MenuWrapper: any = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: ${({ theme }) => theme.colors.mode.light.primary};
  border: 2px solid ${({ theme }) => theme.colors.mode.light.secundary}

  

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
  ${breakpointsMedia({
    md: css`
      padding-left: 150px;
    `
  })}
  `
MenuWrapper.RightSide = styled.div`
`
