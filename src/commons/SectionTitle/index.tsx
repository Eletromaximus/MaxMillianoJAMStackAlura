import React from 'react'
import Text from '../../components/fundation/Text'

import { TitleStyle } from './styles'

export default function SectionTitle () {
  return (
    <TitleStyle>
      <Text tag='h1' variant='Title' textAlign= 'center'>
        Meus Projetos
      </Text>
    </TitleStyle>
  )
}
