import React from 'react'
import Hero from '../hero'
import { render, fireEvent } from '@testing-library/react'

it('renders', () => {
  const { getAllByTestId } = render(<Hero title='Hello World' />)
  expect(getAllByTestId('hero')).toHaveLength(1)
});

it('renders the title', () => {
  const { getByTestId } = render(<Hero title='Hello World' />)
  expect(getByTestId('title')).toHaveTextContent('Hello World')
});

it('renders the subtitle', () => {
  const { getByTestId } = render(<Hero title='Hello World' subtitle='foo bar' />)
  expect(getByTestId('subtitle')).toHaveTextContent('foo bar')
});
