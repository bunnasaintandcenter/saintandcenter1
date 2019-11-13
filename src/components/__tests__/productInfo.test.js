import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ProductInfo from '../productInfo'

afterEach(cleanup)

it('renders', () => {

  const { getByTestId } = render(<ProductInfo />)
  expect(getByTestId('product-info')).toBeTruthy()
})
