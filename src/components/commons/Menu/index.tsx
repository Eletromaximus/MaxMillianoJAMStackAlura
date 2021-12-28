import React from 'react'
import { MenuWrapper } from './styles'

// import NavbarWrapper from '../NavBar/styles'
// import Navbar from '../NavBar'

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import Button from '../../foundation/Button'
import Text from '../../foundation/Text'

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
          target='_blank'
          href='https://www.behance.net/maxmilsouzam/'
        >
          <img src={'/behance.png'} alt='behance' />
        </Button>

        <Button
          target='_blank'
          href='https://github.com/Eletromaximus/'
        >
          <img src={'/GitHub64.png'} alt='github' />
        </Button>

        <Button
          target='_black'
          href='https://www.linkedin.com/in/maxmilliano/'
        >
          <img src={'/linkedin.svg'} alt="linkedin" />
        </Button>
      </MenuWrapper.LeftSide>

      <MenuWrapper.MiddleSide>
        <Text>
          Quem sou
        </Text>
        <Text>
          O que Faço
        </Text>
        <Text>
          Resumo
        </Text>
        <Text>
          Entre em contato
        </Text>
      </MenuWrapper.MiddleSide>
      <MenuWrapper.RightSide>
        <Button
          onClick={() => changeMode()}
          padding={'0 100px 0 0'}
        >
          <EmojiObjectsIcon id='modeChange' />
        </Button>
      </MenuWrapper.RightSide>

    </MenuWrapper>

  )
}
