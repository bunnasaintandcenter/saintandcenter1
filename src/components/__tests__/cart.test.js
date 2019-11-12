import React from 'react'
import { PureCart as Cart } from '../cart.js'
import { StaticQuery } from 'gatsby'
import renderWithRedux from '../../utils/renderWithRedux'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

it('renders', () => {
  const { getAllByTestId } = renderWithRedux(<Cart cart={[]} />)
  expect(getAllByTestId('cart')).toHaveLength(1)
});
