import React from 'react'
import { Grid } from '../src/components/foundation/layout/Grid'
import SectionTitle from '../src/components/commons/SectionTitle'
import { WrapperProjects } from '../src/components/commons/WrapperProjects'
import Card from '../src/components/commons/Cards'
import HighLightCard from '../src/components/commons/HighLight'
import websitePageHOC from '../src/components/wrappers/WebsitePages/hoc'

function HomeScreen () {
  return (
    <Grid.Container>

    <SectionTitle >
      Meus Projetos
    </SectionTitle>
      <WrapperProjects>
        <Grid.Row>
          <HighLightCard
            variant="title"
            alt="pomodoro Clock"
            description="Relógio pomodoro com React e typescript"
            title="Relógio Pomodoro"
            url="https://raw.githubusercontent.com/Eletromaximus/PomodoroClock/master/pomodoro.png"
            endereco="https://github.com/Eletromaximus/PomodoroClock"
          />
        </Grid.Row>

        <Grid.Row>
          <Card
            url="https://github.com/Eletromaximus/semanaomnistack11/blob/master/x2.png?raw=true"
            title="Semana Omnistack 11"
            alt="semana omnistack 11"
            href="https://github.com/Eletromaximus/semanaomnistack11"
          />
          <Card
            url="https://github.com/Eletromaximus/NLW3/blob/master/x.png?raw=true"
            title="Next Level Week 3"
            alt="next level week 3"
            href="https://github.com/Eletromaximus/NLW3"
          />
          <Card
            url="https://github.com/Eletromaximus/InstaAlura/raw/main/instaAlura.png"
            title="InstaAlura"
            alt="instaAlura"
            href="https://github.com/Eletromaximus/InstaAlura"
          />
        </Grid.Row>
      </WrapperProjects>
    </Grid.Container>
  )
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home'
    },
    pageBoxProps: {
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
    // menuProps: true
  }
})
