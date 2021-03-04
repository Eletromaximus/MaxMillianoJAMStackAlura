import React from 'react'

import NavbarWrapper from './styles'
import Link from '../../components/fundation/Link'

export default function Navbar () {
  return (
    <NavbarWrapper>
      <li>
        <Link
          variant='navbar'
          href=''
        >
          Sobre Mim
        </Link>
      </li>
      <li>
        <Link
          variant='navbar'
          href=''
        >
          Contato
        </Link>
      </li>
    </NavbarWrapper>
  )
}
