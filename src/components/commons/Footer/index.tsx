import React from 'react'

import { FooterWrapper } from './styles'
import { Box } from '../../foundation/layout/Box'
import Text from '../../foundation/Text'

export default function Footer () {
  return (
    <FooterWrapper>
      <Box
        id='contato'
        style={{
          textAlign: 'center',
          paddingTop: '89px'
        }}
      >
        <span
        style={{
          color: '#FFFFFF',
          fontSize: '40px'
        }}
        >
          Entre em contato
        </span>
      </Box>

        <Box
          margin='27px 0 0 0 '
          width={{
            xs: '320px'
          }}
        >
          <Text
            color='#FFFFFF'
          >
            Duvidas? Sujestões?
            Preencha o cadastro e entraremos em contato
          </Text>
        </Box>

      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" />

        <label htmlFor="email">Email</label>
        <input type="text" />

        <label htmlFor="telefone">telefone/whatsapp</label>
        <input type="text" />

        <label htmlFor="assunto">Assunto</label>
        <input type="text" />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea />
      </form>

    </FooterWrapper>
  )
}
