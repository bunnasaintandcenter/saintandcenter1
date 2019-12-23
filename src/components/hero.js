import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import { Link } from "gatsby"
import { isMobile } from "react-device-detect"
import arrow from "../images/down.svg"

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
    max-width: 80vw;

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
      background-position: 0 95%, 100% 100%, 0 95%;
    }

    @media ${device.laptop} {
      font-size: calc(24px + ((100vw - 320px) * 0.02868));
      line-height: 1.35em;
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

const Arrow = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  background: url(${arrow});
  background-position: center bottom;
  width: 20vw;
  height: 72px;
  transform: translate(-50%, 0);
  cursor: pointer;
  z-index: 3;
  text-transform: uppercase;
  background-repeat: no-repeat;

  span {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 24px;
    display: block;
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
  background-position: 0 95%, 100% 100%, 0 95%;
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
      ref.current.style.transform = `translateZ(0) translateY(-${window.scrollY}px)`
    } else if (window.scrollY < window.innerHeight * 2) {
      console.log(window.innerHeight)
      ref.current.style.transform = `translateZ(0) translateY(-100%})`
    } else {
      ref.current.style.transform = `translateZ(0) translateY(-${window.scrollY -
        window.innerHeight}px)`
    }
  }
  useScrollHandler(handler)
  return <div ref={ref} {...props} />
}

const Hero = ({ handlePageScroll }) => {
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
            Saint and Center is about connections. Your mind to your body. You
            to the world. We also extract, infuse and bottle pure CBD from hemp.
            Learn about{" "}
            <PageLink onClick={() => handlePageScroll("hemp")}>hemp</PageLink>{" "}
            and{" "}
            <PageLink onClick={() => handlePageScroll("human")}>
              our cause
            </PageLink>{" "}
            to help communities affected by cannabis laws. Or{" "}
            <Link to="/shop">shop CBD.</Link>
          </h2>
        )}
        <Arrow onClick={() => handlePageScroll("shop")}>
          {!isMobile && <span>Welcome to your revival</span>}
        </Arrow>
      </Wrapper>
    </Curtain>
  )
}
export default Hero
