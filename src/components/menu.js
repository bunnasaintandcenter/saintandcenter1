import React from "react"
import styled from "styled-components"
import menu from "../images/icon-menu.svg"

const Wrapper = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  transform: ${props => (props.open ? `rotate(135deg)` : `none`)};
  transition: 0.3s all ease-in-out;
  transform-origin: center center;
  background: url(${menu});
  background-repeat: none;
  background-size: 100%;
  filter: ${props => (props.background ? `none` : `invert(100%)`)};
  z-index: 300;
  position: relative;
`

const Menu = ({ open, onClick, background }) => (
  <Wrapper
    data-testid="menu"
    background={background}
    open={open}
    onClick={onClick}
  />
)

export default Menu
