import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"

const initialState = {
  user: {
    username: "janedoe",
    email: "janedoe@gmail.com",
    displayName: "Jane Doe",
    token: "13453468",
  },
  cart: [
    {
      product_id: 27,
      quantity: 1,
      variation_id: 30,
    },
    {
      product_id: 31,
      quantity: 1,
      variation_id: 32,
    },
  ],
}

function reducer(state = initialState) {
  return state
}

function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  }
}

export default renderWithRedux
