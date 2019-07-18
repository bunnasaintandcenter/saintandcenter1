import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo-black.svg'
import Menu from './menu'
import Nav from './nav'
import { Link } from 'gatsby'
import { device } from '../utils/devices'
import Cart from './cart'
import { isBrowser } from 'react-device-detect'

const Head = styled.header`
  z-index: 10;
  position: ${props => props.navOpen ? `fixed` : `sticky` };
  top: 0;
  widtH: 100vw;
  box-sizing: border-box;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5vw;
  transition: all 0.3s ease-in-out;
  background: rgb(248,249,244);
  z-index: 10;

  @media ${device.laptop}{
    padding: 1rem 5vw;
  }
`;

const Logo = styled.div`
  width: 24px;
  transition: 0.3s ease-in-out;

  @media ${device.laptop}{
    width: 3vw;
    padding: 1rem 0;
  }

  &:hover {
    transform: rotate(180deg);
  }

  img {
    width: 100%;
    margin: 0;
  }
`;

const CartButton = styled.div`

  span {
    cursor: pointer;
  }

  &:hover {
    span {
      opacity: 0.8;
    }
  }
`;

const Header = ({cart}) => {

  const [navOpen, toggleNav] = useState(false)
  const [cartOpen, toggleCart] = useState(false)

  const handleToggleNav = () => {
    document.getElementById('header').scrollIntoView()
    toggleNav(!navOpen)
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

  return (
    <Head data-testid='header' id='header' navOpen={navOpen}>
      <Logo><Link to='/'><img src={logo} alt='Saint and Center' /></Link></Logo>
      <Menu
        open={navOpen}
        onClick={handleToggleNav}
      />
      {isBrowser &&
        <CartButton
          onClick={handleSubmit}
          onMouseEnter={() => toggleCart(!cartOpen)}
          onMouseLeave={() => toggleCart(!cartOpen)}>
          <span>Cart({cart.length})</span>
          {cart.length > 0 &&
            <Cart open={cartOpen} cart={cart} handleSubmit={handleSubmit} />
          }
        </CartButton>
      }
      <Nav open={navOpen} cartItems={cart.length} handleSubmit={handleSubmit} />
    </Head>
  )
}

export default Header;
