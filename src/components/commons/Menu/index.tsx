import React from 'react'
import { MenuWrapper } from './styles'
// import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
// import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined'
// import { Button } from '@material-ui/core'
// import { ThemeContext } from 'styled-components'
import NavbarWrapper from '../NavBar/styles'
import Navbar from '../NavBar'

interface Props {
  // toggleTheme(): void;
  onClick: () => void;
}

export default function Home ({ onClick } : Props) {
  // const { title } = useContext(ThemeContext)

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
          {/* <Button
          onChange={toggleTheme}
        >
         {title === 'dark' ? <EmojiObjectsIcon /> : <EmojiObjectsOutlinedIcon /> }
        </Button> */}
      </MenuWrapper.LeftSide>

      <MenuWrapper.RightSide>
        <NavbarWrapper>

        </NavbarWrapper>
          <Navbar onClick={ onClick} />
      </MenuWrapper.RightSide>

    </MenuWrapper>

  )
}
