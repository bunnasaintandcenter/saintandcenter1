import React from "react"
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

const ImageHero = ({ src, alt }) => (
  <Div100vh>
    <Wrapper>
      <img src={src} alt={alt} />
    </Wrapper>
  </Div100vh>
)

export default ImageHero
