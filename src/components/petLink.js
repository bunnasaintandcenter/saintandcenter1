import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import treats from "../images/treats.jpg"

const Wrapper = styled.div`
  position: relative;

  h2 {
    position: absolute;
    color: white;
    top: 1.5rem;
    left: 1.5rem;
    font-weight: 300;
    z-index: 1;
    text-transform: uppercase;
    font-size: 24px;
  }

  img {
    width: 100%;
    height: 50vw;
    object-fit: cover;
    display: block;
    margin: 0;
  }
`

const PetLink = () => (
  <Wrapper>
    <Link to="/shop/pets">
      <h2>CBD for Pets</h2>
      <img src={treats} alt="Pet Products" />
    </Link>
  </Wrapper>
)

export default PetLink
