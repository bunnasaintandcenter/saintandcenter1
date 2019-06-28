import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 2px solid ${props => props.ghost ? 'white' : 'black' };
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-family: 'US';
  background: transparent;
  color: ${props => props.ghost ? 'white' : 'black' };
  transition: 0.2s all ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translate(0, -2px);
    background: ${props => props.ghost ? 'white' : 'black'};
    color: ${props => props.ghost ? 'black' : 'white'};
  }
`;

const Button = ({ children, ghost }) => (
  <StyledButton ghost={ghost}>{children}</StyledButton>
);

export default Button;
