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
    <NavbarWrapper>
      <li>
        <Button
          variant='subtitle'
          onClick={onClick}
          paddingRight='30px'
        >
          Contato
        </Button>
      </li>
      <li>
        <Text
          variant='navbar'
          href={href}
          color='black'
          paddingRight='40px'
        >
          Sobre Mim
        </Text>
      </li>
    </NavbarWrapper>
  )
}
