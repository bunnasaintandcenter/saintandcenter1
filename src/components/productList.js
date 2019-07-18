import React, { useState } from 'react'
import styled from 'styled-components'
import ProductListBlock from './productListBlock'
import { StaticQuery } from 'gatsby'
import { device } from '../utils/devices'

const Wrapper = styled.section`
  margin: 4rem auto;
`;

const List = styled.ul`
  border-top: 2px solid black;
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
  flex-direction: column;

  h2 {
    font-size: 30px;
    font-weight: normal;
    padding: 2rem 5vw;
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

  &:after {
    content: ${props => props.after ? props.after : ''};
  }
`;

const ProductList = ({updateCart}) => {

  const [ selected, select ] = useState('');

  // const handleSelect = (product) => {
  //   if(selected === ''){
  //     select(product)
  //   } else {
  //     select('')
  //   }
  // }

  return (
  <StaticQuery
    query={graphql`
      query MyQuery {
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
      <Wrapper>
        <List>
          {data.allWcProducts.edges.map(({node}) => (
            <Item
              key={node.wordpress_id}
              selected={selected === node.wordpress_id}
              onClick={() => select(node.wordpress_id)}
            >
              <h2>{node.name}</h2>
              {selected === node.wordpress_id &&
                <ProductListBlock
                  title={node.name}
                  info={node.info}
                  id={node.wordpress_id}
                  color={`#${node.sku}`}
                  phrases={node.phrases}
                  updateCart={updateCart}
                  description={node.description}
                  options={node.variations}
                />
              }
            </Item>
          ))}
          <Item><h2>View All</h2></Item>
        </List>
      </Wrapper>
    )}
  />
  )
};

export default ProductList;
