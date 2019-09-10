import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../components/layout'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import Button from '../components/button'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 2rem;
  margin: 4rem auto;
  width: 90vw;
`;

const Items = styled.div`
  border-top: 2px solid rgb(51,51,51);

  ul {
    margin: 0;
    list-style: none;

    li {
      border-bottom: 2px solid rgb(51,51,51);
      padding: 2rem 0;
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      grid-gap: 2rem;

      div {
        &:first-of-type {
          background: rgb(51,51,51);
          height: 200px;
        }

        &:last-of-type {
          text-align: right;
        }
      }
    }
  }
`;

const Summary = styled.div`
  border-top: 2px solid rgb(51,51,51);

  h3 {
    font-size: 24px;
    font-weight: 500;
    padding: 1rem 0;
  }

  button {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Counter = styled.aside`
  display: grid;
  width: 50%;
  grid-template-columns: repeat(3, 1fr);

  span {
    text-align: center;
    border-top: 2px solid rgba(51,51,51,0.4);
    padding: 1rem;
    border-bottom: 2px solid rgba(51,51,51,0.4);
  }

  button {
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    font-family: 'US';
    align-items: center;
    justify-content: center;
    background: transparent;
    outline: none;
    appearance: none;
    border: 2px solid rgba(51,51,51,0.4);
  }
`;

const Cart = ({ location, data }) => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const removeFromCart = (index) => dispatch({type: 'REMOVE_FROM_CART', payload: { index: index }})

  const increment = (index) => {
    const { quantity } = cart[index]

    dispatch({
      type: 'CHANGE_QUANTITY',
      payload: {
        index: index,
        quantity: quantity + 1
      }
    })
  }

  const decrement = (index) => {
    const { quantity } = cart[index]
    let newQuantity = quantity - 1;

    if(newQuantity < 1){
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: {
          index: index
        }
      })
    } else {
      dispatch({
        type: 'CHANGE_QUANTITY',
        payload: {
          index: index,
          quantity: newQuantity
        }
      })
    }
  }

  const handleSubmit = () => {

    const headers = new Headers();

    const data = {
      billing: {
      first_name: 'John',
      last_name: 'Doe',
      address_1: '969 Market',
      address_2: '',
      city: 'San Francisco',
      state: 'CA',
      postcode: '94103',
      country: 'US',
      email: 'john.doe@example.com',
      phone: '(555) 555-5555'
      },
      shipping: {
        first_name: 'John',
        last_name: 'Doe',
        address_1: '969 Market',
        address_2: '',
        city: 'San Francisco',
        state: 'CA',
        postcode: '94103',
        country: 'US'
      },
      set_paid: false,
      line_items: cart
    }

    headers.set('Authorization', 'Basic ' + btoa('ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a:cs_0c39f3c5f8db99d8f1493394fffadba7629215cd'));

    fetch(`https://andnone.co/saintcenter/wp-json/wc/v3/orders?consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      console.log('status', res.status)
      if(res.status === 201){
        return res.json()
      } else {
        throw new Error(res)
      }
    })
    .then(data => {
      window.location.href = `http://andnone.co/saintcenter/checkout/order-pay/${data.id}/?pay_for_order=true&key=${data.order_key}`
    })
    .catch(err => console.log(err))
  }

  const cartTotal = () => {

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
        query CartPageQuery {
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
        <Layout location={location}>
          <Wrapper>
            <Items>
              <ul>
              {cart.map((item, index) => {
                const { name, variations }= data.allWcProducts.edges.find(o => o.node.wordpress_id === item.product_id).node
                const { price } = variations.find(o => o.id === item.variation_id)
                return (
                  <li key={name}>
                    <div></div>
                    <div>
                      <p>{name}</p>
                      <Counter>
                        <button onClick={() => decrement(index)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increment(index)}>+</button>
                      </Counter>
                      <br/>
                      <p><Button onClick={() => removeFromCart(index)}>Delete</Button></p>
                    </div>
                    <div>${(item.quantity * price).toFixed(2)}</div>
                  </li>
                )
              })}
              </ul>
            </Items>
            <Summary>
              <h3>Order Summary</h3>
              <p>Subtotal: {cart.length > 0 ? `$${cartTotal()}` : `$0`}</p>
              <Button onClick={() => handleSubmit()}>Checkout</Button>
            </Summary>
          </Wrapper>
        </Layout>
      )}
    />
  )
}

export default Cart;
