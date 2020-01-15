import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import { device } from "../utils/devices"
import { isBrowser } from "react-device-detect"
import Img from "gatsby-image"
import SEO from "../components/seo"
import ProductSelect from "../components/productSelect"

const Wrapper = styled.div`
  padding-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Image = styled.div`
  min-height: ${props => (props.main ? `50vh` : `50vw`)};
  background: #d1cece;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  grid-column: ${props => (props.full ? `span 2` : `auto`)};

  @media ${device.laptop} {
    min-height: 80vh !important;
  }

  .gatsby-image-wrapper {
    min-height: ${props => (props.main ? `60vh` : `50vw`)};

    @media ${device.laptop} {
      min-height: 80vh !important;
    }
  }

  img {
    height: 100%;
    object-fit: cover !important;
    margin-bottom: 0 !important;
    display: block;
    width: 150% !important;
    height: 150% !important;
    transform: translate(0, -12.5%);

    @media ${device.laptop} {
      width: 100% !important;
      height: 100% !important;
      transform: none;
    }
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  grid-column: span 2;

  @media ${device.laptop} {
    min-height: 80vh;
    grid-column: span 1;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 24px;
    margin: 0;

    @media ${device.laptop} {
      font-size: 1.5vw;
      line-height: 3vw;
    }
  }
`

const Category = ({ pageContext, updateCart, location }) => {
  const { name, description, products } = pageContext

  let images = []

  if (products && products.length > 0) {
    images = products[1].images
  }

  return (
    <Layout location={location}>
      <SEO title={`${name} | Saint and Center`} />
      <Wrapper full={typeof window !== "undefined" && isBrowser ? false : true}>
        <Image
          main
          full={typeof window !== "undefined" && isBrowser ? false : true}
        >
          {images[1] && (
            <Img fluid={images[1]?.localFile.childImageSharp.fluid} />
          )}
        </Image>
        <Info>
          <h4>{description}</h4>
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
                  ...GatsbyImageSharpFluid_withWebp
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
