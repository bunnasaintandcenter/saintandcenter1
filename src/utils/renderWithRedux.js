import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

const startingState = {
  cart: [
    {id: 1},
    {id: 2}
  ],
  user: {
    username: 'janedoe',
    email: 'janedoe@gmail.com',
    displayName: 'Jane Doe',
    token: '13453468'
  }
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

export default renderWithRedux
