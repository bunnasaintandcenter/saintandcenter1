import React from 'react'
import Carousel from './carousel'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ProductCarousel = () => (
  <StaticQuery
    query={graphql`
      query {
        allWcProductsCategories(sort: {fields: menu_order}, limit: 3) {
          edges {
            node {
              products {
                name
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
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
       <Carousel arrows bg='#E1D6D6'>
         {data.allWcProductsCategories.edges.map(({node}) => <img src={node.products[1].images[0].localFile.childImageSharp.fluid.src} alt={node.products[1].name} />)}
       </Carousel>
      )
    }}
  />
)

export default ProductCarousel;
