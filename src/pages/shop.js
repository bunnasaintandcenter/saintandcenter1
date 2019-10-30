import React from 'react'
import Layout from '../components/layout'
import SectionHeader from '../components/sectionHeader'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Product from '../components/product'
import SEO from '../components/seo'
import { isBrowser } from 'react-device-detect'
import Benefits from '../components/benefits'
import { device } from '../utils/devices'

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Shop = () => (
  <StaticQuery
    query={graphql`
      query ShopQuery {
        allWcProductsCategories(sort: {fields: menu_order}, filter: {wordpress_id: {ne: 29}}) {
          edges {
            node {
              wordpress_id
              name
              slug
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
    `}
    render={(data) => (
    <Layout>
      <SEO title='Shop | Saint and Center' />
      <SectionHeader title='Shop / Products' />
      <ProductGrid>
        {data.allWcProductsCategories.edges.slice(0,5).map(product => (
          <Product key={product.node.wordpress_id} {...product.node} />
        ))}
      </ProductGrid>
      {isBrowser &&
        <Benefits />
      }
    </Layout>
  )} />
);

export default Shop;
