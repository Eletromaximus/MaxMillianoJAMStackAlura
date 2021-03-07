import React, { useState } from 'react'
import Text from '../../components/fundation/Text'
import TextField from '../../components/Forms/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '../../components/fundation/layout/Grid'
import { Box } from '../../components/fundation/layout/Box'

// const formStates = {
//   DEFAULT: 'DEFAULT',
//   LOADING: 'LOADING',
//   DONE: 'DONE',
//   ERROR: 'ERROR'
// }

function FormContent () {
  const [, setIsFormSubmited] = useState(false)
  // const [, setSubmissionStates] = useState(formStates.DEFAULT)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: ''
  })

  function handleChange (event: any) {
    const fieldName = event.target.getAttribute('name')
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value

    })
  }

  const isFomInvalid = userInfo.name.length === 0 || userInfo.email.length === 0
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        setIsFormSubmited(true)
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
      <div>
        <TextField
          placeholder='Seu Nome'
          type='text'
          name='name'
          onChange={handleChange}
          value={userInfo.name}
        />
      </div>

      <Text
        variant='paragraph1'
        tag='h3'
        color='black'
      >
        Seu Email
      </Text>

      <div>
        <TextField
          placeholder='Seu Email'
          type='text'
          name='email'
          onChange={handleChange}
          value={userInfo.email}
        />
      </div>

      <Text
        variant='paragraph1'
        tag='h3'
        color='black'
      >
        Sua Mensagem
      </Text>
      <textarea>

      </textarea>

      <Button
        type='submit'
        disabled={isFomInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

    </form>
  )
}

export default function FormCadastro ({ propsDoModal }: any) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent='center'
    >
      <Grid.Col
        display='flex'
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow='-10px 0px 24px rgba(7, 12, 14, 0.1)'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          flex={1}
          height='50%'
          padding={{
            xs: '16px',
            md: '85px'
          }}
          backgroundColor='white'
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>

  )
}
