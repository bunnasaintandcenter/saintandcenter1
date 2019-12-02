import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import ProductListSelect from "../components/productListSelect"

const Wrapper = styled.div``

const Image = styled.div`
  height: 75vh;
  background: #d1cece;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .gatsby-image-wrapper {
    height: 100%;
  }

  img {
    height: 100%;
    object-fit: cover;
    margin-bottom: 0 !important;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h4 {
    font-weight: 300;
    font-size: 1.5vw;
    line-height: 3vw;
    padding: 4rem 4rem 0 4rem;
  }
`

const InfoToggle = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 24px;
  appearance: none;
  border: 0;
  outline: 0;
  background: transparent;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const InfoOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  padding: 5vw;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  pointer-events: none;

  h4 {
    opacity: ${props => (props.open ? 1 : 0)};
    position: relative;
    z-index: 2;
    font-weight: normal;
    font-size: 24px;
    line-height: 1.4em;
    transition-delay: 0.3s;
    transition: 0.2s all ease-in-out;
  }

  .background {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgb(248, 249, 244);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: 0.3s all ease-in-out;
    transform: ${props => (props.open ? `scale(100)` : `scale(0)`)};
  }
`

const Details = styled.div`
  padding: 1rem 0;
  font-size: 18px;
  border-bottom: 1px solid rgb(51, 51, 51);

  a {
    color: rgb(51, 51, 51);
    text-decoration: none;
    text-align: center;
    display: block;
  }
`

const ProductListBlock = ({ product, updateCart }) => {
  const { description, products } = product
  const [infoShown, setInfoShown] = useState(false)

  let images = []

  if (products && products.length > 0) {
    images = products[1].images
  }

  return (
    <Wrapper>
      <Image>
        <Img
          key={images[0].localFile.childImageSharp.fluid.src}
          fluid={images[0].localFile.childImageSharp.fluid}
        />
        <InfoToggle onClick={() => setInfoShown(!infoShown)}>
          {infoShown ? <span>X</span> : <span>?</span>}
        </InfoToggle>
        <InfoOverlay open={infoShown}>
          <h4>{description}</h4>
          <div className="background" />
        </InfoOverlay>
      </Image>
      <Info>
        {products && products.length > 0 && (
          <ProductListSelect
            id={products[0].id}
            updateCart={updateCart}
            options={products[0].product_variations}
            products={products}
          />
        )}
      </Info>
      <Details>
        <Link to={`/shop/product/${product.slug}`}>View Details</Link>
      </Details>
    </Wrapper>
  )
}

export default ProductListBlock
