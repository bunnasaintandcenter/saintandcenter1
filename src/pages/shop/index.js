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
  margin-top: 56px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Shop = ({ location }) => (
  <StaticQuery
    query={graphql`
      query ShopQuery {
        allWcProductsCategories(
          sort: { fields: menu_order }
          filter: { wordpress_id: { ne: 25 } }
        ) {
          edges {
            node {
              wordpress_id
              name
              slug
              products {
                price
                product_variations {
                  price
                  id
                }
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
                      ...GatsbyImageSharpFluid_withWebp
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
        {typeof window !== "undefined" && isBrowser && <Benefits />}
      </Layout>
    )}
  />
)

export default Shop
