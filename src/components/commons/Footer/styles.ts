import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1000px;
  width: 100%;
  background-color: #2B2929;
  color: ${({ theme }) => theme.colors.primary};

  ${breakpointsMedia({
    sm: css`
      justify-content: space-between;
    `,
    lg: css`
      justify-content: center;
    `
  })}
`

export default FooterWrapper
