import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../utils/devices"
import { useSelector, useDispatch } from "react-redux"

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: fill-available;
  background: rgb(248, 249, 244);
  color: black;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: 90;
  display: ${props => (props.open ? `flex` : `none`)};

  @media ${device.laptop} {
    width: 95vw;
    left: 5vw;
    height: 56px;
    top: 0;
    z-index: 200;
    justify-content: flex-start;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

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

  @media ${device.laptop} {
    line-height: 3vw;
    justify-content: flex-start;
    flex-direction: row;
  }

  li {
    font-size: 36px;

    @media ${device.laptop} {
      margin: 0 48px 0 0;

      &:last-of-type {
        margin: 0;
      }
    }

    &.clickable {
      cursor: pointer;
    }

    span {
      font-weight: 200;
    }

    @media ${device.laptop} {
      font-size: 24px;
      font-weight: 300;
    }
  }
`

const Nav = ({ open }) => {
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleLogout = () => {
    console.log("hey")
    dispatch({ type: "USER_SIGNOUT" })
  }

  return (
    <Wrapper open={open} data-testid="nav">
      <List>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>Learn</li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {user.email !== "" ? (
          <>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li className="clickable" onClick={() => handleLogout()}>
              Logout
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <br />
        <li>
          <Link to="/cart">
            Cart <span data-testid="cart-count">({cart.length})</span>
          </Link>
        </li>
      </List>
    </Wrapper>
  )
}

export default Nav
