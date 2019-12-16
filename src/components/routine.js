import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  grid-area: sub;
  box-sizing: border-box;
  padding: 24px;

  h2 {
    top: 24px;
    left: 24px;
    font-weight: 300;
    z-index: 1;
    text-transform: uppercase;
    font-size: 24px;
    margin: 0 0 24px;
  }

  h3 {
    font-weight: 200;
    font-size: 51px;
    line-height: 72px;
    margin: 0;
  }
`

const Routine = () => (
  <Wrapper>
    <h2>Start a routine</h2>
    <h3>
      Subscribe with 15% off your order. You control the delivery date and
      cancellation. We ship it to you, free.
    </h3>
  </Wrapper>
)

export default Routine
