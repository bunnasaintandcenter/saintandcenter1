import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../utils/devices'
import { isMobile } from 'react-device-detect'
import PropTypes from 'prop-types'

const Nav = styled.nav`
  position: relative;

  @media ${device.laptop} {
    border-right: 2px solid rgb(51,51,51);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 5;
    width: 20vw;
    background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(228,229,225,1) 70%);

    @media ${device.laptop}{
      content: none;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0 ;
  margin: 74px 0 0;
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  background: rgb(51,51,51,0.1);

  @media ${device.laptop} {
    width: auto;
    background: transparent;
    display: grid;
    overflow: visible;
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
    margin-right: 20vw;

    @media ${device.laptop}{
      margin-right: 0;

      span {
        padding: 2rem 4rem;
      }
    }
  }

  span {
    cursor: pointer;
  }

  .active {
    border-bottom: 3px solid rgb(51,51,51);

    @media ${device.laptop} {
      border-bottom: 0;
    }
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

      &:hover {
        background: rgb(25,25,25);
        color: white;
      }
    }
  }
`;

const AccountNav = ({ tabs }) => (
  <Nav data-testid='account-nav'>
    <List>
      {tabs.map(({url, title, action}) => (
        <Item key={title} data-testid='tab'>
          {url
            ? <Link activeClassName='active' to={`/account/${url}`}>{title}</Link>
            : <span onClick={action}>{title}</span>
          }
        </Item>
      ))}
      {isMobile &&
        <Item>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Item>
      }
    </List>
  </Nav>
);

AccountNav.propTypes = {
  location: PropTypes.object,
  tabs: PropTypes.array.isRequired
}

export default AccountNav;
