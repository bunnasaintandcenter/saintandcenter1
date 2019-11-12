import React from 'react'
import Announcement from '../announcement'
import { render, fireEvent, cleanup } from '@testing-library/react'

afterEach(cleanup)

it('renders', () => {
  const onClick = jest.fn()
  const { getAllByTestId } = render(<Announcement text='Hello World' toggle={onClick} />)
  expect(getAllByTestId('announcement')).toHaveLength(1)
});

it('renders given text', () => {
  const onClick = jest.fn()
  const { getByTestId } = render(<Announcement text='Hello World' toggle={onClick} />)
  expect(getByTestId('announcement-text')).toHaveTextContent('Hello World')
});

it('correctly fires onClick', () => {
  const onClick = jest.fn()
  const { getByTestId } = render(<Announcement text='Hello World' toggle={onClick}/>)
  fireEvent.click(getByTestId('announcement-close'))
  expect(onClick).toHaveBeenCalledTimes(1)
});
