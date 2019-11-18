import React from "react"
import SEO from "../seo.js"
import { useStaticQuery } from "gatsby"
import { render, cleanup, wait } from "@testing-library/react"

afterEach(cleanup)

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        author: "Jermaine",
        description: "Lorem ipsum",
        title: "Saint and Center",
      },
    },
  }))
})

it("renders", async () => {
  render(<SEO title="Test" />)
  await wait(() => expect(document.title).toEqual("Test | Saint and Center"))
})
