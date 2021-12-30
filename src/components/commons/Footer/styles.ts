import styled from 'styled-components'

export const FooterWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 926px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      padding-top: 45px;
    }

    input {
      margin-top: 15px;
      width: 100%;
    }
  }

`

export default FooterWrapper
