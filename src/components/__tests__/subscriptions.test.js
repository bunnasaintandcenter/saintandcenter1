import React from "react"
import { render, cleanup } from "@testing-library/react"
import Subscriptions from "../subscriptions"

afterEach(cleanup)

it("renders", () => {
  const { getByTestId } = render(<Subscriptions />)
  expect(getByTestId("subscriptions")).toBeTruthy()
})
