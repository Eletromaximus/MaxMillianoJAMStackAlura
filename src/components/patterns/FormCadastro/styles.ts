import styled from 'styled-components'

export const FormMessageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Content = styled.div`
  width: 92%;
  height: 65%;
  background-color: ${({ theme }) => theme.colors.mode.light.primary};
  border-radius: 20px;
  & form {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`
