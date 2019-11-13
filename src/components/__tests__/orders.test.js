import React from 'react'
import Orders from '../orders.js'
import renderWithRedux from '../../utils/renderWithRedux'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Orders', () => {
  it('renders', () => {
    const { getAllByTestId } = renderWithRedux(<Orders />)
    expect(getAllByTestId('orders')).toHaveLength(1)
  });
})
