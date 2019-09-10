import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 2px solid ${props => props.ghost ? 'white' : 'black' };
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-family: 'US';
  font-size: 18px;
  background: ${props => props.primary ? 'black' : 'transparent' };
  color: ${props => props.primary || props.ghost ? 'white' : 'black' };
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  outline: 0;

  &:hover {
    transform: translate(0, -2px);
    background: ${props => props.ghost ? 'white' : 'black'};
    color: ${props => props.ghost ? 'black' : 'white'};
  }
`;

const Button = ({ children, ghost, onClick, primary }) => (
  <StyledButton
    data-testid='button'
    onClick={onClick}
    ghost={ghost}
    primary={primary}
  >
    {children}
  </StyledButton>
);

export default Button;
