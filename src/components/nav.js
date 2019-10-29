import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../utils/devices'
import { useSelector, useDispatch } from 'react-redux'

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: fill-available;
  background: rgb(248,249,244);
  color: black;
  align-items: center;
  justify-content: center;
  z-index: 9;
  box-sizing: border-box;
  z-index: 20;
  display: ${props => props.open ? `flex` : `none`};

  @media ${device.laptop}{
    height: calc(100vh - 2.5vw - 2rem);
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

    &.clickable {
      cursor: pointer;
    }

    span {
      font-weight: 200;
    }

    @media ${device.laptop}{
      font-size: 3vw;
    }
  }
`;

const Nav = ({ open, handleSubmit, toggle}) => {

  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleLogout = () => {
    console.log('hey')
    dispatch({ type: 'USER_SIGNOUT' })
  }

  return (
    <Wrapper open={open} data-testid='nav'>
      <List>
        <li><Link to='/shop'>Shop</Link></li>
        <li>Learn</li>
        <li>About</li>
        {user.email !== ''
          ?
            <>
              <li><Link to='/account'>Account</Link></li>
              <li className='clickable' onClick={() => handleLogout()}>Logout</li>
            </>
          : <li><Link to='/login'>Login</Link></li>

        }
        <br/>
        <li><Link to='/cart'>Cart <span data-testid='cart-count'>({cart.length})</span></Link></li>
      </List>
    </Wrapper>
  )
}

export default Nav
