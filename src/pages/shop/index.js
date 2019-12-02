import React from "react"
import Layout from "../../components/layout"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Product from "../../components/product"
import SEO from "../../components/seo"
import { isBrowser } from "react-device-detect"
import Benefits from "../../components/benefits"
import { device } from "../../utils/devices"

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Shop = ({ location }) => (
  <StaticQuery
    query={graphql`
      query ShopQuery {
        allWcProductsCategories(
          sort: { fields: menu_order }
          filter: { wordpress_id: { ne: 29 } }
        ) {
          edges {
            node {
              wordpress_id
              name
              slug
              products {
                price
                images {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1500, quality: 80) {
                        src
                      }
                    }
                  }
                }
              }
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
    render={data => (
      <Layout location={location}>
        <SEO title="Shop | Saint and Center" />
        <ProductGrid>
          {data.allWcProductsCategories.edges.slice(0, 3).map(product => (
            <Product
              image={product.image}
              key={product.node.wordpress_id}
              {...product.node}
            />
          ))}
        </ProductGrid>
        {isBrowser && <Benefits />}
      </Layout>
    )}
  />
)

export default Shop
