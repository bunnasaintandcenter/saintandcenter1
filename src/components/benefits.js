import React from "react"
import styled from "styled-components"
import usa from "../images/icon-usa.svg"
import organic from "../images/icon-organic.svg"
import tested from "../images/icon-tested.svg"
import gmo from "../images/icon-gmo.svg"
import zeroTHC from "../images/icon-zero-thc.svg"
import spectrum from "../images/icon-spectrum.svg"
import { device } from "../utils/devices"

const Wrapper = styled.section`
  display: grid;
  grid-column-gap: 5vw;
  grid-row-gap: 4rem;
  width: 90vw;
  grid-template-columns: repeat(2, 1fr);
  margin: 4rem auto;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5vw;
    width: 70vw;
    margin: 8rem auto;
  }
`

const Item = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 16px;

  @media ${device.laptop} {
    font-size: 18px;
  }

  img {
    margin: 0 auto 2rem;
    display: block;
    width: 10vw;

    @media ${device.laptop} {
      width: 3vw;
    }
  }
`

const benefits = [
  {
    title: "Made in USA",
    icon: usa,
  },
  {
    title: "Organically Grown",
    icon: organic,
  },
  {
    title: "Broad Spectrum",
    icon: spectrum,
  },
  {
    title: "No GMO",
    icon: gmo,
  },
  {
    title: "Zero THC",
    icon: zeroTHC,
  },
  {
    title: "3rd Party Tested",
    icon: tested,
  },
]

const Benefits = () => (
  <Wrapper data-testid="benefits">
    {benefits.map(item => (
      <Item key={item.title}>
        {item.icon && (
          <img src={item.icon} alt={item.title} title={item.title} />
        )}
        {item.title}
      </Item>
    ))}
  </Wrapper>
)

export default Benefits
