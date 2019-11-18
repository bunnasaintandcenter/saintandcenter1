import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Insta from '../insta'

afterEach(cleanup)

it('renders', () => {

  const { getByTestId } = render(<Insta />)
  expect(getByTestId('instafeed')).toBeTruthy()
})
