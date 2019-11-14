import React from "react"
import { render, cleanup } from "@testing-library/react"
import Signup from "../signup"

afterEach(cleanup)

it("renders", () => {
  const { getByTestId } = render(<Signup />)
  expect(getByTestId("signup")).toBeTruthy()
})
