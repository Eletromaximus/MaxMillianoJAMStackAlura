import React from 'react'
import { MenuWrapper } from './styles'

import NavbarWrapper from '../NavBar/styles'
import Navbar from '../NavBar'

interface Props {
  onClick: () => void;
  href: string;
}

export default function Home ({ onClick, href } : Props) {
  return (
    <MenuWrapper >
      <MenuWrapper.LeftSide>
      </MenuWrapper.LeftSide>

      <MenuWrapper.RightSide>
        <NavbarWrapper>

        </NavbarWrapper>
          <Navbar onClick={ onClick} href={href} />
      </MenuWrapper.RightSide>

    </MenuWrapper>

  )
}
