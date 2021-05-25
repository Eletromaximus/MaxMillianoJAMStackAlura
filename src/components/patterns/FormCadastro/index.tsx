import React from 'react'
import Text from '../../foundation/Text'
import Button from '@material-ui/core/Button'
import { useForm } from 'react-hook-form'

import { Content, FormMessageWrapper } from './styles'

function FormContent () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        marginTop: '30px'
      }}
      id='formMessage'
    >

      <Text
        variant='subtitle'
        tag='h2'
        color='black'
      >
        ENVIE SUA MENSAGEM
      </Text>

      <Text
        variant='paragraph1'
        tag='h3'
        color='black'
        name='name'
      >
        Seu Nome
      </Text>

      <input
        placeholder='Seu Nome'
        type='text'
        {...register('name', { required: true, pattern: /[^a-zà-ú]/gi })}
      />
       {errors.name?.type === 'required' && <Text tag='span' color='purple'> Esse campo é necessário </Text>}

      <Text
        variant='paragraph1'
        tag='h3'
        color='black'
      >
        Seu Email
      </Text>

      <input
        placeholder='Seu Email'
        type='text'
        {...register('email', { required: true })}
      />
      {errors.email?.type === 'required' && <Text tag='span' color='purple'> Esse campo é necessário </Text>}

      <Text
        variant='paragraph1'
        tag='h3'
        color='black'
      >
        Sua Mensagem
      </Text>

      <textarea
        style={{
          width: '80%',
          border: '1px solid black',
          padding: '12px 16px',
          outline: '0',
          resize: 'none'
        }}
        {...register('message', { required: true, maxLength: 500 })}
      />
      {errors.message?.type === 'required' && <Text tag='span' color='purple'> Esse campo é necessário </Text>}

      <Button
        type='submit'
        style={{
          marginTop: '20px',
          width: '80%',
          backgroundColor: '#4f4789',
          color: '#fffded'
        }}
        // disabled={isFomInvalid}
        fullWidth
        variant='outlined'
      >
        Cadastrar
      </Button>

    </form>
  )
}

export default function FormCadastro ({ propsDoModal }: any) {
  return (

    <FormMessageWrapper>
      <Content {...propsDoModal}>
        <FormContent />
      </Content>
    </FormMessageWrapper>

  )
}
