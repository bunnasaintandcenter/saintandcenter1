import React from "react"
import Layout from "../../components/layout"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Product from "../../components/product"
import SEO from "../../components/seo"
import { isBrowser } from "react-device-detect"
import Benefits from "../../components/benefits"
import Div100vh from "react-div-100vh"

const Hero = styled.div`
  background: ${props => props.theme.color.brown};
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  h2 {
    font-size: 5vw;
  }

  div {
    display: flex;
    width: 46vw;
    justify-content: space-between;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Shop = ({ location }) => (
  <StaticQuery
    query={graphql`
      query ShopPetQuery {
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
        {typeof document !== "undefined" && (
          <Div100vh>
            <Hero>
              <h2>Saint and Center</h2>
              <div>
                <h2>For</h2>
                <h2>Pets</h2>
              </div>
            </Hero>
          </Div100vh>
        )}
        <SEO title="For Pets | Saint and Center" />
        <ProductGrid>
          {data.allWcProductsCategories.edges.slice(3, 5).map(product => (
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
