import React from 'react'
import Text from '../../foundation/Text'

import { TitleStyle } from './styles'

interface IProps {
  children: React.ReactNode
}

export default function SectionTitle ({ children }: IProps) {
  return (
    <TitleStyle>
      <Text tag='h1' variant='Title' textAlign= 'center'>
        {children}
      </Text>
    </TitleStyle>
  )
}
