import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import Img from "gatsby-image"

const Wrapper = styled.section`
  position: relative;
  height: 100%;

  .gatsby-image-wrapper {
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 0;
  }
`

const Text = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.laptop} {
    top: 0;
    height: 100%;
    display: grid;
    grid-gap: 35vw;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  h2 {
    color: white;
    font-size: 30px;
    font-weight: 200;
    text-align: center;

    @media ${device.laptop} {
      font-size: 51px;
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
    if (window.scrollY < window.innerHeight) {
      ref.current.style.transform = `translateZ(0) translateY(-${window.scrollY}px)`
    } else {
      ref.current.style.transform = `translateZ(0) translateY(-${window.innerHeight}px)`
    }
  }
  useScrollHandler(handler)
  return <div ref={ref} {...props} />
}

const ImageHero = ({ img }) => {
  return (
    <Curtain className="curtain first">
      <Wrapper>
        <Img fluid={img.childImageSharp.fluid} />
        <Text>
          <h2>your higher self</h2>
          <h2>without the high</h2>
        </Text>
      </Wrapper>
    </Curtain>
  )
}

export default ImageHero
