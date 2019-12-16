import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import arrow from "../images/arrow-right.svg"

const Wrapper = styled.div`
  grid-area: sub;
  box-sizing: border-box;
  padding: 24px;
  position: relative;

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

const Action = styled.div`
  position: absolute;
  point-events: none;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  text-transform: uppercase;
  padding: 22px 24px;
  line-height: 18px;
  font-weight: 300;
  font-size: 24px;
  z-index: 2;
  color: black;

  &:after {
    content: "";
    position: absolute;
    right: 24px;
    background: url(${arrow});
    background-size: 100%;
    width: 35px;
    height: 22px;
    background-repeat: no-repeat;
  }
`

const Routine = () => (
  <Wrapper>
    <h2>Start a routine</h2>
    <h3>
      Subscribe with 15% off your order. You control the delivery date and
      cancellation. We ship it to you, free.
    </h3>
    <Link to="/register">
      <Action>Sign Up</Action>
    </Link>
  </Wrapper>
)

export default Routine
