import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia'

export const FormMessageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Content = styled.div`
  ${breakpointsMedia({
    sm: css`
      width: 100%;
      height: 65%
    `,
    md: css`
      width: 500px;
      height: 50%;
    `
  })};
  height: 65%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  & form {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 80%;
      border: 1px solid black;
    }
  }

`
