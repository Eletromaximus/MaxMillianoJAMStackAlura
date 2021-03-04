import styled, { css } from 'styled-components'
import breakpointsMedia from '../../components/theme/utils/breakpointsMedia'

export const FooterWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
  height: 68px;
  margin-top: 10px;

  ${breakpointsMedia({
    md: css`
      margin-top: 20px;
    `
  })}
`

export default FooterWrapper
