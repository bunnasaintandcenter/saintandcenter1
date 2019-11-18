import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Benefits from '../benefits'

afterEach(cleanup)

it('renders', () => {

  const { getByTestId } = render(<Benefits />)
  expect(getByTestId('benefits')).toBeTruthy()
})
