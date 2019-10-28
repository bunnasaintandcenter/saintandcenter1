import React from 'react'
import Banner from '../banner'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

it('renders', () => {

  const props = {
    image: 'https://image.com/img.jpg'
  }

  const { getAllByTestId } = render(<Banner {...props} />)
  expect(getAllByTestId('banner')).toHaveLength(1)
});

it('renders title', () => {

  const props = {
    title: 'Hello World',
    image: 'https://image.com/img.jpg'
  }

  const { getByTestId } = render(<Banner {...props} />)
  expect(getByTestId('banner')).toHaveTextContent('Hello World')
});
