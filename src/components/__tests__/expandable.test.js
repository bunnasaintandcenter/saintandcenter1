import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Expandable from '../expandable'

afterEach(cleanup)

it('renders', () => {

  const { getByTestId } = render(<Expandable />)
  expect(getByTestId('expandable')).toBeTruthy()
})
