import React from 'react'
import * as M from './styles'

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import Button from '../../foundation/Button'
import Text from '../../foundation/Text'

interface Props {
  onClick: () => void;
  changeMode: () => void;
  width?: number;
}

export default function Home ({ onClick, changeMode, width } : Props) {
  const breakpoint = 992

  return (
    <M.MenuWrapper >
      <M.LeftSide>
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
      </M.LeftSide>

      <M.MiddleSide>
        {width && (width >= breakpoint)
          ? <>
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
          </>
          : <Button>
            Menu
          </Button>
        }
      </M.MiddleSide>

      <M.RightSide>
        <Button
          onClick={() => changeMode()}
        >
          <EmojiObjectsIcon id='modeChange' />
        </Button>
      </M.RightSide>
    </M.MenuWrapper>
  )
}
