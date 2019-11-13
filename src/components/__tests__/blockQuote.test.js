import React from 'react'
import { render, cleanup } from '@testing-library/react'
import BlockQuote from '../blockQuote'

afterEach(cleanup)

it('renders', () => {

  const { getByTestId } = render(<BlockQuote color='#FFF'><p>Hello World</p></BlockQuote>)
  expect(getByTestId('blockquote')).toBeTruthy()
})
