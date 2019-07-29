import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: white;
  padding: 1rem 5vw;
  position: sticky;
  top: calc(3vw + 2rem);
  text-transform: uppercase;
  font-size: 24px;
  color: rgba(51,51,51,1);
  font-weight: 100;
  z-index: 10;
  display: flex;
  justify-content: space-between;
`;

const SectionHeader = ({ title, secondary }) => (
  <Wrapper>
    <span>{title}</span>
    <span>{secondary}</span>
  </Wrapper>
);

export default SectionHeader
