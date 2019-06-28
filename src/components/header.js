import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import logoDark from '../images/logo-black.svg'
import Nav from './nav'
import Headroom from 'react-headroom'

const Head = styled.header`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  transition: all 0.3s ease-in-out;
  background: ${props => props.pinned ? 'rgb(248,249,244)' : 'transparent' };

  img {
    width: 3vw;
    padding: 1rem 0;
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
          <img src={location.pathname === '/' && !pinned ? logo : logoDark} alt='Saint and Center' />
          <Nav dark={location.pathname === '/' && !pinned} />
          </>
        }
      </Head>
      </Headroom>
    )
  }
}

export default Header;
