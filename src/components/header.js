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
    padding: 0 5vw;
  }
`;

const Logo = styled.div`
  width: 24px;
  transition: 0.3s ease-in-out;

  @media ${device.laptop}{
    width: 2vw;
    padding: 1rem 0;
    margin-right: 10px;
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

const Header = ({ cart }) => {

  const [navOpen, toggleNav] = useState(false)
  const [cartOpen, toggleCart] = useState(false)

  const handleToggleNav = () => {
    document.getElementById('header').scrollIntoView()
    toggleNav(!navOpen)
  }


  return (
    <Head data-testid='header' id='header' navOpen={navOpen}>
      <Menu
        open={navOpen}
        onClick={handleToggleNav}
      />
      <Logo><Link to='/'><img src={logo} alt='Saint and Center' /></Link></Logo>
      {isBrowser &&
        <CartButton
          onMouseEnter={() => toggleCart(!cartOpen)}
          onMouseLeave={() => toggleCart(!cartOpen)}>
          <span>Cart({cart.length})</span>
          {cart.length > 0 &&
            <Cart open={cartOpen} cart={cart} />
          }
        </CartButton>
      }
      <Nav open={navOpen} cartItems={cart.length} />
    </Head>
  )
}

export default Header;
