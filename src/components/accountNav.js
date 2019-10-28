import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
  border-right: 2px solid rgb(51,51,51);
`;

const List = styled.ul`
  display: grid;
  height: calc(100vh - 155px);
  grid-template-rows: repeat(5, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  border-bottom: 2px solid rgb(51,51,51);
  text-transform: uppercase;
  font-size: 36px;
  margin: 0;

  &:last-of-type {
    border: 0;
  }

  span {
    cursor: pointer;
  }

  a, span {
    color: rgb(51,51,51);
    text-decoration: none;
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 100%;

    &:hover {
      background: rgb(25,25,25);
      color: white;
    }
  }
`;

const AccountNav = ({location, tabs}) => (
  <Nav data-testid='account-nav'>
    <List>
      {tabs.map(({url, title, action}) => (
        <Item key={title} data-testid='tab'>
          {url
            ? <Link data=testid='tab-link' to={`/account/${url}`}>{title}</Link>
            : <span onClick={action}>{title}</span>
          }
        </Item>
      ))}
    </List>
  </Nav>
);

export default AccountNav;
