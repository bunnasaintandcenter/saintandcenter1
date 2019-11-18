import React, { Fragment, useState, createRef } from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import { device } from "../utils/devices"
import { isMobile } from "react-device-detect"
import { FiArrowRight } from "react-icons/fi"
import ProductListBlock from "./productListBlock"

const Wrapper = styled.section`
  margin: 0 auto 4rem;
`

const List = styled.ul`
  list-style: none;
  font-size: 30px;
  font-weight: 300;
  padding: 0;
  margin: 0;

  @media ${device.laptop} {
    font-size: 48px;
  }
`

const Item = styled.li`
  border-bottom: 2px solid black;
  display: flex;
  align-items: baseline;
  cursor: pointer;
  margin: 0;
  justify-content: space-between;

  a {
    display: flex;
    align-items: baseline;
    cursor: pointer;
    justify-content: space-between;
    text-decoration: none;
    color: rgb(51, 51, 51);
  }

  &:last-of-type {
    border: 0;

    @media ${device.laptop} {
      justify-content: center;
      align-items: center;

      a {
        justify-content: center;
        display: flex;
      }

      h2 {
        font-size: 24px;
        padding: 2rem 0;

        &:hover {
          padding: 2rem 0;
        }
      }
    }
  }

  .expandable {
    font-size: 18px;

    span {
      font-size: 24px;
    }
  }

  h2 {
    font-size: 30px;
    font-weight: normal;
    padding: 2rem;
    margin: 0;
    transition: 0.2s all ease-in-out;
    text-transform: uppercase;

    @media ${device.laptop} {
      font-size: 48px;
    }

    &:hover {
      padding-left: 4.5vw;
    }
  }

  svg {
    padding: 2rem;
  }

  &:after {
    content: ${props => (props.after ? props.after : "")};
  }
`

const ProductList = () => {
  const [current, setCurrent] = useState(null)

  const refs = []

  const handleClick = index => {
    if (current === index) {
      console.log("clearing current")
      setCurrent(null)
    } else {
      setCurrent(index)
      if (current !== null) {
        console.log("current exists")
        if (index < current) {
          console.log("going up!")
          window.scrollTo({
            left: 0,
            top: refs[index].current.offsetTop,
            behavior: "smooth",
          })
        } else {
          console.log("going down!")
          window.scrollTo({
            left: 0,
            top:
              refs[index].current.offsetTop -
              (window.innerHeight - window.innerWidth * 0.1),
            behavior: "smooth",
          })
        }
      } else {
        window.scrollTo({
          left: 0,
          top: refs[index].current.offsetTop,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allWcProductsCategories(sort: { fields: menu_order }) {
            edges {
              node {
                wordpress_id
                name
                description
                slug
                menu_order
                products {
                  id
                  wordpress_id
                  sku
                  name
                  acf {
                    product_lab_results {
                      url
                    }
                    bulk_cbd_lab_results {
                      url
                    }
                  }
                  images {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1500, quality: 80) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  description
                  short_description
                  product_variations {
                    attributes {
                      option
                    }
                    price
                    sku
                    id
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Wrapper>
          <List>
            {data.allWcProductsCategories.edges
              .slice(0, 3)
              .map(({ node }, index) => {
                const ref = createRef()

                refs[index] = ref

                return (
                  <Fragment key={node.wordpress_id}>
                    <Item ref={ref} onClick={() => handleClick(index)}>
                      <h2>{node.name}</h2>
                      <h2>
                        ${node.products[1].product_variations[0].price}
                        {node.products[1].product_variations.length > 1 && `+`}
                      </h2>
                    </Item>
                    {current === index && <ProductListBlock product={node} />}
                  </Fragment>
                )
              })}
            <Item>
              <Link to="/shop">
                <h2>View All</h2>
                {isMobile && <FiArrowRight />}
              </Link>
            </Item>
          </List>
        </Wrapper>
      )}
    />
  )
}

export default ProductList
