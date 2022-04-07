import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Image from 'next/image'
import * as M from './styles'

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import Button from '../../foundation/Button'

interface Props {
  onClick: () => void;
  changeMode: () => void;
  width?: number;
}

export default function Home ({ changeMode, width } : Props) {
  const screenLg = 768

  return (
    <M.MenuWrapper >
      <M.LeftSide>
        <Button
          target='_blank'
          href='https://www.behance.net/maxmilsouzamachado/'
        >
          <Image
            src={'/behance.png'}
            alt='behance'
            width={45}
            height={45}
            layout='fixed'
          />
        </Button>

        <Button
          target='_blank'
          href='https://github.com/Eletromaximus/'
        >
          <GitHubIcon fontSize='large' />
        </Button>

        <Button
          target='_black'
          href='https://www.linkedin.com/in/maxmilliano/'
        >
          <LinkedIn fontSize='large' />
        </Button>
      </M.LeftSide>

      <M.MiddleSide>
        {width && (width >= screenLg)
          ? <>
            <Button
              href='#quemsou'
              target=''
            >
              Quem sou
            </Button>

            <Button
              target=''
              href='#resumo'
            >
              Resumo
            </Button>

            <Button
              target=''
              href='#contato'
            >
              Entre em contato
            </Button>
          </>
          : ''
        }
      </M.MiddleSide>

      <M.RightSide >
        <Button
          onClick={() => changeMode()}
        >
          <EmojiObjectsIcon id='modeChange' />
        </Button>
      </M.RightSide>
    </M.MenuWrapper>
  )
}
