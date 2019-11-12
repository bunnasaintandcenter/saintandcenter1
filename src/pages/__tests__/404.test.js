import React from 'react'
import NotFoundPage from '../404.js'
import { StaticQuery } from 'gatsby'
import renderWithRedux from '../../utils/renderWithRedux'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

it('renders', () => {
  const { getAllByTestId } = renderWithRedux(<NotFoundPage />)
  expect(getAllByTestId('404')).toHaveLength(1)
});
