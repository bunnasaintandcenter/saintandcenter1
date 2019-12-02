import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { device } from "../utils/devices"

const Wrapper = styled.div`
  height: 50vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e1d6d6;
  position: relative;

  @media ${device.laptop} {
    height: auto;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    align-self: center;
    margin: auto 0;
    pointer-events: none;

    img {
      object-fit: contain !important;
      object-position: center bottom !important;
      margin: 0;
    }
  }
`

const Info = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;
  justify-self: end;

  h2,
  h3 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 3vw;
    margin: 0;

    @media ${device.laptop} {
      font-size: 1vw;
    }
  }

  h2 {
    margin-bottom: 0;
  }
`

const Product = ({ name, image, slug, products }) => {
  return (
    <Wrapper data-testid="product">
      <Link to={`/shop/product/${slug}`}></Link>
      {image && (
        <Img
          className="product-image"
          fluid={image.localFile.childImageSharp.fluid}
        />
      )}
      <Info>
        <h2 data-testid="product-name">{name}</h2>
        <h3 data-testid="product-price">${products[1].price}</h3>
      </Info>
    </Wrapper>
  )
}

export default Product
