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
    min-height: ${props => (props.main ? `50vh` : `50vw`)};

    @media ${device.laptop} {
      min-height: 80vh !important;
    }
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
  grid-column: span 2;

  @media ${device.laptop} {
    min-height: 80vh;
    grid-column: span 1;
  }

  h4 {
    font-weight: 300;
    font-size: 1.5vw;
    line-height: 3vw;
    padding: 24px;
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
          {typeof window !== "undefined" && isBrowser && <h4>{description}</h4>}
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
