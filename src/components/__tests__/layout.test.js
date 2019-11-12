import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Layout from '../layout'
import renderWithRedux from '../../utils/renderWithRedux'

afterEach(cleanup)

it('renders', () => {
  const { getByTestId } = renderWithRedux(<Layout>Hello World</Layout>)
  expect(getByTestId('layout')).toBeTruthy()
})
