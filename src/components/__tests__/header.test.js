import React from 'react'
import Header from '../header'
import { render, fireEvent } from '@testing-library/react'

it('renders', () => {
  const { getAllByTestId } = render(<Header />)
  expect(getAllByTestId('header')).toHaveLength(1)
});
