import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Quote = styled.blockquote`
  color: ${props => props.color};
  text-align: center;
  font-size: 10vw;
  line-height: 10vw;
  font-weight: 200;
  text-transform: uppercase;
  padding: 0 5vw;
  margin: 4rem 0 1rem;

  @media ${device.laptop}{
    font-size: 5vw;
    line-height: 5vw;
    padding: 0 20vw;
    margin: 10rem 0 2rem;
  }
`;

const BlockQuote = ({ color, children }) => (
  <Quote color={color}>{children}</Quote>
);

export default BlockQuote;
