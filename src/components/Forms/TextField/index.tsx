// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'

interface IInput {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  children?: string;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  xref: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
}

const Input = styled.input`
  width: 80%;
  border: 1px solid black;
  padding: 12px 16px;
  outline: 0;
  border-radius: 8px;
`
export default function TextField (props: IInput) {
  return (

      <Input
        type={ props.type }
        placeholder={props.placeholder}
        name={props.name}
        onChange={ props.onChange }
        value={ props.value }
        ref={props.xref}
      />

  )
}
