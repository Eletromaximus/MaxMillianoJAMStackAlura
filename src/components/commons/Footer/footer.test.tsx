import { FormCadastro } from '../../patterns/FormCadastro'
import { fireEvent } from '@testing-library/react'
import { render } from '../../test-utils'
import { act } from 'react-dom/test-utils'
/**
 * @jest-environment jsdom
 */

describe('testando formulário', () => {
  test('Adicionando items corretamente', async () => {
    const onSubmit = jest.fn()
    const { getByTestId, getByRole } = render(<FormCadastro onSubmit={onSubmit} />)

    await act(async () => {
      fireEvent.change(
        getByTestId('name'), {
          target: { value: 'Jonh' }
        })
      fireEvent.change(
        getByTestId('assunto'), {
          target: { value: 'Qualquer assunto' }
        })
      fireEvent.change(
        getByTestId('email'), {
          target: { value: 'maximus@meridius.com' }
        })
      fireEvent.change(
        getByTestId('mensagem'), {
          target: { value: 'Mensagem enviada' }
        })
    })

    await act(async () => {
      fireEvent.click(getByRole('button', { name: 'Submeter' }))
    })

    expect(onSubmit).toHaveBeenCalled()
  })

  it('Detectar erro por email', async () => {
    const onSubmit = jest.fn()
    const { getByTestId, getByRole, getByText } = render(<FormCadastro onSubmit={onSubmit} />)

    await act(async () => {
      fireEvent.change(
        getByTestId('name'), {
          target: { value: 'Jonh' }
        })
      fireEvent.change(
        getByTestId('assunto'), {
          target: { value: 'Qualquer assunto' }
        })
      fireEvent.change(
        getByTestId('email'), {
          target: { value: 'maximusmeridius.com' }
        })
      fireEvent.change(
        getByTestId('mensagem'), {
          target: { value: 'Mensagem enviada' }
        })
    })

    await act(async () => {
      fireEvent.click(getByRole('button', { name: 'Submeter' }))
    })

    expect(getByText('Preencha o email apropriadamente')).toBeInTheDocument()
  })

  it('Detectar erro por message', async () => {
    const onSubmit = jest.fn()
    const { getByTestId, getByRole, getByText } = render(<FormCadastro onSubmit={onSubmit} />)

    await act(async () => {
      fireEvent.change(
        getByTestId('name'), {
          target: { value: 'Jonh' }
        })
      fireEvent.change(
        getByTestId('assunto'), {
          target: { value: 'Qualquer assunto' }
        })
      fireEvent.change(
        getByTestId('email'), {
          target: { value: 'maximus@meridius.com' }
        })
    })

    await act(async () => {
      fireEvent.click(getByRole('button', { name: 'Submeter' }))
    })

    expect(getByText('Preencha o mensagem apropriadamente')).toBeInTheDocument()
  })

  it('Detectar erro por message', async () => {
    const onSubmit = jest.fn()
    const { getByTestId, getByRole, getByText } = render(<FormCadastro onSubmit={onSubmit} />)

    await act(async () => {
      fireEvent.change(
        getByTestId('name'), {
          target: { value: 'Max' }
        })
      fireEvent.change(
        getByTestId('assunto'), {
          target: { value: '' }
        })
      fireEvent.change(
        getByTestId('email'), {
          target: { value: 'maximus@meridius.com' }
        })
      fireEvent.change(
        getByTestId('mensagem'), {
          target: { value: 'Mensagem enviada' }
        })
    })

    await act(async () => {
      fireEvent.click(getByRole('button', { name: 'Submeter' }))
    })

    // expect(onSubmit).toHaveBeenCalled()
    expect(getByText('Preencha o assunto apropriadamente')).toBeInTheDocument()
  })
})
