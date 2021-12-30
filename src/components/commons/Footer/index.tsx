import React from 'react'

import { FooterWrapper } from './styles'
import { Box } from '../../foundation/layout/Box'
import Text from '../../foundation/Text'

export default function Footer () {
  return (
    <FooterWrapper>
      <Box
        display='flex'
        flexDirection='column'
        width='100%'
        height='926px'
        backgroundColor='#2B2929'
        style={{
          borderRadius: '20px',
          alignItems: 'center'
        }}
      >
        <span
          style={{
            color: '#FFFFFF',
            fontSize: '40px',
            paddingTop: '89px'
          }}
        >
          Entre em contato
        </span>

        <Text
          color='#FFFFFF'
          margin='27px 0 0 0 '
        >
        Duvidas? Sujestões?
        Preencha o cadastro e entraremos em contato

        <form>
          <label htmlFor="name">Nome</label>
          <input type="text" />

          <label htmlFor="email">Email</label>
          <input type="text" />

          <label htmlFor="telefone">telefone/whatsapp</label>
          <input type="text" />

          <label htmlFor="assunto">Assunto</label>
          <input type="text" />

        </form>

        </Text>
        {/* <div>Ícones feitos por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div> */}
      </Box>
    </FooterWrapper>
  )
}
