import React from 'react'
import styled from 'styled-components'
import menu from '../images/icon-menu.svg'

const Wrapper = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  transform: ${props => props.open ? `rotate(135deg)` : `none` };
  transition: 0.3s all ease-in-out;
  transform-origin: center center;
  background: url(${menu});
  background-repeat: none;
  background-size: 100%;
`;

const Menu = ({ open, onClick }) => (
  <Wrapper open={open} onClick={onClick} />
);

export default Menu;
