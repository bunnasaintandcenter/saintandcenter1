import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import arrow from "../images/arrow-right.svg"
import { device } from "../utils/devices"

const HumanLinkWrapper = styled.div`
  grid-area: pets;
  box-sizing: border-box;
  position: relative;
  height: 60vh;

  @media ${device.laptop} {
    height: auto;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 6;
  }

  .gatsby-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;

    img {
      margin: 0;
      height: 130% !important;

      @media ${device.laptop} {
        height: 100% !important;
      }
    }
  }
`

const RoutineAction = styled.div`
  position: absolute;
  pointer-events: none;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  text-transform: uppercase;
  padding: 22px 24px;
  line-height: 18px;
  font-weight: 300;
  font-size: 24px;
  z-index: 2;
  color: black;

  &:after {
    content: "";
    position: absolute;
    right: 24px;
    background: url(${arrow});
    background-size: 100%;
    width: 35px;
    height: 22px;
    background-repeat: no-repeat;
  }
`

const RoutineTop = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: calc(100% - 24px);
  z-index: 5;

  h2 {
    font-weight: 300;
    z-index: 1;
    text-transform: uppercase;
    font-size: 24px;
    margin: 0 0 12px;

    @media ${device.laptop} {
      margin: 0 0 24px;
      font-size: 24px;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    margin: 0;
    width: calc(100% - 24px);

    @media ${device.laptop} {
      font-size: 18px;
    }
  }
`

export const PureHumanLink = ({ data }) => (
  <HumanLinkWrapper data-testid="routine">
    <RoutineTop>
      <h2>Start a routine</h2>
      <h3>
        Subscribe with 15% off your order. You control the delivery date and
        cancellation. We ship it to you, free.
      </h3>
    </RoutineTop>
    <Img fluid={data && data.file.childImageSharp.fluid} />
    <Link to="/shop">
      <RoutineAction>Shop</RoutineAction>
    </Link>
  </HumanLinkWrapper>
)

export const HumanLink = () => {
  const data = useStaticQuery(graphql`
    query HumanLinkQuery {
      file(relativePath: { eq: "human-rites-logo.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `)

  return (
    <HumanLinkWrapper data-testid="routine" data={data}>
      <RoutineTop>
        <h2>CBD for humans</h2>
      </RoutineTop>
      <Img fluid={data && data.file.childImageSharp.fluid} />
      <Link to="/shop">
        <RoutineAction>Shop</RoutineAction>
      </Link>
    </HumanLinkWrapper>
  )
}

export default HumanLink
