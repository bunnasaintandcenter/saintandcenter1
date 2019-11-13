import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Product from '../product'

afterEach(cleanup)

const products = [
  {price: 42},
  {price: 23}
]

it('renders', () => {
  const { getByTestId } = render(<Product products={products} />)
  expect(getByTestId('product')).toBeTruthy()
})

it('renders name', () => {
  const { getByTestId } = render(<Product name='Hello World' products={products} />)
  expect(getByTestId('product-name')).toHaveTextContent('Hello World')
})

it('renders price', () => {
  const { getByTestId } = render(<Product products={products} />)
  expect(getByTestId('product-price')).toHaveTextContent('$23')
})
