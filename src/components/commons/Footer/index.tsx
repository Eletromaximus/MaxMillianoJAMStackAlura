import React from 'react'
import { FooterWrapper } from './styles'
import { Box } from '../../foundation/layout/Box'
import Text from '../../foundation/Text'
import { FormCadastro } from '../../patterns/FormCadastro'
interface IForm{
  name: string,
  email: string,
  telefone?: string,
  assunto: string,
  mensagem: string,
}

export default function Footer () {
  const onSubmit = async (data: IForm) => {
    await fetch(`https://formsubmit.co/${process.env.emailPadrao}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          return alert('Mensagem enviada com sucesso! \n Retornarei em breve')
        }
        alert('Serviço indisponível, tente mais tarde')
      })
      .catch((error) => {
        console.log(error)
        alert('Serviço indisponível, tente mais tarde')
      })
  }

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

      <FormCadastro onSubmit={onSubmit} />

    </FooterWrapper>
  )
}
