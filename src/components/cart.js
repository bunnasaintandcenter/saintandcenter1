import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Button from './button'
import { MdClose } from 'react-icons/md'
import { device } from '../utils/devices'
import { isBrowser } from 'react-device-detect'

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

  &:last-of-type {
    padding: 1.5rem 1rem;
    border: 0;

    @media ${device.laptop}{
      border-bottom: 2px solid white;
    }
  }
`;

const Close = styled.button`
  position: absolute;
  top: 2.5vw;
  right: 5vw;
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

const Cart = ({ cart, open, toggle }) => {

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

  // const handleSubmit = () => {
  //
  //   const headers = new Headers();
  //
  //   const data = {
  //     billing: {
  //     first_name: 'John',
  //     last_name: 'Doe',
  //     address_1: '969 Market',
  //     address_2: '',
  //     city: 'San Francisco',
  //     state: 'CA',
  //     postcode: '94103',
  //     country: 'US',
  //     email: 'john.doe@example.com',
  //     phone: '(555) 555-5555'
  //     },
  //     shipping: {
  //       first_name: 'John',
  //       last_name: 'Doe',
  //       address_1: '969 Market',
  //       address_2: '',
  //       city: 'San Francisco',
  //       state: 'CA',
  //       postcode: '94103',
  //       country: 'US'
  //     },
  //     set_paid: false,
  //     line_items: cart
  //   }
  //
  //   headers.set('Authorization', 'Basic ' + btoa('ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a:cs_0c39f3c5f8db99d8f1493394fffadba7629215cd'));
  //
  //   fetch(`https://andnone.co/saintcenter/wp-json/wc/v3/orders?consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`, {
  //     method: 'POST',
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   .then(res => {
  //     console.log('status', res.status)
  //     if(res.status === 201){
  //       return res.json()
  //     } else {
  //       throw new Error(res)
  //     }
  //   })
  //   .then(data => {
  //     window.location.href = `http://andnone.co/saintcenter/checkout/order-pay/${data.id}/?pay_for_order=true&key=${data.order_key}`
  //   })
  //   .catch(err => console.log(err))
  // }

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
        <Wrapper open={open} data-testid='cart'>
          <Tray>
            <section>
            <Row>
              <span>Cart</span>
              {isBrowser &&
                <span>Free Shipping Forever</span>
              }
            </Row>
            {cart.map(item => {
              const { name, product_variations }= data.allWcProducts.edges.find(o => o.node.wordpress_id === item.product_id).node
              const { price } = product_variations.find(o => o.id === item.variation_id)
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
              <a href="https://andnone.co/saintcenter/checkout"><Button ghost>Checkout</Button></a>
            </aside>
          </Tray>
          <Close onClick={() => toggle()}><MdClose /></Close>
        </Wrapper>
      )}
    />
  )
}

export default Cart;
