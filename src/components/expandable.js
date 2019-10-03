import React, { useState } from 'react'
import styled from 'styled-components'

const Menu = styled.div`
  cursor: pointer;
  grid-column: span 2;
  border-bottom: 2px solid rgb(51,51,51);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  text-transform: uppercase;
  transition: 0.2s all ease-in-out;

  &:hover {
    background: rgba(0,0,0,0.1);
  }

  span {
    font-size: 48px;
    font-weight: 200;
    transform: ${props => props.expanded ? `rotate(45deg)` : `rotate(0)` };
    transition: 0.2s all ease-in-out;
  }
`;

const Content = styled.div`
  padding: 0 4rem;
  overflow: hidden;
  max-height: ${props => props.expanded ? `999px` : 0 };
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
`;

const Expandable = ({ title, children }) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <Menu className='expandable'>
      <Title expanded={expanded} onClick={() => setExpanded(!expanded)}>{title} <span>+</span></Title>
      <Content expanded={expanded}>{children}</Content>
    </Menu>
  )

}

export default Expandable;
