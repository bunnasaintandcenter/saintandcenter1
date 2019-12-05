import React, { useRef, useEffect } from "react"
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
  opacity: 0;

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

const useScrollHandler = handler => {
  useEffect(() => {
    window.addEventListener("scroll", handler)
    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [])
}

const Curtain = props => {
  const ref = useRef()
  const handler = () => {
    if (window.scrollY < window.innerHeight * 5) {
      ref.current.style.transform = `translateZ(0) translateY(0)`
    } else if (window.scrollY < window.innerHeight * 6) {
      ref.current.style.transform = `translateZ(0) translateY(-${window.scrollY -
        window.innerHeight -
        window.innerHeight -
        window.innerHeight -
        window.innerHeight -
        window.innerHeight}px)`
    } else {
      ref.current.style.transform = `translateZ(0) translateY(-${window.innerHeight}px)`
    }
  }
  useScrollHandler(handler)
  return <div ref={ref} {...props} />
}

const TextBlock = ({ children }) => {
  const innerRef = useRef()
  console.log(innerRef.current)
  const handler = () => {
    if (window.scrollY > window.innerHeight * 4) {
      console.log("hey!")
      innerRef.current.style.opacity =
        Math.abs(window.scrollY - window.innerHeight * 3.5) / window.innerHeight
    }
  }
  useScrollHandler(handler)

  return (
    <Curtain className="curtain third">
      <Div100vh>
        <Block ref={innerRef} data-testid="text-block">
          {children}
        </Block>
      </Div100vh>
    </Curtain>
  )
}

export default TextBlock
