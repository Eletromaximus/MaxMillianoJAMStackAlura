import styled, { css } from 'styled-components'
import { TextStyleVariants } from '../../components/fundation/Text'
import breakpointsMedia from '../../components/theme/utils/breakpointsMedia'

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    text-decoration: none;
    margin-right: 75px;
  }
  ${breakpointsMedia({
    md: css`
      a {
        ${TextStyleVariants.navBar}
      }
    `
  })}
`
export default NavbarWrapper
