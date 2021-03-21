import React from 'react'
import { Grid } from '../../foundation/layout/Grid'
import Image from 'next/image'
import Text from '../../foundation/Text'
import SectionTitle from '../../commons/SectionTitle'
import { Box } from '../../foundation/layout/Box'

export interface IAboutScreenProps {
  repositories: {
    name: string
    url: string
  }[]
}

export default function AboutScreen ({ repositories }: IAboutScreenProps) {
  return (
    <Grid.Container flex={1}>
      <Grid.Row
        marginTop='60px'
        flexDirection='row'
      >
        <Grid.Col
          offset={{ xs: 0, md: 3 }}
          value={{ xs: 12, md: 6 }}
          display='flex'
          flex={1}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <div>
            <Image
              src='https://avatars.githubusercontent.com/u/60040859?v=4'
              width={250}
              height={250}
              loading='lazy'
              className='avatar'
              alt='imagem do profissional'
            />
            <style jsx global>{`
              .avatar {
                border-radius: 50%
             }
            `}</style>
          </div>

          <div>
            <Text
              tag='p'
              variant='paragraph1'
            >
              Engenheiro de formação e técnico em eletrotécnica e estudante árduo de programação.
              Procuro seguir as boas práticas e recentemente faço um Bootcamp na alura para melhorar minhas habilidades.
              Acompanhe abaixo os meus projetos:
            </Text>
          </div>
            <SectionTitle >
              Meus Projetos pessoais
            </SectionTitle>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 6 }}
            display='flex'
            justifyContent='center'
          >

            <Box as='ul'>
              {repositories.map((repositorie) => (
                <>
                  <li style={{ listStyle: 'none' }} key={repositorie.url}>
                    <Text paddingRight='10px' variant='navbar'>
                      {repositorie.name}:
                    </Text>
                    <li style={{ paddingTop: 10 }}>
                      <Text color='secundary' href={repositorie.url}>
                        {repositorie.url}
                      </Text>
                    </li>
                  </li>
                </>
              ))}
            </Box>
          </Grid.Col>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}
