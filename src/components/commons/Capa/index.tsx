import React from 'react'
import CapaStyle from './styles'
import Text from '../../foundation/Text'

function Capa () {
  return (
    <CapaStyle>
      <Text
        variant='title'
        href='/'
      >
        Max Milliano
      </Text>
      <br/>
      <Text
        variant='subtitle'
      >
        Desenvolvedor Web
      </Text>
    </CapaStyle>
  )
}
export default Capa
