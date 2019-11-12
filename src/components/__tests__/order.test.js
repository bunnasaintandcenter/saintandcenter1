import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Order from '../order'

afterEach(cleanup)

it('renders', () => {

  const props = {
    id: '123',
    date: ,
    total: 42,
    status: 'processing',
    lineItems: [{"lorem": "ipsum"}]
  }

  const { getByTestId } = render(<Order {...props} />)
  expect(getByTestId('order')).toBeTruthy()
})
