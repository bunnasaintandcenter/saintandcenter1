import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Menu from '../menu'

afterEach(cleanup)

it('renders', () => {

  const { getByTestId } = render(<Menu />)
  expect(getByTestId('menu')).toBeTruthy()
})
