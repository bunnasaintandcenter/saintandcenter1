import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import { Link } from "gatsby"
import { isMobile } from "react-device-detect"

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
    line-height: 36px;
    font-weight: 200;
    position: relative;
    z-index: 1;
    letter-spacing: 0.05em;
    margin-bottom: 4rem;

    @media ${device.laptop} {
      letter-spacing: 0.075em;
    }

    a {
      color: white;
      text-decoration: none;
      background: linear-gradient(#eeb805, #eeb805),
        linear-gradient(#eeb805, #eeb805), linear-gradient(#fff, #fff);
      background-size: 0.05em 2px, 0.05em 2px, 2px 2px;
      background-repeat: no-repeat, no-repeat, repeat-x;
      text-shadow: 0.03em 0 #eeb805, -0.03em 0 #eeb805, 0 0.03em #eeb805,
        0 -0.03em #eeb805, 0.06em 0 #eeb805, -0.06em 0 #eeb805, 0.09em 0 #eeb805,
        -0.09em 0 #eeb805, 0.12em 0 #eeb805, -0.12em 0 #eeb805, 0.15em 0 #eeb805,
        -0.15em 0 #eeb805;
      background-position: 0 95%, 100% 95%, 0 95%;
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

const PageLink = styled.span`
  cursor: pointer;
  background: linear-gradient(#eeb805, #eeb805),
    linear-gradient(#eeb805, #eeb805), linear-gradient(#fff, #fff);
  background-size: 0.05em 2px, 0.05em 2px, 2px 2px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  text-shadow: 0.03em 0 #eeb805, -0.03em 0 #eeb805, 0 0.03em #eeb805,
    0 -0.03em #eeb805, 0.06em 0 #eeb805, -0.06em 0 #eeb805, 0.09em 0 #eeb805,
    -0.09em 0 #eeb805, 0.12em 0 #eeb805, -0.12em 0 #eeb805, 0.15em 0 #eeb805,
    -0.15em 0 #eeb805;
  background-position: 0 95%, 100% 95%, 0 95%;
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
    <Curtain className="curtain second">
      <Wrapper data-testid="hero" ref={innerRef}>
        {isMobile ? (
          <h2>
            Saint and Center is
            <br /> about connections. Your
            <br /> mind to your body. You
            <br /> to the world. We also
            <br /> extract, infuse and bottle
            <br /> pure CBD from hemp.
            <br /> Learn about hemp and
            <br />
            our cause to help communities affected by
            <br />
            cannabis laws.
            <br /> Or <Link to="/shop">shop CBD.</Link>
          </h2>
        ) : (
          <h2>
            Saint and Center is about connections.
            <br /> Your mind to your body. You to the world.
            <br /> We also extract, infuse and bottle pure
            <br /> CBD from hemp. Learn about hemp and
            <br /> our cause to help communities affected by
            <br /> cannabis laws. Or <Link to="/shop">shop CBD.</Link>
          </h2>
        )}
      </Wrapper>
    </Curtain>
  )
}
export default Hero
