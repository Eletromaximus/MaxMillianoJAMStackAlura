import React from 'react'

import NavbarWrapper from './styles'
import Link from '../../components/fundation/Link'
import { Button } from '@material-ui/core'

interface Props {
  onClick: () => void;
}
export default function Navbar (props: Props) {
  return (
    <NavbarWrapper>
      <li>
        <Button
          onClick={props.onClick}
        >
          Sobre Mim
        </Button>
      </li>
      <li>
        <Link
          variant='navbar'
          href=''
          color='black'
        >
          Contato
        </Link>
      </li>
    </NavbarWrapper>
  )
}
