import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  height: 33.3vw;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #E1D6D6;
  position: relative;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:nth-child(even){
    background: #D1CECE;
  }

  .product-image {
    width: 15vw;
    height: 20vw;
    object-fit: contain;
    align-self: center;
    margin: auto 0;

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
    font-size: 1vw;
    margin: 0;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
`;

const Product = ({name, image, slug}) => {
  return (
    <Wrapper>
      <Link to={`/shop/product/${slug}`}></Link>
      {image && <Img className='product-image' fluid={image.localFile.childImageSharp.fluid} />}
      <Info>
        <h2>{name}</h2>
        <h3>$100</h3>
      </Info>
    </Wrapper>
  )
}

export default Product;
