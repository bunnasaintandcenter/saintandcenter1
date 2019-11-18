import React from 'react'
import { render, cleanup } from '@testing-library/react'
import SectionHeader from '../sectionHeader'

afterEach(cleanup)

const products = [
  {price: 42},
  {price: 23}
]

it('renders', () => {
  const { getByTestId } = render(<SectionHeader title='' />)
  expect(getByTestId('section-header')).toBeTruthy()
})

it('renders title', () => {
  const { getByTestId } = render(<SectionHeader title='Hello World' />)
  expect(getByTestId('section-header-title')).toHaveTextContent('Hello World')
})

it('renders secondary', () => {
  const { getByTestId } = render(<SectionHeader title='Hello World' secondary='Lorem Ipsum' />)
  expect(getByTestId('section-header-secondary')).toHaveTextContent('Lorem Ipsum')
})
