import React, { useState } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import { device } from '../utils/devices'
import { isMobile } from 'react-device-detect'
import { FiArrowRight } from 'react-icons/fi'
import ProductListBlock from './ProductListBlock'

const Wrapper = styled.section`
  margin: 0 auto 4rem;
`;

const List = styled.ul`
  list-style: none;
  font-size: 30px;
  font-weight: 300;
  padding: 0;
  margin: 0;

  @media ${device.laptop}{
    font-size: 48px;
  }
`;

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
    color: rgb(51,51,51);
  }

  &:last-of-type {
    border: 0;

    @media ${device.laptop}{
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

    @media ${device.laptop}{
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
    content: ${props => props.after ? props.after : ''};
  }
`;

const ProductList = ({updateCart}) => {

  const [current, setCurrent] = useState(null)

  return (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allWcProductsCategories(sort: {fields: menu_order}) {
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
                images {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1500, quality: 80) {
                        src
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
    render={(data) => (
      <Wrapper>
        <List>
          {data.allWcProductsCategories.edges.slice(0,3).map(({node}) => {
            return (
              <>
                <Item
                  key={node.wordpress_id}
                  onClick={() => current === node.wordpress_id ? setCurrent(null) : setCurrent(node.wordpress_id)}
                >
                  <h2>{node.name}</h2>
                  <h2>${node.products[1].product_variations[0].price}{node.products[1].product_variations.length > 1 && `+` }</h2>
              </Item>
              {current === node.wordpress_id &&
                <ProductListBlock
                  product={node}
                  updateCart={updateCart}
                />
              }
              </>
            )
          }
          )}
          <Item>
            <Link to='/shop'>
            <h2>View All</h2>
            {isMobile && <FiArrowRight />}
            </Link>
          </Item>
        </List>
      </Wrapper>
    )}
  />
  )
};

export default ProductList;
