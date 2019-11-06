import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { device } from '../utils/devices'
import PropTypes from 'prop-types'

const Banner = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-size: 3vw;
  font-weight: 300;
  background: black;
  transition: 0.2s all ease-in-out;
  transform: translate(${props => props.open ? `0,0` : `0,-100%` });
  z-index: 5;
  display: flex;
  align-items: center;
  height: calc(2rem + 1.5vw);
  justify-content: center;

  @media ${device.laptop}{
    font-size: 1vw;
  }
`;

const Close = styled.button`
  position: absolute;
  right: 5vw;
  appearance: none;
  border: 0;
  background: transparent;
  color: white;
  outline: 0;
  cursor: pointer;
  font-size: 24px;

  @media ${device.laptop}{
    font-size: 16px;
    right: 2rem;
  }
`;

const Announcement = ({ open, text, toggle }) => (
  <Banner open={open}>
    {text}
    <Close onClick={() => toggle()}><MdClose /></Close>
  </Banner>
);

Announcement.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Announcement;
