import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../utils/devices'

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 24px - 2rem);
  background: rgb(248,249,244);
  color: black;
  align-items: center;
  justify-content: center;
  z-index: 9;
  box-sizing: border-box;
  padding-bottom: calc(4.5vw + 4rem);
  display: ${props => props.open ? `flex` : `none`};

  @media ${device.laptop}{
    height: calc(100vh - 4.5vw - 4rem);
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  line-height: 48px;

  @media ${device.laptop}{
    line-height: 3vw;
  }

  li {
    font-size: 36px;

    span {
      font-weight: 200;
    }

    @media ${device.laptop}{
      font-size: 3vw;
    }
  }
`;

const Nav = ({ open, cartItems, handleSubmit }) => (
  <Wrapper open={open}>
    <List>
      <li><Link to='/shop'>Shop</Link></li>
      <li>Learn</li>
      <li>About</li>
      <li>Login</li>
      <li onClick={handleSubmit}>Cart <span>({cartItems})</span></li>
    </List>
  </Wrapper>
);

export default Nav
