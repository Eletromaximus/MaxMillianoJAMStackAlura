import React, { useState} from 'react';
import Capa from '../src/commons/Capa';
import { Box } from '../src/components/fundation/layout/Box';
import Menu from '../src/commons/Menu';
import { lightTheme, darkTheme } from '../src/components/theme/themes';
import { Grid } from '../src/components/fundation/layout/Grid';
import SectionTitle from '../src/commons/SectionTitle';
import {WrapperProjects} from '../src/commons/WrapperProjects';
import Card from '../src/commons/Cards';

export default function Home() {
  const [ theme, setTheme ] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme) 
  }

  return (
    <Box
      flex='1'
      display='flex'
      flexWrap='wrap'
      flexDirection='column'
      width= '100%'

    >
      <Capa />

      <Menu toggleTheme={toggleTheme} />
      <Grid.Container>
        <Grid.Row>
          <Grid.Col 
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 10 }}
            display='flex'
            flex='1'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
          >
            <SectionTitle />
          </Grid.Col>

          <Grid.Col
            offset={{ xs: 0, md: 0}}
            value={{ xs: 12, md: 12}}
            display='flex'
            flex='1'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
          >
            <WrapperProjects>
              <WrapperProjects.RightSide>
                <Card
                  url={'https://github.com/Eletromaximus/PomodoroClock'}
                >
                  Relógio Pomodoro
                </Card>
              </WrapperProjects.RightSide>

              <WrapperProjects.CentralSide>
                <Card
                  url={'https://github.com/Eletromaximus/PomodoroClock'}
                >
                  Relógio Pomodoro
                </Card>
              </WrapperProjects.CentralSide>

              <WrapperProjects.LeftSide>
                <Card
                  url={'https://github.com/Eletromaximus/PomodoroClock'}
                >
                  Relógio Pomodoro
                </Card>
              </WrapperProjects.LeftSide>
              

            </WrapperProjects>
          </Grid.Col>

        </Grid.Row>
      </Grid.Container>

    </Box>
  );
}
