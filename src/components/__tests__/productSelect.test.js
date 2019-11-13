import React from 'react'
import { cleanup } from '@testing-library/react'
import ProductSelect from '../productSelect'
import renderWithRedux from '../../utils/renderWithRedux'

afterEach(cleanup)

const props = {
  options: [],
  products: [
    {
      short_description: "<p>Hello World</p>",
      acf: {
        product_lab_results: 'https://google.com/file.pdf',
      },
      product_variations: [
        { price: 10 }
      ]
    },
    {
      short_description: "<p>Hello World</p>",
      acf: {
        product_lab_results: 'https://google.com/file.pdf',
      },
      product_variations: [
        { price: 20 }
      ]
    }
  ]
}

it('renders', () => {

  const { getByTestId } = renderWithRedux(<ProductSelect {...props} />)
  expect(getByTestId('product-select')).toBeTruthy()
})
