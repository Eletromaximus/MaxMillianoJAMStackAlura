import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 926px;
  background-color: #2B2929;

  ${breakpointsMedia({
    sm: css`
      justify-content: space-between;
    `,
    lg: css`
      justify-content: center;
    `
  })}

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      padding-top: 45px;
      color: ${({ theme }) => theme.colors.primary};
    }

    input {
      margin-top: 15px;
      height: 46px;
      border-radius: 20px;

      ${breakpointsMedia({
        xs: css`
          width: auto;
        `,
        sm: css`
          width: auto;
        `,
        md: css`
          width: 700px;
        `
      })}
    }

    textarea {
      margin-top: 15px;
      height: 140px;
      border-radius: 8px;
      resize: none;

      ${breakpointsMedia({
        xs: css`
          width: auto;
        `,
        sm: css`
          width: auto;
        `,
        md: css`
          width: 700px;
        `
      })}
    }
    button {
      margin-top: 10px;
    }
  }
`

export default FooterWrapper
