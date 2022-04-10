import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

export const FormMessageWrapper = styled.form`
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
`
