import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import humans from "../images/humans.jpg"

const Wrapper = styled.div`
  position: relative;
  grid-area: pets;

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
      <h2>CBD for humans</h2>
      <img src={humans} alt="Human Products" />
    </Link>
  </Wrapper>
)

export default PetLink
