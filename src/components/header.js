import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo-black.svg'
import Menu from './menu'
import Nav from './nav'
import { Link } from 'gatsby'

const Head = styled.header`
  z-index: 10;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5vw;
  transition: all 0.3s ease-in-out;
  background: rgb(248,249,244);
  z-index: 10;
`;

const Logo = styled.div`
  width: 3vw;
  padding: 1rem 0;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: rotate(180deg);
  }

  img {
    width: 100%;
    margin: 0;
  }
`;

const Header = () => {

  const [navOpen, toggleNav] = useState(false)

  return (
    <Head data-testid='header'>
      <Logo><Link to='/'><img src={logo} alt='Saint and Center' /></Link></Logo>
      <Menu
        open={navOpen}
        onClick={() => toggleNav(!navOpen)}
      />
      <Nav open={navOpen} />
    </Head>
  )
}

export default Header;
