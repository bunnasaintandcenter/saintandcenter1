import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Button from './button'
import { MdClose } from 'react-icons/md'
import { device } from '../utils/devices'
import { useDispatch } from 'react-redux'
import { isBrowser } from 'react-device-detect'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
  transition: 0.2s all ease-in-out;
  max-height: ${props => props.open ? `9999px` : `0` };
`;

const Tray = styled.div`
  background: black;
  color: rgb(248,249,244);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.laptop}{
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  section {

    @media ${device.laptop}{
      border-right: 2px solid white;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 5vw;

    @media ${device.laptop}{
      padding: 0;
    }

    button {
      font-size: 1.5rem;
      padding: 1.5rem;

      @media ${device.laptop}{
        border-left: 0;
        border-right: 0;
      }
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

  span {
    &:first-of-type {
      margin-right: auto;
    }
  }

  .price {

    @media ${device.laptop}{
      min-width: 200px;
    }
  }

  span, div {
    display: flex;
    align-items: center;
  }

  .remove {
    margin-left: 2rem;
    cursor: pointer;
  }

  &:last-of-type {
    padding: 1.5rem 1rem;
    border: 0;

    @media ${device.laptop}{
      border-bottom: 2px solid white;
    }
  }
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-right: 2rem;

  @media ${device.laptop}{
    font-size: 16px;
  }

  span {
    width: 24px;
    height: 24px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.laptop}{
      width: 30px;
      height: 30px;
    }
  }

  button {
    cursor: pointer;
    width: 24px;
    height: 24px;
    border: 1px solid white;
    padding: 0;
    color: white;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    font-weight: 400;
    font-size: 16px;

    @media ${device.laptop}{
      width: 30px;
      height: 30px;
      font-size: 18px;
    }
  }
`;

const Close = styled.button`
  position: absolute;
  top: 2.5vw;
  right: 2.5vw;
  appearance: none;
  border: 0;
  background: transparent;
  color: white;
  outline: 0;
  font-size: 30px;
  cursor: pointer;

  @media ${device.laptop}{
    top: 2rem;
    right: 2rem;
  }
`;

export const PureCart = ({ data, cart, open, toggle }) => {

  const dispatch = useDispatch()

  const cartTotal = (data) => {

    let initialValue = 0
    const sum = cart.reduce((acc, item) => {
      const { quantity } = item;
      const { product_variations }= data.allWcProducts.edges.find(o => o.node.wordpress_id === item.product_id).node
      const { price } = product_variations.find(o => o.id === item.variation_id)

      return acc + (price * quantity)
    }, initialValue)

    return sum
  }

  const removeFromCart = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index })
  }

  const addToCount = (index, quantity) => {
    dispatch({ type: 'CHANGE_QUANTITY', payload: { index: index, quantity: quantity + 1 } })
  }

  const subtractfromCount = (index, quantity) => {
    dispatch({ type: 'CHANGE_QUANTITY', payload: { index: index, quantity: quantity - 1  } })
  }

  return (
    <Wrapper data-testid='cart' open={open} data-testid='cart'>
      <Tray>
        <section>
        <Row>
          <span>Cart</span>
          {isBrowser &&
            <span>Free Shipping Forever</span>
          }
        </Row>
        {cart.map((item, index) => {
          const { name, product_variations }= data.allWcProducts.edges.find(o => o.node.wordpress_id === item.product_id).node
          const { price } = product_variations.find(o => o.id === item.variation_id)
          return (
            <Row key={name}>
              <span>{name}</span>
              <Counter>
                <button disabled={item.quantity < 2} onClick={() => subtractfromCount(index, item.quantity)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCount(index, item.quantity)}>+</button>
              </Counter>
              <div className='price'>
                <span>${(item.quantity * price).toFixed(2)}</span>
                <span className='remove' onClick={() => removeFromCart(index)}><MdClose /></span>
              </div>
            </Row>
          )
        })}
        <Row>
          <span>Subtotal</span>
          <span>${cartTotal(data).toFixed(2)}</span>
        </Row>
        </section>
        <aside>
          <a href="https://andnone.co/saintcenter/checkout"><Button ghost>Checkout</Button></a>
        </aside>
      </Tray>
      <Close onClick={() => toggle()}><MdClose /></Close>
    </Wrapper>
  )
}

const Cart = ({ cart, open, toggle, data }) => {

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
                product_variations {
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
        <PureCart {...props} data={data} />
      )}
    />
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  open: PropTypes.bool,
  toggle: PropTypes.func
}

export default Cart;
