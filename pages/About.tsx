/* eslint-disable camelcase */
import React from 'react'
import { Box } from '../src/components/foundation/layout/Box'
import { Grid } from '../src/components/foundation/layout/Grid'
import websitePageHOC from '../src/components/wrappers/WebsitePages/hoc'
import Image from 'next/image'
import Text from '../src/components/foundation/Text'

function AboutScreen () {
  return (
    <Box>
      <Grid.Col
        offset={{ xs: 0, md: 3.5 }}
        value={{ xs: 12, md: 5 }}
        display='flex'
        flex={1}
        justifyContent='center'
        alignItems='center'
      >
        <Grid.Row
          marginTop='20px'
        >
          <div
            style={{
              marginLeft: '33.33%'
            }}
          >
            <Image
              src='/img/avatar.png'
              width={250}
              height={450}
              alt='imagem do profissional'
            />
          </div>

          <div>
            <Text
              tag='p'
              variant='paragraph1'
            >
              Engenheiro de formação e técnico em eletrotécnica, estudo à aproximadamente um ano e meio sobre programação.
              Procuro seguir as boas práticas e recentemente faço um Bootcamp na alura para melhorar minhas habilidades
            </Text>
          </div>
        </Grid.Row>
      </Grid.Col>
    </Box>
  )
}

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headeTitle: 'About'
    },
    pageBoxProps: {
      flex: 'wrap',
      justifyContent: 'space-between'
    }
  }
})
