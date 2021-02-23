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
import HighLightCard from '../src/commons/HighLight';
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
              alt='pomodor Clock'
              description='Relógio pomodoro com React e typescript'
              title='Relógio Pomodoro'
              url='https://raw.githubusercontent.com/Eletromaximus/PomodoroClock/master/pomodoro.png'
            />
          </Grid.Row>
        </MainRow>

        <OrdinaryRow>
          <Grid.Row>
            <Card url={'https://github.com/Eletromaximus/semanaomnistack11/blob/master/x2.png?raw=true'} title='Semana Omnistack 11' alt='semana omnistack 11'/> 
            <Card url={'https://github.com/Eletromaximus/NLW3/blob/master/x.png?raw=true'} title='Next Level Week 3' alt='next level week 3'/> 
            <Card url={'https://github.com/Eletromaximus/InstaAlura/raw/main/instaAlura.png'} title='InstaAlura' alt='instaAlura'/> 
          </Grid.Row>
        </OrdinaryRow>
      </Grid.Container>
    </Box>
  );
}
