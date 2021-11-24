import React from 'react'

import NavbarWrapper from './styles'
import Text from '../../foundation/Text'
import Button from '../../foundation/Button'

interface Props {
  onClick: () => void;
  href: string;
}
export default function Navbar ({ onClick, href }: Props) {
  return (
    <NavbarWrapper >
      <li>
        <Button
          variant='subtitle'
          onClick={(e: Event) =>{
            e.preventDefault()
            onClick()
          }}
          paddingRight='30px'
          name='contato'
        >
          Contato
        </Button>
      </li>
      <li>
        <Text
          variant='subtitle'
          href={href}
          color='black'
          paddingRight='40px'
          name='sobre'
        >
          {'<Sobre Mim/>'}
        </Text>
      </li>
    </NavbarWrapper>
  )
}
