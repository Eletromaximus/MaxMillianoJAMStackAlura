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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    label {
      padding-top: 45px;
    }

    input {
      margin-top: 15px;
      height: 46px;
      border-radius: 20px;
      width: 80%;

      ${breakpointsMedia({
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
      width: 80%;

      ${breakpointsMedia({
        md: css`
          width: 700px;
        `
      })}
    }

    button {
      margin: 10px;
    }

    /* span {
      color:
    } */
  }
`

export default FooterWrapper
