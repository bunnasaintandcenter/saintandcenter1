import React, { useEffect, useRef } from "react"
import Div100vh from "react-div-100vh"
import styled from "styled-components"

const Wrapper = styled.section`
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 0;
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
    } else if (window.scrollY < window.innerHeight * 2) {
      ref.current.style.transform = `translateZ(0) translateY(-${window.scrollY -
        window.innerHeight}px)`
    } else {
      ref.current.style.transform = `translateZ(0) translateY(-${window.innerHeight}px)`
    }
  }
  useScrollHandler(handler)
  return <div ref={ref} {...props} />
}

const ImageHero = ({ src, alt }) => (
  <Curtain className="curtain second">
    <Div100vh>
      <Wrapper>
        <img src={src} alt={alt} />
      </Wrapper>
    </Div100vh>
  </Curtain>
)

export default ImageHero
