import React from "react"
import { render, cleanup } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import Footer from "../Footer"

afterEach(cleanup)

const theme = {
  color: {
    gold: "rgb(239,181,8)",
    forest: "rgb(0,51,37)",
    green: "rgb(0, 162, 123)",
    crimson: "rgb(139,41,4)",
    eggplant: "rgb(38,33,97)",
    darkBlue: "rgb(38,33,97)",
    blue: "rgb(167,201,253)",
  },
}

// Mock Routine for now, routine has it's own test
jest.mock("../routine", () => {
  return {
    __esModule: true,
    A: true,
    default: () => {
      return <div></div>
    },
  }
})

it("renders", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  )
  expect(getByTestId("footer")).toBeTruthy()
})
