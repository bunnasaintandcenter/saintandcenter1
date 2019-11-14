import React from "react"
import { cleanup } from "@testing-library/react"
import ShippingForm from "../shippingForm"
import renderWithRedux from "../../utils/renderWithRedux"

afterEach(cleanup)

const address = {
  first_name: "Foo",
  last_name: "Bar",
}

it("renders", () => {
  const { getByTestId } = renderWithRedux(<ShippingForm address={address} />)
  expect(getByTestId("shipping-form")).toBeTruthy()
})
