import React, { useState } from 'react'
import Text from '../../components/fundation/Text'
import TextField from '../../components/Forms/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '../../components/fundation/layout/Grid'
import { Box } from '../../components/fundation/layout/Box'

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR'
}

function FormContent () {
  const [, setIsFormSubmited] = useState(false)
  const [, setSubmissionStates] = useState(formStates.DEFAULT)
  const [userInfo, setUserInfo] = useState({
    usuario: '',
    username: ''
  })

  function handleChange (event: any) {
    const fieldName = event.target.getAttribute('name')
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value

    })
  }

  const isFomInvalid = userInfo.usuario.length === 0 || userInfo.username.length === 0
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        setIsFormSubmited(true)

        const userDTO = {
          username: userInfo.usuario,
          name: userInfo.username
        }

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'Post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userDTO)
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json()
            }
            throw new Error(' Não foi possível cadastrar o usuário agora :(')
          })
          .then(() => {
            setSubmissionStates(formStates.DONE)
          })
          .catch(() => {
            setSubmissionStates(formStates.ERROR)
          })
          .finally(() => {

          })
      }}
    >

      <Text
        variant='title'
        tag='h1'
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant='paragraph1'
        tag='p'
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder='Maximus'
          type='text'
          name='username'
          onChange={handleChange}
          value={userInfo.username}
        />
      </div>

      <div>
        <TextField
          placeholder='Max Milliano'
          type='text'
          name='usuario'
          onChange={handleChange}
          value={userInfo.usuario}
        />
      </div>

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
    <Grid.Row>
      <Grid.Col
        display='flex'
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow='-10px 0px 24px rgba(7, 12, 14, 0.1)'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          flex={1}
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
