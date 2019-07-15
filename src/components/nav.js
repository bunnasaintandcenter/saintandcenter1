import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
  position: fixed;
  top: 150px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 156px);
  background: rgb(248,249,244);
  color: black;
  align-items: center;
  justify-content: center;
  z-index: 9;
  box-sizing: border-box;
  display: ${props => props.open ? `flex` : `none`};

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
  line-height: 3vw;

  li {
    font-size: 3vw;
  }
`;

const Nav = ({ open }) => (
  <Wrapper open={open}>
    <List>
      <li>Shop</li>
      <li>Learn</li>
      <li>About</li>
      <li>Login</li>
      <li>Cart</li>
    </List>
  </Wrapper>
);

export default Nav
