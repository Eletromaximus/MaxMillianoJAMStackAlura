import React from 'react'

import { FooterWrapper } from './styles'
import { Box } from '../../foundation/layout/Box'
import Text from '../../foundation/Text'

export default function Footer () {
  return (
    <FooterWrapper>
        <span
          style={{
            color: '#FFFFFF',
            fontSize: '40px',
            paddingTop: '89px'
          }}
        >
          Entre em contato
        </span>

          <Box
            margin='27px 0 0 0 '
            width={{
              xs: '360px'
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

        {/* <div>Ícones feitos por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div> */}
    </FooterWrapper>
  )
}
