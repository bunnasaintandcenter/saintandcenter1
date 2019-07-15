import React from 'react'
import Button from '../button'
import { render, fireEvent } from '@testing-library/react'

it('renders', () => {
  const { getAllByTestId } = render(<Button />)
  expect(getAllByTestId('button')).toHaveLength(1)
});

it('renders given text', () => {
  const { getByTestId } = render(<Button>Hello World</Button>)
  expect(getByTestId('button')).toHaveTextContent('Hello World')
});

it('renders ghost button correctly', () => {
  const props = {
    ghost: true
  }
  const { getByTestId } = render(<Button {...props}>Hello World</Button>)
  expect(getByTestId('button')).toHaveStyle(`color: white`)
  expect(getByTestId('button')).toHaveStyle(`border-color: white`)
});

it('correctly fires onClick', () => {
  const onClick = jest.fn()
  const { getByTestId } = render(<Button onClick={onClick}>Hello World</Button>)
  fireEvent.click(getByTestId('button'))
  expect(onClick).toHaveBeenCalledTimes(1)
});
