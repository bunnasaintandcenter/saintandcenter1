import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import logoDark from '../images/logo-black.svg'
import Nav from './nav'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

const Head = styled.header`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  transition: all 0.3s ease-in-out;
  background: ${props => props.pinned ? 'rgb(248,249,244)' : 'transparent' };
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

class Header extends Component {

  state = {
    pinned: false
  }

  handlePin = () => {
    this.setState({ pinned: true })
  }

  handleUnPin = () => {
    this.setState({ pinned: false })
  }

  render(){

    const { location } = this.props;
    const { pinned } = this.state;

    return (
      <Headroom
        onPin={this.handlePin}
        onUnpin={this.handleUnPin}
        onUnfix={this.handleUnPin}
      >
      <Head pinned={this.state.pinned}>
        {location && location.pathname &&
          <>
          <Logo><Link to='/'><img src={location.pathname === '/' && !pinned ? logo : logoDark} alt='Saint and Center' /></Link></Logo>
          <Nav dark={location.pathname === '/' && !pinned} />
          </>
        }
      </Head>
      </Headroom>
    )
  }
}

export default Header;
