import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import Div100vh from "react-div-100vh"
import { Link } from "gatsby"

const Wrapper = styled.div`
  height: -webkit-fill-available;
  justify-content: center;
  align-items: center;
  padding: 5vw;
  background: ${props => props.theme.color.gold};
  background-size: cover;
  background-position: center center;
  color: white;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  opacity: 0;
  display: flex;

  @media ${device.laptop} {
    height: 100%;
  }

  h2 {
    font-size: 24px;
    font-weight: 300;
    position: relative;
    z-index: 1;
    letter-spacing: 0.1em;
    margin-bottom: 4rem;

    a {
      color: white;
      text-decoration: none;
      border-bottom: 3px solid currentColor;
      text-shadow: 2px 2px ${props => props.theme.color.gold},
        2px -2px ${props => props.theme.color.gold},
        -2px 2px ${props => props.theme.color.gold},
        -2px -2px ${props => props.theme.color.gold};
    }

    @media ${device.laptop} {
      font-size: 54px;
      line-height: 72px;
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
    if (window.scrollY < window.innerHeight) {
      ref.current.style.transform = `translateZ(0) translateY(0)`
    } else if (window.scrollY < window.innerHeight * 3) {
      ref.current.style.transform = `translateZ(0) translateY(-${window.scrollY -
        window.innerHeight -
        window.innerHeight}px)`
    } else {
      ref.current.style.transform = `translateZ(0) translateY(-${window.innerHeight}px)`
    }
  }
  useScrollHandler(handler)
  return <div ref={ref} {...props} />
}

const Hero = () => {
  const innerRef = useRef()
  const handler = () => {
    if (window.scrollY < window.innerHeight) {
      innerRef.current.style.opacity = Math.abs(
        window.scrollY / window.innerHeight
      )
    } else {
      innerRef.current.style.opacity = 1
    }
  }
  useScrollHandler(handler)
  return (
    <>
      {typeof document !== "undefined" && (
        <Div100vh>
          <Curtain className="curtain second">
            <Wrapper data-testid="hero" ref={innerRef}>
              <h2>
                Saint and Center is about connections.
                <br /> Your mind to your body. You to the world.
                <br /> We also extract, infuse and bottle pure
                <br /> CBD from hemp. Learn about hemp and
                <br /> our cause to help communities affected by
                <br /> cannabis laws. Or <Link to="/shop">shop CBD.</Link>
              </h2>
            </Wrapper>
          </Curtain>
        </Div100vh>
      )}
    </>
  )
}
export default Hero
