import React from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import arrow from "../images/down.svg"
import Div100vh from "react-div-100vh"

const Wrapper = styled.div`
  height: -webkit-fill-available;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 5vw;
  background: ${props => props.theme.color.gold};
  background-size: cover;
  background-position: center center;
  color: white;
  position: relative;
  box-sizing: border-box;

  @media ${device.laptop} {
    height: 100%;
  }

  h2 {
    font-size: 24px;
    font-weight: 300;
    position: relative;
    text-align: center;
    z-index: 1;
    margin-bottom: 4rem;

    @media ${device.laptop} {
      font-size: 60px;
      margin-bottom: 2rem;
    }
  }

  p {
    font-weight: 300;
    margin-top: 4rem;
    position: relative;
    z-index: 1;
  }

  .logotype {
    z-index: 1;
    width: 70vw;
    margin: 0 auto;

    @media ${device.laptop} {
      width: 20vw;
    }
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  a {
    position: relative;
    z-index: 1;
  }
`

const Hero = () => (
  <Div100vh>
    <Wrapper data-testid="hero">
      <h2>your higher self</h2>
      <h2>without the high</h2>
    </Wrapper>
  </Div100vh>
)
export default Hero
