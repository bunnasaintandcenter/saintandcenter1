import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 2px solid ${props => props.ghost ? 'white' : 'rgb(51,51,51)' };
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-family: 'US';
  font-size: 18px;
  font-weight: 400;
  background: ${props => props.primary ? 'rgb(51,51,51)' : 'transparent' };
  color: ${props => props.primary || props.ghost ? 'white' : 'rgb(51,51,51)' };
  transition: 0.2s all ease-in-out;
  cursor: ${props => props.disabled ? `not-allowed` : `pointer` };
  outline: 0 !important;
  appearance: none !important;

  &:hover {
    transform: translate(0, -2px);
    background: ${props => props.ghost ? 'white' : 'rgb(51,51,51)'};
    color: ${props => props.ghost ? 'rgb(51,51,51)' : 'white'};
  }
`;

const Button = ({ children, ghost, onClick, primary, disabled }) => (
  <StyledButton
    data-testid='button'
    disabled={disabled}
    onClick={onClick}
    ghost={ghost}
    primary={primary}
  >
    {children}
  </StyledButton>
);

export default Button;
