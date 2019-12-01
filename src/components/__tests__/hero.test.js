import React from "react"
import Hero from "../hero"
import { ThemeProvider } from "styled-components"
import { render, fireEvent } from "@testing-library/react"

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

it("renders", () => {
  const { getAllByTestId } = render(
    <ThemeProvider theme={theme}>
      <Hero title="Hello World" />
    </ThemeProvider>
  )
  expect(getAllByTestId("hero")).toHaveLength(1)
})
