import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../utils/devices'

const Nav = styled.nav`

  @media ${device.laptop} {
    border-right: 2px solid rgb(51,51,51);
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 74px 0 0;
  display: flex;
  width: 100vw;
  overflow: scroll;
  overflow-scrolling: touch;
  background: rgb(51,51,51,0.1);

  @media ${device.laptop} {
    display: grid;
    height: calc(100vh - 155px);
    grid-template-rows: repeat(5, 1fr);
  }
`;

const Item = styled.li`
  text-transform: uppercase;
  font-size: 16px;
  margin: 0;
  flex-shrink: 0;

  @media ${device.laptop} {
    font-size: 36px;
    border-bottom: 2px solid rgb(51,51,51);
  }

  &:last-of-type {
    border: 0;
  }

  span {
    cursor: pointer;
  }

  a, span {
    color: rgb(51,51,51);
    text-decoration: none;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    padding: 1rem;

    @media ${device.laptop} {
      padding: 2rem 4rem;
    }

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
            ? <Link to={`/account/${url}`}>{title}</Link>
            : <span onClick={action}>{title}</span>
          }
        </Item>
      ))}
    </List>
  </Nav>
);

export default AccountNav;
