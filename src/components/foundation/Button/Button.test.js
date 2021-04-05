import React from 'react'
import Button from './index'
import renderer from 'react-test-renderer'

describe('button style with and without href', () => {
  test('it applies default styles button without href', () => {
    const tree = renderer.create(<Button variant='paragraph1' />).toJSON()

    expect(tree).toMatchSnapshot()
  // expect(tree).toHaveStyleRule('font-size', '1.75rem')
  // expect(tree).toHaveStyleRule('font-weight', '400')
  // expect(tree).toHaveStyleRule(
  //   'font-family',
  //   'Fira Sans Condensed,sans-serif'
  // )
  })
  // eslint-disable-next-line jest/no-commented-out-tests
  // test('it applies default styles button with href', () => {
  //   const tree = renderer.create(<Button variant='paragraph1' href='/' />).toJSON()

  //   expect(tree).toMatchSnapshot()
  // // expect(tree).toHaveStyleRule('font-size', '1.75rem')
  // // expect(tree).toHaveStyleRule('font-weight', '400')
  // // expect(tree).toHaveStyleRule(
  // //   'font-family',
  // //   'Fira Sans Condensed,sans-serif'
  // // )
  // })
})
