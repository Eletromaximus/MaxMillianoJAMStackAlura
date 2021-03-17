import React, { useState } from 'react'
import Capa from '../src/components/commons/Capa'
import { Box } from '../src/components/foundation/layout/Box'
import Menu from '../src/components/commons/Menu'
import { lightTheme, darkTheme } from '../src/theme/themes'
import { Grid } from '../src/components/foundation/layout/Grid'
import SectionTitle from '../src/components/commons/SectionTitle'
import { WrapperProjects } from '../src/components/commons/WrapperProjects'
import Card from '../src/components/commons/Cards'
import HighLightCard from '../src/components/commons/HighLight'
import Footer from '../src/components/commons/Footer'
import Modal from '../src/components/commons/Modal'
import FormCadastro from '../src/components/patterns/FormCadastro/index'

export default function Home () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)
  }

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      flexDirection="column"

    >

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
      >
        {(propsDoModal: any) => (
          <FormCadastro propsDoModal={propsDoModal} />
        )}

      </Modal>
      <Capa />

      <Menu toggleTheme={toggleTheme} onClick={() => setIsModalOpen(!isModalOpen)}/>

      <Grid.Container>

      <SectionTitle />
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
      <Footer />
    </Box>
  )
}
