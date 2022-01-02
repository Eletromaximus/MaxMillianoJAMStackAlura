import React from 'react'
import { Box } from '../../foundation/layout/Box'
import { Grid } from '../../foundation/layout/Grid'
import Text from '../../foundation/Text'

export default function HomeScreen () {
  return (
    <Box
      display='flex'
      justifyContent={{
        sm: 'space-between',
        lg: 'center'
      }}
      style={{
        alignItems: 'center',
        backgroundImage: 'url(/Ondas.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }}
      height='846px'
    >
      <Grid.Col
        value={{
          xs: '12',
          sm: '5'
        }}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        flexWrap={{
          sm: 'nowrap',
          xs: 'wrap'
        }}
      >
        <Box
          display='flex'
          style={{ justifyContent: 'center' }}
        >
          <img src='/eumini.png' alt='avatar' />
        </Box>

        <Box
          width='401px'
          minWidth='401px'
          margin={{
            sm: '0 0 0 20px',
            md: '0 0 0 80px'
          }}
          padding='30px 0 0 0'
        >
          <Text variant='paragraph'>
            Olá,
              Sou Max Milliano, desenvolvedor web.
            Engenheiro por formação e apaixonado pelo universo da programação.
            Coleciono experiências e me divertindo com os resultados.
          </Text>
        </Box>
      </Grid.Col>

    </Box>
  )
}
