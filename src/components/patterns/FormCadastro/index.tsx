import React from 'react'
import Button from '@mui/material/Button'
import { useForm, SubmitHandler } from 'react-hook-form'

import { FormMessageWrapper } from './styles'

interface IForm{
  name: string,
  email: string,
  telefone?: string,
  assunto: string,
  mensagem: string,
}

interface ISubmit {
  onSubmit: SubmitHandler<IForm>
}

export function FormCadastro ({ onSubmit }: ISubmit) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>({
    defaultValues: {
      name: '',
      email: '',
      assunto: '',
      mensagem: ''
    }
  })

  return (
    <FormMessageWrapper
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor='name'>Nome</label>
      <input data-testid='name' {...register('name', {
        required: true,
        pattern: /([A-Z][a-z]* )?([A-Z][a-z]*)?/
      })}/>
      {errors.name?.type === 'pattern' &&
        <span>Preencha o nome apropriadamente</span>
      }

      <label htmlFor='email'>Email</label>
      <input data-testid='email' {...register('email', {
        required: true,
        pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
      })}/>
      {errors.email?.type === ('pattern' || 'required') &&
        <span>Preencha o email apropriadamente</span>
      }

      <label htmlFor='telefone'>telefone/whatsapp *</label>
      <input data-testid='telefone' {...register('telefone', {
        // eslint-disable-next-line no-useless-escape
        pattern: /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g
      })}/>
      {errors.telefone?.type === 'pattern' &&
        <span>Preencha o telefone apropriadamente</span>
      }

      <label htmlFor='assunto'>Assunto</label>
      <input data-testid='assunto' {...register('assunto', {
        required: true,
        maxLength: 100
      })} />
      {errors.assunto?.type === 'required' &&
        <span>Preencha o assunto apropriadamente</span>
      }

      <label htmlFor='mensagem'>Mensagem</label>
      <textarea data-testid='mensagem' {...register('mensagem', {
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
      <span>* preenchimento não obrigatório</span>
    </FormMessageWrapper>
  )
}
