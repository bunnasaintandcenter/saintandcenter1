import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { device } from "../utils/devices"
import arrow from "../images/arrow-right.svg"

const Wrapper = styled.div`
  height: 70vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e1d6d6;
  position: relative;

  @media ${device.laptop} {
    height: auto;

    &:hover {
      .hover-image {
        opacity: 1;
      }
    }
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .hover-image {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: 0.2s all ease-in-out;

    img {
      object-fit: cover !important;
      object-position: center center !important;
      margin: 0;
    }
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    align-self: center;
    margin: auto 0;
    pointer-events: none;

    img {
      object-fit: cover !important;
      object-position: center bottom !important;
      margin: 0;
    }
  }
`

const Info = styled.div`
  position: absolute;
  left: 24px;
  top: 22px;
  justify-self: end;
  z-index: 2;

  h2,
  h3 {
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
    font-size: 18px;
    line-height: 18px;
  }

  h2 {
    margin-bottom: 0;
  }
`
const Action = styled.div`
  position: absolute;
  point-events: none;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  text-transform: uppercase;
  padding: 22px 24px;
  line-height: 18px;
  font-weight: 300;
  z-index: 2;

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

const Product = ({ name, image, slug, products }) => (
  <Wrapper data-testid="product">
    <Info>
      <h2 data-testid="product-name">{name}</h2>
      <h3 data-testid="product-price">${products && products[1].price}</h3>
    </Info>
    <Link to={`/shop/product/${slug}`}></Link>
    {image && (
      <Img
        className="product-image"
        fluid={image.localFile.childImageSharp.fluid}
      />
    )}
    {products && products[1] && products[1].images[1] && (
      <Img
        className="hover-image"
        fluid={products[1].images[1].localFile.childImageSharp.fluid}
      />
    )}
    <Action>View</Action>
  </Wrapper>
)

export default Product
