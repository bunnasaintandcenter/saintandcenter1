import React from 'react'
import styled from 'styled-components';

const Quote = styled.blockquote`
  color: ${props => props.color};
  text-align: center;
  font-size: 5vw;
  line-height: 5vw;
  font-weight: 200;
  text-transform: uppercase;
  padding: 0 20vw;
  margin: 10rem 0 2rem;
`;

const BlockQuote = ({ color, children }) => (
  <Quote color={color}>{children}</Quote>
);

export default BlockQuote;
