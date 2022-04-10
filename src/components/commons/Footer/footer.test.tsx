import { FormCadastro } from '../../patterns/FormCadastro'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../test-utils'
/**
 * @jest-environment jsdom
 */

test('testando formulário', async () => {
  const onSubmit = jest.fn()
  render(<FormCadastro onSubmit={onSubmit} />)
  const user = userEvent.setup()

  await user.type(screen.getByTestId('name'), 'Jonh')
  await user.type(screen.getByTestId('assunto'), 'Qualquer assunto')
  await user.type(screen.getByTestId('email'), 'maximus@meridius.com')
  await user.type(screen.getByTestId('mensagem'), 'Mensagem enviada')

  await user.click(screen.getByRole('button', { name: 'Submeter' }))

  await waitFor(async () => {
    expect(onSubmit).toBeCalledTimes(1)
  })
})
