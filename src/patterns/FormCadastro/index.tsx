import React, { useState } from 'react'
import Text from '../../components/fundation/Text'
import TextField from '../../components/Forms/TextField'
import Button from '@material-ui/core/Button'

import { Content, FormMessageWrapper } from './styles'

function FormContent () {
  const [, setIsFormSubmited] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: ''
  })

  function handleChange (event: any) {
    const fieldName = event.target.getAttribute('name')
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value

    })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        setIsFormSubmited(true)
      }}

      style={{
        marginTop: '30px'
      }}
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
      >
        Seu Nome
      </Text>

      <TextField
        placeholder='Seu Nome'
        type='text'
        name='name'
        onChange={handleChange}
        value={userInfo.name}
      />
      <Text tag='span' color='purple'> Esse campo é necessário </Text>

      <Text
        variant='paragraph1'
        tag='h3'
        color='black'
      >
        Seu Email
      </Text>

      <TextField
        placeholder='Seu Email'
        type='text'
        name='email'
        onChange={handleChange}
        value={userInfo.email}
      />
      <Text tag='span' color='purple'> Esse campo é necessário </Text>

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
        maxLength={500}
        name='message'
        onChange={handleChange}
        value={userInfo.message}
      />
      <Text tag='span' color='purple'> Esse campo é necessário </Text>

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
