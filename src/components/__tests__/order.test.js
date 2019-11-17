import React from "react"
import { render, cleanup } from "@testing-library/react"
import Order from "../order"

afterEach(cleanup)

describe("Order", () => {
  const props = {
    id: 123,
    date: "January 01, 2019",
    total: "42.00",
    status: "processing",
    lineItems: [{ lorem: "ipsum" }],
  }

  it("renders", () => {
    const { getByTestId } = render(<Order {...props} />)
    expect(getByTestId("order")).toBeTruthy()
  })

  it("renders order id", () => {
    const { getByTestId } = render(<Order {...props} />)
    expect(getByTestId("order-id")).toHaveTextContent("123")
  })

  it("renders order total", () => {
    const { getByTestId } = render(<Order {...props} />)
    expect(getByTestId("order-total")).toHaveTextContent("$42.00")
  })

  it("renders order status", () => {
    const { getByTestId } = render(<Order {...props} />)
    expect(getByTestId("order-status")).toHaveTextContent("processing")
  })
})
