import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Carousel from '../carousel'

afterEach(cleanup)

it('renders', () => {
  const { getByTestId } = render(<Carousel />)
  expect(getByTestId('carousel')).toBeTruthy()
})
