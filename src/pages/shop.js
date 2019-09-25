import React from 'react'
import Layout from '../components/layout'
import SectionHeader from '../components/sectionHeader'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Product from '../components/product'
import Benefits from '../components/benefits'

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Shop = ({}) => (
  <StaticQuery
    query={graphql`
      query ShopQuery {
        allWcProductsCategories {
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
      <SectionHeader title='Shop / Products' />
      <ProductGrid>
        {data.allWcProductsCategories.edges.slice(0,3).map(product => (
          <Product key={product.node.wordpress_id} {...product.node} />
        ))}
      </ProductGrid>
      <Benefits />
    </Layout>
  )} />
);

export default Shop;
