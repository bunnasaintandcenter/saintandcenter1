import React from "react"
import { render, cleanup } from "@testing-library/react"
import Subscribe from "../subscribe"

afterEach(cleanup)

it("renders", () => {
  const { getByTestId } = render(<Subscribe />)
  expect(getByTestId("subscribe")).toBeTruthy()
})
