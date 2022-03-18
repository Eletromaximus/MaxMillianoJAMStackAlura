import React from 'react'
import Resume from '../../commons/Resume'
import { Box } from '../../foundation/layout/Box'
import { Grid } from '../../foundation/layout/Grid'
import Text from '../../foundation/Text'
import Image from 'next/image'

export default function HomeScreen () {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent={{
        sm: 'space-between',
        lg: 'center'
      }}
      style={{
        alignItems: 'center',
        backgroundImage: 'url(/Ondas.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        minHeight: '846px'
      }}
    >

      <Grid.Row
        marginTop='200px'
      >
        <Text variant='title' color='#1E32E1'>
          Quem sou
        </Text>
      </Grid.Row>

      <Grid.Row
        id='quemsou'
        display='flex'
        style={{
          minWidth: '320px'
        }}
        justifyContent={{
          xs: 'center',
          sm: 'center'
        }}
        margin='74px 10px'
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
          <Image
            src='/eumini.png'
            alt='avatar'
            width={150}
            height={150}
          />
        </Box>

        <Box
          minWidth='320px'
          margin={{
            sm: '0 0 0 20px',
            md: '0 0 0 80px'
          }}
          maxWidth='420px'
          padding='30px 0 0 0'
        >
          <Text variant='paragraph' textAlign='justify'>
            Olá,
              Sou Max Milliano, desenvolvedor web.
            Engenheiro por formação e apaixonado pelo universo da programação.
            Coleciono experiências e me divertindo com os resultados.
          </Text>
        </Box>
      </Grid.Row>

      <Resume />

    </Box>
  )
}
