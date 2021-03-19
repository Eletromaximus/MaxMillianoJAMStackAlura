import styled, { css } from 'styled-components'
import { TextStyleVariants } from '../../foundation/Text'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  ${breakpointsMedia({
    md: css`
      a {
        ${TextStyleVariants.navBar}
      }
    `
  })}
`
export default NavbarWrapper
