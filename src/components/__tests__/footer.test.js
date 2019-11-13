import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Footer from '../Footer'

afterEach(cleanup)

it('renders', () => {

  const { getByTestId } = render(<Footer />)
  expect(getByTestId('footer')).toBeTruthy()
})
