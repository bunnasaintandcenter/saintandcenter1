import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import Button from './button'
import { MdClose } from 'react-icons/md'

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
  transition: 0.2s all ease-in-out;
  max-height: ${props => props.open ? `999px` : `0` };
`;

const Tray = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: black;
  color: rgb(248,249,244);

  section {
    border-right: 2px solid white;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    button {
      border-left: 0;
      border-right: 0;
      font-size: 1.5rem;
      padding: 1.5rem;
    }
  }

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

const Row = styled.div`
  border-bottom: 2px solid white;
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  &:last-of-type {
    padding: 1.5rem 1rem;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  appearance: none;
  border: 0;
  background: transparent;
  color: white;
  outline: 0;
  font-size: 30px;
  cursor: pointer;
`;

const Cart = ({ cart, open, toggle, handleSubmit }) => {

  const cartTotal = (data) => {

    let initialValue = 0
    const sum = cart.reduce((acc, item) => {
      const { quantity } = item;
      const { variations }= data.allWcProducts.edges.find(o => o.node.wordpress_id === item.product_id).node
      const { price } = variations.find(o => o.id === item.variation_id)

      return acc + (price * quantity)
    }, initialValue)

    return sum
  }

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
            <section>
            <Row>
              <span>Cart</span>
              <span>Free Shipping Forever</span>
            </Row>
            {cart.map(item => {
              const { name, variations }= data.allWcProducts.edges.find(o => o.node.wordpress_id === item.product_id).node
              const { price } = variations.find(o => o.id === item.variation_id)
              return (
                <Row key={name}>
                  <span>{name}</span>
                  <span>${(item.quantity * price).toFixed(2)}</span>
                </Row>
              )
            })}
            <Row>
              <span>Subtotal</span>
              <span>${cartTotal(data).toFixed(2)}</span>
            </Row>
            </section>
            <aside>
              <Link to='/cart'><Button ghost>checkout</Button></Link>
            </aside>
          </Tray>
          <Close onClick={() => toggle()}><MdClose /></Close>
        </Wrapper>
      )}
    />
  )
}

export default Cart;
