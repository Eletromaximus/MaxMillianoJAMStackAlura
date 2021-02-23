import React, { useState} from 'react';
import Capa from '../src/commons/Capa';
import { Box } from '../src/components/fundation/layout/Box';
import Menu from '../src/commons/Menu';
import { lightTheme, darkTheme } from '../src/components/theme/themes';
import { Grid } from '../src/components/fundation/layout/Grid';
import SectionTitle from '../src/commons/SectionTitle';
import {WrapperProjects} from '../src/commons/WrapperProjects';
import Card from '../src/commons/Cards';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { HighLightCard } from '../src/commons/HighLight';
import breakpointsMedia from '../src/components/theme/utils/breakpointsMedia';


export default function Home() {
  const [ theme, setTheme ] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme) ;
  }

  const MainRow = styled.div`
  order: initial;
  ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })}
`;

const OrdinaryRow = styled.div`
  order: initial;
  margin-top: 10px;
  ${breakpointsMedia({
    md: css`
      order: 1;
    `,
  })}
`;

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

      <SectionTitle />

      <Grid.Container>


            <MainRow>
              <Grid.Row>
                <HighLightCard
                  size={12} 
                  title={'Relógio Pomodoro'}
                >
                  <Image 
                    src='https://github.com/Eletromaximus/PomodoroClock/blob/master/pomodoro.png?raw=true'
                    width={500}
                    height={300} 
                  />
                </HighLightCard>
              </Grid.Row>
            </MainRow>

            <OrdinaryRow>
              <Grid.Row>
                <Card url={'https://insta-alura-git-main.maxmillianox.vercel.app/'}>
                  <Image
                    src={'https://github.com/Eletromaximus/PomodoroClock/blob/master/pomodoro.png?raw=true'}
                    width={200}
                    height={300}
                  />
                </Card>

                <Card url={'https://github.com/Eletromaximus/PomodoroClock'}>
                  <Image
                    src={'https://github.com/Eletromaximus/PomodoroClock/blob/master/pomodoro.png?raw=true'}
                    width={200}
                    height={300}
                  />

                </Card><Card url={'https://github.com/Eletromaximus/PomodoroClock'}>
                  <Image
                    src={'https://github.com/Eletromaximus/PomodoroClock/blob/master/pomodoro.png?raw=true'}
                    width={200}
                    height={300}
                  />
                </Card>
              </Grid.Row>
           </OrdinaryRow>



      </Grid.Container>

    </Box>
  );
}
/* <Card url={'https://github.com/Eletromaximus/PomodoroClock'}>
  <Image
    src={'https://github.com/Eletromaximus/PomodoroClock/blob/master/pomodoro.png?raw=true'}
    width={200}
    height={300}
  />
</Card> */
/* <WrapperProjects>
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
*/