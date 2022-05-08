import { FormCadastro } from '../../patterns/FormCadastro'
import { waitFor } from '@testing-library/react'
import { render } from '../../test-utils'
import userEvent from '@testing-library/user-event'

describe('testando formulário', () => {
  test('Adicionando items corretamente', async () => {
    const onSubmit = jest.fn()
    const { getByTestId, getByText } = render(<FormCadastro onSubmit={onSubmit} />)

    await userEvent.type(getByTestId('name'), 'Jonh')
    await userEvent.type(getByTestId('assunto'), 'Qualquer assunto')
    await userEvent.type(getByTestId('email'), 'maximus@meridius.com')
    await userEvent.type(getByTestId('mensagem'), 'Mensagem enviada')

    await userEvent.click(getByText('Submeter'))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })
  })

  it('Detectar erro por email', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByTestId } = render(<FormCadastro onSubmit={onSubmit} />)

    await userEvent.type(getByTestId('name'), 'Gabriela')
    await userEvent.type(getByTestId('assunto'), 'Qualquer assunto')
    await userEvent.type(getByTestId('email'), 'maximusmeridius.com')
    await userEvent.type(getByTestId('mensagem'), 'Mensagem enviada')

    await userEvent.click(getByText('Submeter'))

    await waitFor(() => {
      expect(getByText('Preencha o email apropriadamente')).toBeInTheDocument()
    })
  })

  it('Detectar erro por message', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByTestId } = render(<FormCadastro onSubmit={onSubmit} />)

    await userEvent.type(getByTestId('name'), 'Jonh')
    await userEvent.type(getByTestId('assunto'), 'Qualquer assunto')
    await userEvent.type(getByTestId('email'), 'maximus@meridius.com')

    await userEvent.click(getByText('Submeter'))

    await waitFor(() => {
      expect(getByText('Preencha a mensagem apropriadamente')).toBeInTheDocument()
    })
  })

  it('Detectar erro por message', async () => {
    const onSubmit = jest.fn()
    const { getByText, getByTestId } = render(<FormCadastro onSubmit={onSubmit} />)

    await userEvent.type(getByTestId('name'), 'Max')
    await userEvent.type(getByTestId('email'), 'maximus@meridius.com')
    await userEvent.type(getByTestId('mensagem'), 'Mensagem enviada')

    await userEvent.click(getByText('Submeter'))

    await waitFor(() => {
      expect(getByText('Preencha o assunto apropriadamente'))
        .toBeInTheDocument()
    })
  })
})
