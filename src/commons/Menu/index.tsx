import React, { useContext } from 'react';
import { MenuWrapper } from './styles';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { Button } from '@material-ui/core';
import { ThemeContext } from 'styled-components';
import Link from '../../components/Link';


const links = [
  {
    texto: 'Contato',
    url: '/contato'
  },
  {
    texto: 'Sobre',
    url: '/sobre'
  }
]

interface Props {
  toggleTheme(): void;
}

export default function Home({toggleTheme} : Props ) {
  const { title } = useContext(ThemeContext);

  return (
    <MenuWrapper>

      <MenuWrapper.RightSide>
        <Button
          onChange={toggleTheme}
        >
         {title === 'dark' ? <EmojiObjectsIcon /> : <EmojiObjectsOutlinedIcon /> } 
        </Button>
      </MenuWrapper.RightSide>

      <MenuWrapper.CentralSide>
      <ul>
          {links.map( link => {
            return (
              <li key={link.url}>
                <Link
                  variant='smallExcpetion'
                  href={link.url}
                >
                  {link.texto}
                </Link>
              </li>
            )
          })}
        </ul>
      </MenuWrapper.CentralSide>

      <MenuWrapper.LeftSide>
       
      </MenuWrapper.LeftSide>


    </MenuWrapper>
    
  );
}
