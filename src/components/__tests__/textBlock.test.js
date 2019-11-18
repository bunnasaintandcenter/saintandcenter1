import React from "react"
import { render, cleanup } from "@testing-library/react"
import TextBlock from "../textBlock"

afterEach(cleanup)

it("renders", () => {
  const { getByTestId } = render(<TextBlock />)
  expect(getByTestId("text-block")).toBeTruthy()
})
