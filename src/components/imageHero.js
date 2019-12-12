import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import Img from "gatsby-image"

const Wrapper = styled.section`
  position: relative;

  .gatsby-image-wrapper {
    height: 100vh;
  }

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 0;
  }
`

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  h2 {
    color: white;
    font-size: 57px;
    font-weight: 300;
    text-align: center;
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
