import React from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./product"

const Wrapper = styled.div``

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ProductList = () => {
  const data = useStaticQuery(graphql`
    query ProductListQuery {
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
