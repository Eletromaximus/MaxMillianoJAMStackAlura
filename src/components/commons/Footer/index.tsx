import React from 'react'
import { FooterWrapper } from './styles'
import { Box } from '../../foundation/layout/Box'
import Text from '../../foundation/Text'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'

interface IForm{
  name: string,
  email: string,
  telefone?: string,
  assunto: string,
  mensagem: string,
}

export default function Footer () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IForm>({
    defaultValues: {
      name: '',
      email: '',
      assunto: '',
      mensagem: ''
    }
  })

  const onSubmit = async (data: IForm) => {
    await fetch(`https://formsubmit.co/${process.env.EMAIL_PADRAO}`, {
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

    reset({
      name: '',
      assunto: '',
      email: '',
      mensagem: '',
      telefone: ''
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

      <form
        action="https://formsubmit.co/maxmillianox@gmail.com"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">Nome</label>
        <input {...register('name', {
          required: true,
          pattern: /[A-Z][a-z]* [A-Z][a-z]*/
        })}/>
        {errors.name?.type === 'pattern' &&
          <span>Preencha o nome apropriadamente</span>
        }

        <label htmlFor="email">Email</label>
        <input {...register('email', {
          required: true,
          pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        })}/>
        {errors.email?.type === ('pattern' || 'required') &&
          <span>Preencha o email apropriadamente</span>
        }

        <label htmlFor="telefone">telefone/whatsapp*</label>
        <input {...register('telefone', {
          // eslint-disable-next-line no-useless-escape
          pattern: /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g
        })}/>
        {errors.telefone?.type === 'pattern' &&
          <span>Preencha o telefone apropriadamente</span>
        }

        <label htmlFor="assunto">Assunto</label>
        <input {...register('assunto', {
          required: true,
          maxLength: 20
        })} />
        {errors.assunto?.type === 'required' &&
          <span>Preencha o assunto apropriadamente</span>
        }

        <label htmlFor="mensagem">Mensagem</label>
        <textarea {...register('mensagem', {
          required: true,
          maxLength: 1000
        })}/>
        {errors.mensagem?.type === 'required' &&
          <span>Preencha o mensagem apropriadamente</span>
        }

        <Button
          type='submit'
          variant='contained'
        >
          Submeter
        </Button>
      </form>
      <p>* Preenchimento não obrigatório</p>

    </FooterWrapper>
  )
}
