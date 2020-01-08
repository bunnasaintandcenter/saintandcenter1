import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../utils/devices"

const Wrapper = styled.div`
  position: relative;
  grid-area: pets;
  background: ${props => props.theme.color.brown};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;

  @media ${device.laptop} {
    height: auto;
  }

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
  font-size: 18px;
  font-weight: 100;
  position: absolute;
  color: white;
  top: 24px;
  left: 24px;

  @media ${device.laptop} {
    font-size: 24px;
  }
`

const Bottom = styled.div`
  font-weight: 300;
  z-index: 1;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 100;
  position: absolute;
  color: white;
  bottom: 24px;
  left: 24px;

  @media ${device.laptop} {
    font-size: 24px;
  }
`

const Heading = styled.div`
  color: white;
  text-transform: uppercase;

  h2 {
    margin: 0;
    font-size: 24px;

    @media ${device.laptop} {
      font-size: 48px;
    }
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
