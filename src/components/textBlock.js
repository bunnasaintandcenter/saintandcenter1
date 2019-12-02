import React, { forwardRef } from "react"
import styled from "styled-components"
import Div100vh from "react-div-100vh"
import { device } from "../utils/devices"

const Block = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 2rem;
  background: black;
  color: white;
  height: 100%;
  box-sizing: border-box;
  text-transform: uppercase;

  @media ${device.laptop} {
    font-size: 24px;
  }

  h2 {
    font-size: 30px;
    font-weight: 300;
    line-height: 36px;

    @media ${device.laptop} {
      font-size: 60px;
      font-weight: 300;
      line-height: 72px;
    }
  }

  strong {
    font-size: 30px;
    font-weight: 500;

    @media ${device.laptop} {
      font-size: 48px;
    }
  }
`

const TextBlock = forwardRef(({ children }, ref) => (
  <Div100vh>
    <Block data-testid="text-block" ref={ref}>
      {children}
    </Block>
  </Div100vh>
))

export default TextBlock
