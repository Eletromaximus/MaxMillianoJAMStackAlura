import React, { useState} from 'react';
import Capa from '../src/commons/Capa';
import { Box } from '../src/components/fundation/layout/Box';
import Menu from '../src/commons/Menu'
import { lightTheme, darkTheme } from '../src/components/theme/themes'
import { Grid } from '../src/components/fundation/layout/Grid'

export default function Home() {
  const [ theme, setTheme ] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme) 
  }

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Capa />
      <Grid.Container>
        <Menu toggleTheme={toggleTheme} />
      </Grid.Container>
      
      

      <h1>Max Milliano</h1>

    </Box>
  );
}
