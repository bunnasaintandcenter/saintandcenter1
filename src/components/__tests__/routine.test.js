import React from "react"
import { render, cleanup } from "@testing-library/react"
import { PureRoutine as Routine } from "../routine"

afterEach(cleanup)

const data = {
  file: {
    childImageSharp: {
      fluid: {
        base64:
          "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHoouQckf/EABoQAQABBQAAAAAAAAAAAAAAAAEQAAIRITH/2gAIAQEAAQUCt4brEAEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAARAgIf/aAAgBAQAGPwKMC//EABgQAQEBAQEAAAAAAAAAAAAAAAERABAh/9oACAEBAAE/IRMcZ9Y1SBWs5//aAAwDAQACAAMAAAAQOO//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxCI/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARMUFhUf/aAAgBAQABPxAhQWjDs5B7XPH2FGJphqFW/WO5P//Z",
        tracedSVG:
          "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='267'%3e%3cpath%20d='M0%2082v81h13l18-1%206-1h-5c-3%200-4%200-2-1%203%200%203-8%201-8s-2-2-2-16c0-17%200-17-2-19-3-2-3-3-3-7l1-6%201-8c0-6%200-8%202-8l1-4-1-4c-2%200-2-1-2-4s0-4%202-4l1-8V54c1-1%203-1%203%201l1%201%201-8c0-6%200-8%202-8l1-4c0-3%200-4%202-4l1-4c0-3%200-4-2-4s-2%200-1-1l2-2%201%202%201%201%201-4c0-3%200-4%202-4l1-5c-1-4%200-4%203-7%207-4%207-4-21-4H0v82m187-16c-8%204-10%2016-4%2027%204%206%207%206%2012%202l4-2%201-4-2-13c0-10-3-13-11-10m48%2035c-9%202-9%202-11%209-1%207-1%2012%202%2014%202%201%203%201%203-1h1c0%202%201%202%204%201l3%201c-1%202%204%201%208%200%203-2%205-4%208-10l2-4-3-4c-4-7-6-8-17-6m-83%204c-4%203-6%2011-4%2014l2%204c0%208%207%2013%2016%2013%207-1%208-2%2012-10%202-4%204-6%205-6l-2-1-9-7c-10-9-15-11-20-7m35%2047c-6%201-7%202-7%205%201%203%200%204-1%204-1%201-2%2018%200%2021s7%205%2021%205c13%200%2015-1%2027-5%202%200-1-2-7-2-2%200-2%200-2-8%200-7%200-9-2-10l-1-3c1-4%200-6-3-6-4-1-21-2-25-1'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
        aspectRatio: 1.4985014985014986,
        src: "/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/ff8f0/humans.jpg",
        srcSet:
          "/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/ac242/humans.jpg 250w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/c0a45/humans.jpg 500w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/ff8f0/humans.jpg 1000w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/f59b1/humans.jpg 1500w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/8604f/humans.jpg 2000w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/6f15d/humans.jpg 3000w",
        srcWebp: "/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/36ebb/humans.webp",
        srcSetWebp:
          "/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/1d872/humans.webp 250w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/4e6d4/humans.webp 500w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/36ebb/humans.webp 1000w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/fd45d/humans.webp 1500w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/6e77b/humans.webp 2000w,\n/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/5e6ce/humans.webp 3000w",
        sizes: "(max-width: 1000px) 100vw, 1000px",
        originalImg:
          "/static/e4d53b338a0cfd9e637ca0bcaa7e37fd/6f15d/humans.jpg",
        originalName: "humans.jpg",
        presentationWidth: 1000,
        presentationHeight: 667,
      },
    },
  },
}

it("renders", () => {
  const { getByTestId } = render(<Routine data={data} />)
  expect(getByTestId("routine")).toBeTruthy()
})
