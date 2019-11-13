import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { device } from '../utils/devices'

const Wrapper = styled.div`
  height: 50vw;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #E1D6D6;
  position: relative;

  @media ${device.laptop}{
    height: 33.3vw;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 400px){
    &:nth-of-type(3n + 1) {
      background: #D1CECE;
    }
  }

  @media ${device.laptop}{
    &:nth-child(even){
      background: #D1CECE;
    }
  }

  .product-image {
    width: 15vw;
    height: 20vw;
    object-fit: contain;
    align-self: center;
    margin: auto 0;
    pointer-events: none;

    img {
      object-fit: contain !important;
      object-position: center bottom !important;
      margin: 0;
    }
  }
`;

const Info = styled.div`
  justify-self: end;

  h2, h3 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 3vw;
    margin: 0;

    @media ${device.laptop}{
      font-size: 1vw;
    }
  }

  h2 {
    margin-bottom: 0.5rem;
  }
`;

const Product = ({name, image, slug, products}) => {
  return (
    <Wrapper data-testid='product'>
      <Link to={`/shop/product/${slug}`}></Link>
      {image && <Img className='product-image' fluid={image.localFile.childImageSharp.fluid} />}
      <Info>
        <h2 data-testid='product-name'>{name}</h2>
        <h3 data-testid='product-price'>${products[1].price}</h3>
      </Info>
    </Wrapper>
  )
}

export default Product;
