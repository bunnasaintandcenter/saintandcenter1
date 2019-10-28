import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Nav from '../nav'

afterEach(cleanup)

const startingState = {
  user: {
    username: 'janedoe',
    email: 'janedoe@gmail.com',
    displayName: 'Jane Doe'
  },
  cart: [
    {id: 1},
    {id: 2}
  ]
}

function reducer(state = startingState, action){
  return state
}

function renderWithRedux(
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

it('renders', () => {
  const { getByTestId } = renderWithRedux(<Nav />)
  expect(getByTestId('nav')).toBeTruthy()
})

it('renders cart number correctly', () => {
  const { getByTestId } = renderWithRedux(<Nav />)
  expect(getByTestId('cart-count')).toHaveTextContent('(2)')
})
