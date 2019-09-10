import React from 'react'
import Layout from '../components/layout'
import { StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Product from '../components/product'

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Shop = ({}) => (
  <StaticQuery
    query={graphql`
      query ShopQuery {
        allWcProducts {
          edges {
            node {
              sku
              name
              wordpress_id
              description
              variations {
                price
                attributes {
                  option
                }
                sku
                id
              }
            }
          }
        }
      }
    `}
    render={(data) => (
    <Layout>
      <ProductGrid>
        {data.allWcProducts.edges.map(product => (
          <Product {...product.node} />
        ))}
      </ProductGrid>
    </Layout>
  )} />
);

export default Shop;
