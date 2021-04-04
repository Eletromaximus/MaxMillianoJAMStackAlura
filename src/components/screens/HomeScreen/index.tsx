import React from 'react'
import { Grid } from '../../foundation/layout/Grid'
import SectionTitle from '../../commons/SectionTitle'
import { WrapperProjects } from '../../commons/WrapperProjects'
import Card from '../../commons/Cards'
import HighLightCard from '../../commons/HighLight'

export default function HomeScreen () {
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
            endereco="/project/257099735"
          />
        </Grid.Row>

        <Grid.Row>
          <Card
            url="https://github.com/Eletromaximus/semanaomnistack11/blob/master/x2.png?raw=true"
            title="Semana Omnistack 11"
            alt="semana omnistack 11"
            href="/project/250057820"
          />
          <Card
            url="https://github.com/Eletromaximus/NLW3/blob/master/x.png?raw=true"
            title="Next Level Week 3"
            alt="next level week 3"
            href="/project/303780279"
          />
          <Card
            url="https://github.com/Eletromaximus/InstaAlura/raw/main/instaAlura.png"
            title="InstaAlura"
            alt="instaAlura"
            href="/project/337503798"
          />
        </Grid.Row>
      </WrapperProjects>
    </Grid.Container>
  )
}
