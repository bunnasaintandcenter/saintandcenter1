import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  grid-area: pets;
  background: ${props => props.theme.color.brown};
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 50vw;
    object-fit: cover;
    display: block;
    margin: 0;
  }
`

const Top = styled.div`
  font-weight: 300;
  z-index: 1;
  text-transform: uppercase;
  font-size: 24px;
  position: absolute;
  color: white;
  top: 24px;
  left: 24px;
`

const Bottom = styled.div`
  font-weight: 300;
  z-index: 1;
  text-transform: uppercase;
  font-size: 24px;
  position: absolute;
  color: white;
  bottom: 24px;
  left: 24px;
`

const Heading = styled.div`
  color: white;
  text-transform: uppercase;

  h2 {
    margin: 0;
    font-size: 48px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`

const PetLink = () => (
  <Wrapper className="petLink">
    <Link to="/shop/pets">
      <Top>Explore More</Top>
      <Heading>
        <h2>Saint and Center</h2>
        <div>
          <h2>For</h2>
          <h2>Pets</h2>
        </div>
      </Heading>
      <Bottom>Visit</Bottom>
    </Link>
  </Wrapper>
)

export default PetLink
