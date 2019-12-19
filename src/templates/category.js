import React, { useState } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import { device } from "../utils/devices"
import { isBrowser, isMobile } from "react-device-detect"
import Img from "gatsby-image"
import SEO from "../components/seo"
import ProductSelect from "../components/productSelect"

const Wrapper = styled.div`
  padding-top: 56px;
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const Image = styled.div`
  min-height: 80vh;
  background: #d1cece;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  grid-column: ${props => (props.full ? `span 2` : `auto`)};

  .gatsby-image-wrapper {
    min-height: 100%;
  }

  img {
    height: 100%;
    object-fit: cover !important;
    margin-bottom: 0 !important;
    display: block;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: calc(100vh - 10vw);

  @media ${device.laptop} {
    min-height: 80vh;
  }

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

const Category = ({ pageContext, updateCart, location }) => {
  const { name, description, products } = pageContext
  const [infoShown, setInfoShown] = useState(false)

  let images = []

  if (products && products.length > 0) {
    images = products[1].images
  }

  console.log(images.slice(2, 5))

  // const { image } = data.allWcProductsCategories.edges[0].node;

  return (
    <Layout location={location}>
      <SEO title={`${name} | Saint and Center`} />
      <Wrapper>
        <Image>
          {images[1] && (
            <Img fluid={images[1]?.localFile.childImageSharp.fluid} />
          )}
          {isMobile && (
            <InfoToggle onClick={() => setInfoShown(!infoShown)}>
              {infoShown ? <span>X</span> : <span>?</span>}
            </InfoToggle>
          )}
          {isMobile && (
            <InfoOverlay open={infoShown}>
              <h4>{description}</h4>
              <div className="background" />
            </InfoOverlay>
          )}
        </Image>
        <Info>
          {isBrowser && <h4>{description}</h4>}
          {products && products.length > 0 && (
            <ProductSelect
              id={products[0].id}
              updateCart={updateCart}
              options={products[0].product_variations}
              products={products}
            />
          )}
        </Info>
        {images.slice(2, 5).map((image, index) => (
          <Image key={index} full={index === 2}>
            <Img fluid={images[index + 2].localFile.childImageSharp.fluid} />
          </Image>
        ))}
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWcProductsCategories(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Category
