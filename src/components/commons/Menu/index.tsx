import React from 'react'
import { MenuWrapper } from './styles'

import NavbarWrapper from '../NavBar/styles'
import Navbar from '../NavBar'

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import Button from '../../foundation/Button'

interface Props {
  onClick: () => void;
  href: string;
  changeMode: () => void;
}

export default function Home ({ onClick, href, changeMode } : Props) {
  return (
    <MenuWrapper >
      <MenuWrapper.LeftSide>
        <Button
          onClick={() => changeMode()}
        >
          <EmojiObjectsIcon id='modeChange' />
        </Button>
      </MenuWrapper.LeftSide>

      <MenuWrapper.RightSide>
        <NavbarWrapper>

        </NavbarWrapper>
          <Navbar onClick={() => onClick() } href={href} />
      </MenuWrapper.RightSide>

    </MenuWrapper>

  )
}
