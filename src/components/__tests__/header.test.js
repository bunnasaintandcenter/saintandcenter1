import React from "react"
import Header from "../header"
import renderWithRedux from "../../utils/renderWithRedux"
import { cleanup } from "@testing-library/react"

afterEach(cleanup)

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
