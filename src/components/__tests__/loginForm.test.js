import React from "react"
import { cleanup } from "@testing-library/react"
import LoginForm from "../loginForm"
import renderWithRedux from "../../utils/renderWithRedux"

afterEach(cleanup)

it("renders", () => {
  const script = document.createElement("script")
  script.type = "text/javascript"
  document.getElementsByTagName("head")[0].appendChild(script)
  const { getByTestId } = renderWithRedux(<LoginForm />)
  expect(getByTestId("login-form")).toBeTruthy()
})
