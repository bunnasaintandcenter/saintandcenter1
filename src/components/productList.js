import React from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./product"

const Wrapper = styled.div`
  @media ${device.laptop} {
    height: 70vh;
  }
`

const ProductGrid = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
  }
`

const ProductList = () => {
  const data = useStaticQuery(graphql`
    query ProductListQuery {
      allWcProductsCategories(
        sort: { fields: menu_order }
        filter: { wordpress_id: { nin: [25, 15] } }
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
                    fluid(maxWidth: 1000, quality: 80) {
                      src
                    }
                  }
                }
              }
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 85) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <ProductGrid>
        {data.allWcProductsCategories.edges.slice(0, 3).map(product => (
          <Product
            image={product.image}
            key={product.node.wordpress_id}
            {...product.node}
          />
        ))}
      </ProductGrid>
    </Wrapper>
  )
}

export default ProductList
