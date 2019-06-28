import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
  color: ${props => props.dark ? 'white' : 'black' };

  a {
    color: ${props => props.dark ? 'white' : 'black' };
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-right: 1rem;
    font-size: 24px;

    &:last-of-type {
      margin: 0;
      font-weight: 300;
    }
  }
`;

const Nav = ({ dark }) => (
  <Wrapper dark={dark}>
    <List>
      <li>Shop</li>
      <li>Learn</li>
      <li>Login</li>
    </List>
  </Wrapper>
);

export default Nav
