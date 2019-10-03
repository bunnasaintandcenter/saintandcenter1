import React from 'react'
import SectionHeader from '../components/sectionHeader'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import ProductSelect from '../components/productSelect'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Image = styled.div`
  background: #D1CECE;
  display: flex;
  align-items: center;
  justify-content: center;

  .product-image {
    height: 60vh;
    width: 30vw;

    img {
      object-fit: contain !important;
    }
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  min-height: calc(100vh - 10vw);

  h4 {
    font-weight: 300;
    font-size: 1.5vw;
    line-height: 3vw;
    padding: 4rem 4rem 0 4rem;
  }
`;

const Category = ({ pageContext, updateCart, data }) => {

  const { name, description, products } = pageContext;

  const { image } = data.allWcProductsCategories.edges[0].node;

  return (
    <Layout>
      <SectionHeader title={`Shop / Products / ${name}`} />
      <SEO title={`${name} | Saint and Center`} />
      <Wrapper>
        <Image>
          {image && <Img className='product-image' fluid={image.localFile.childImageSharp.fluid} /> }
        </Image>
        <Info>
          <h4>{description}</h4>
          {products && products.length > 0 &&
            <ProductSelect
              id={products[0].id}
              updateCart={updateCart}
              options={products[0].variations}
              products={products}
            />
          }
        </Info>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWcProductsCategories(filter: {slug: {eq: $slug} }) {
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

export default Category;
