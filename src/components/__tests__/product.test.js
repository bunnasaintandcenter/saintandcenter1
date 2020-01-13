import React from "react"
import { render, cleanup } from "@testing-library/react"
import Product from "../product"

afterEach(cleanup)

const products = [
  {
    price: 42,
    images: [
      {
        localFile: {
          childImageSharp: {
            fluid: {
              src: `https://google.com/1.jpg`,
            },
          },
        },
      },
      {
        localFile: {
          childImageSharp: {
            fluid: {
              src: `https://google.com/1.jpg`,
            },
          },
        },
      },
    ],
  },
  {
    price: 23,
    product_variations: [{ price: 110 }],
    images: [
      {
        localFile: {
          childImageSharp: {
            fluid: {
              src: `https://google.com/1.jpg`,
            },
          },
        },
      },
      {
        localFile: {
          childImageSharp: {
            fluid: {
              src: `https://google.com/1.jpg`,
            },
          },
        },
      },
    ],
  },
]

const productsWithVariablePrice = [
  {
    price: 42,
    images: [
      {
        localFile: {
          childImageSharp: {
            fluid: {
              src: `https://google.com/1.jpg`,
            },
          },
        },
      },
      {
        localFile: {
          childImageSharp: {
            fluid: {
              src: `https://google.com/1.jpg`,
            },
          },
        },
      },
    ],
  },
  {
    price: 23,
    product_variations: [{ price: 110 }, { price: 65 }],
    images: [
      {
        localFile: {
          childImageSharp: {
            fluid: {
              src: `https://google.com/1.jpg`,
            },
          },
        },
      },
      {
        localFile: {
          childImageSharp: {
            fluid: {
              src: `https://google.com/1.jpg`,
            },
          },
        },
      },
    ],
  },
]

it("renders", () => {
  const { getByTestId } = render(<Product products={products} />)
  expect(getByTestId("product")).toBeTruthy()
})

it("renders name", () => {
  const { getByTestId } = render(
    <Product name="Hello World" products={products} />
  )
  expect(getByTestId("product-name")).toHaveTextContent("Hello World")
})

it("renders variable price", () => {
  const { getByTestId } = render(
    <Product products={productsWithVariablePrice} />
  )
  expect(getByTestId("product-price")).toHaveTextContent("$110 / 65")
})

it("renders variable price", () => {
  const { getByTestId } = render(<Product products={products} />)
  expect(getByTestId("product-price")).toHaveTextContent("$110")
})
