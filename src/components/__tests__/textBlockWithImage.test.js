import React from "react"
import { render, cleanup } from "@testing-library/react"
import TextBlockWithImage from "../textBlockWithImage"

afterEach(cleanup)

it("renders", () => {
  const { getByTestId } = render(<TextBlockWithImage />)
  expect(getByTestId("text-block-w-image")).toBeTruthy()
})
