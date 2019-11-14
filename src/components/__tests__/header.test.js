import React from "react"
import Header from "../header"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { render, cleanup } from "@testing-library/react"

afterEach(cleanup)

const startingState = {
  cart: [{ id: 1 }, { id: 2 }],
  user: {
    username: "janedoe",
    email: "janedoe@gmail.com",
    displayName: "Jane Doe",
    token: "13453468",
  },
}

// function reducer(state = startingState, action) {
//   return state
// }

function reducer(state = startingState) {
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

describe("Header", () => {
  it("renders", () => {
    const { getByTestId } = renderWithRedux(<Header cart={[]} />)
    expect(getByTestId("header")).toBeTruthy()
  })

  it("renders cart button", () => {
    const { getByTestId } = renderWithRedux(<Header cart={[]} />)
    expect(getByTestId("cart-button")).toBeTruthy()
  })
})
