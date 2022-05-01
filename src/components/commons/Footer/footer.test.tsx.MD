import { FormCadastro } from '../../patterns/FormCadastro'
import { fireEvent } from '@testing-library/react'
import { render } from '../../test-utils'
import { act } from 'react-dom/test-utils'
/**
 * @jest-environment jsdom
 */

test('testando formulário', async () => {
  const onSubmit = jest.fn()
  const { getByTestId, getByRole } = render(<FormCadastro onSubmit={onSubmit} />)

  await act(async () => {
    fireEvent.change(
      getByTestId('assunto'), {
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
