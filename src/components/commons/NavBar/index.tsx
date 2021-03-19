import React from 'react'

import NavbarWrapper from './styles'
import Text from '../../foundation/Text'
import Button from '../../foundation/Button'

interface Props {
  onClick: () => void;
}
export default function Navbar ({ onClick }: Props) {
  return (
    <NavbarWrapper>
      <li>
        <Button
          variant='subtitle'
          onClick={onClick}
          paddingRight='30px'
        >
          Sobre Mim
        </Button>
      </li>
      <li>
        <Text
          variant='navbar'
          href=''
          color='black'
          paddingRight='40px'
        >
          Contato
        </Text>
      </li>
    </NavbarWrapper>
  )
}
