import React, { useState, useEffect } from "react"
import styled from "styled-components"
import logoLight from "../images/logo.svg"
import { isMobile } from "react-device-detect"
import logo from "../images/logo-black.svg"
import logotype from "../images/logotype.svg"
import Menu from "./menu"
import Nav from "./nav"
import { Link } from "gatsby"
import { device } from "../utils/devices"
import Cart from "./cart"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
`

const Head = styled.header`
  width: 100vw;
  height: 56px;
  box-sizing: border-box;
  box-sizing: border-box;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: ${props =>
    props.background ? `rgb(248,249,244)` : `transparent`};
  z-index: 999;

  @media ${device.laptop} {
    padding: 0 24px;
  }
`

const Logo = styled.div`
  width: ${props => (props.background ? `24px` : `200px`)};
  transition: 0.3s transform ease-in-out;

  @media ${device.laptop} {
    height: ${props => (props.background ? `32px` : `20px`)};
  }

  a {
    display: block;
    height: 32px;

    @media ${device.laptop} {
      height: ${props => (props.background ? `32px` : `20px`)};
    }
  }

  img {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`

const CartButton = styled.div`
  span {
    cursor: pointer;
    background: ${props => (props.background ? `black` : `white`)};
    transition: 0.2s all ease-in-out;
    width: 22px;
    height: 22px;
    border-radius: 16px;
    border: ${props =>
      props.background ? `1px solid black` : `1px solid white`};
    color: ${props => (props.background ? `white` : `black`)};
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
`

const Header = ({ cart, bannerOpen, home }) => {
  const [background, setBackground] = useState(home ? false : true)
  const [navOpen, toggleNav] = useState(false)
  const [cartOpen, toggleCart] = useState(false)

  const listenScrollEvent = () => {
    if (home) {
      if (window.scrollY > window.innerHeight * 3 - 56) {
        setBackground(true)
      } else {
        setBackground(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  const handleToggleNav = () => {
    // toggleBodyLock()
    toggleCart(false)
    toggleNav(!navOpen)

    if (!navOpen && !background) {
      setBackground(true)
    }

    if (home && background && navOpen) {
      setBackground(false)
    }
  }

  return (
    <>
      <Wrapper cartOpen={cartOpen} bannerOpen={bannerOpen}>
        {cart.length > 0 && (
          <Cart open={cartOpen} toggle={toggleCart} cart={cart} />
        )}
        <Head
          data-testid="header"
          id="header"
          navOpen={navOpen}
          background={background}
        >
          <Menu
            background={background}
            open={navOpen}
            onClick={handleToggleNav}
          />
          <Logo background={background}>
            <Link to="/">
              <img
                src={background ? logo : isMobile ? logoLight : logotype}
                alt="Saint and Center"
              />
            </Link>
          </Logo>
          <CartButton
            background={background}
            data-testid="cart-button"
            onClick={() => toggleCart(!cartOpen)}
          >
            <span data-testid="header-cart-count">
              {cart.length > 0 && cart.length}
            </span>
          </CartButton>
        </Head>
      </Wrapper>
      <Nav open={navOpen} cartItems={cart.length} />
    </>
  )
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  bannerOpen: PropTypes.bool,
  home: PropTypes.bool,
}

export default Header
