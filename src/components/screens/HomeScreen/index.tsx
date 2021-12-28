import React from 'react'
import { Grid } from '../../foundation/layout/Grid'
// import { WrapperProjects } from '../../commons/WrapperProjects'
import Card from '../../commons/Cards'
import HighLightCard from '../../commons/HighLight'

export default function HomeScreen () {
  return (
    <Grid.Container>

        <Grid.Row>
          <HighLightCard
            url="https://github.com/Eletromaximus/InstaAlura/raw/main/instaAlura.png"
            title="InstaAlura"
            alt="instaAlura"
            endereco="/project/337503798"
            variant="title"
            description="Projeto desenvolvido no BootCamp JAMStack Alura"
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
            alt="pomodoro Clock"
            title="Relógio Pomodoro"
            url="https://raw.githubusercontent.com/Eletromaximus/PomodoroClock/master/pomodoro.png"
            href="/project/257099735"
          />
        </Grid.Row>
    </Grid.Container>
  )
}
