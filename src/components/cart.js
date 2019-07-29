import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery } from 'gatsby'
import Button from './button'

const Wrapper = styled.div`
  padding: calc(3vw + 2rem + 6px) 0 0;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: -300px;
  width: 300px;
  z-index: 999999;
  transition: 0.2s all ease-in-out;
  transform: ${props => props.open ? `translate(-300px, 0)` : `translate(0,0)`};
`;

const Tray = styled.div`
  background: rgb(51,51,51);
  border: 2px solid rgb(51,51,51);
  padding: 2rem;
  color: rgb(248,249,244);

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding-bottom: 1rem;
      border-bottom: 2px solid rgb(51,51,51);

      &:last-of-type {
        border: 0;
        padding-bottom: 2rem;
      }
    }
  }

  button {
    width: 100%;
  }
`;

const Cart = ({ cart, open, handleSubmit }) => {
  return (
    <StaticQuery
      query={graphql`
        query CartQuery {
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
        <Wrapper open={open}>
          <Tray>
            <h4>Your Cart</h4>
            <ul>
            {cart.map(item => {
              const { name, variations }= data.allWcProducts.edges.find(o => o.node.wordpress_id === item.product_id).node
              const { price } = variations.find(o => o.id === item.variation_id)
              return (
                <li key={name}>
                  <p>{name}</p>
                  <p>x{item.quantity} — ${(item.quantity * price).toFixed(2)}</p>
                </li>
              )
            })}
            </ul>
            <Link to='/cart'><Button ghost>View Cart</Button></Link>
          </Tray>
        </Wrapper>
      )}
    />
  )
}

export default Cart;
