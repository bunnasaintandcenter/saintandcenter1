import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo-black.svg'
import logotype from '../images/logotype.svg'
import Menu from './menu'
import Nav from './nav'
import { Link } from 'gatsby'
import { device } from '../utils/devices'
import Cart from './cart'
import { isBrowser } from 'react-device-detect'

const Wrapper = styled.div`
  position: ${props => props.navOpen ? `fixed` : `sticky` };
  top: ${props => props.bannerOpen ? `calc(2rem + 1.5vw)` : `0` };
  z-index: 100;
`;

const Head = styled.header`
  z-index: 10;
  width: 100vw;
  box-sizing: border-box;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5vw;
  transition: all 0.3s ease-in-out;
  background: rgb(248,249,244);
  z-index: 11;

  @media ${device.laptop}{
    padding: 0 2rem;
  }
`;

const Logo = styled.div`
  width: 24px;
  transition: 0.3s ease-in-out;

  @media ${device.laptop}{
    width: 2vw;
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
    background: black;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid black;
    color: white;
    font-size: 13px;
    font-weight: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    span {
      opacity: 0.8;
    }
  }
`;

const Header = ({ cart, bannerOpen }) => {

  const [navOpen, toggleNav] = useState(false)
  const [cartOpen, toggleCart] = useState(false)

  const handleToggleNav = () => {
    document.getElementById('header').scrollIntoView()
    toggleCart(false)
    toggleNav(!navOpen)
  }

  return (
    <Wrapper cartOpen={cartOpen}>
    {cart.length > 0 &&
      <Cart open={cartOpen} toggle={toggleCart} cart={cart} />
    }
    <Head data-testid='header' id='header' navOpen={navOpen} bannerOpen={bannerOpen}>
      <Menu
        open={navOpen}
        onClick={handleToggleNav}
      />
      <Logo><Link to='/'><img src={logo} alt='Saint and Center' /></Link></Logo>
      <CartButton
        data-testid='cart-button'
        onClick={() => toggleCart(!cartOpen)}>
        <span data-testid='header-cart-count'>{cart.length > 0 && cart.length}</span>
      </CartButton>
      <Nav open={navOpen} cartItems={cart.length} />
    </Head>
    </Wrapper>
  )
}

export default Header;
