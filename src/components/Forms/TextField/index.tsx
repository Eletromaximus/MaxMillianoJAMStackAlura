import React from 'react'
import styled from 'styled-components'

interface IInput {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  children?: string;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}
const InputWrapper = styled.div`
  margin-bottom: 17px;
`

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.colors.secundary};
`
export default function TextField (props: IInput) {
  return (
    <InputWrapper>
      <Input
        type={ props.type }
        placeholder={props.placeholder}
        name={props.name}
        onChange={ props.onChange }
        value={ props.value }
      />
    </InputWrapper>
  )
}
