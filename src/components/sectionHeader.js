import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Wrapper = styled.div`
  background: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 74px;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(51,51,51);
  font-weight: 100;
  z-index: 10;
  display: flex;
  justify-content: space-between;

  @media ${device.laptop}{
    top: calc(3vw + 2rem);
    font-size: 24px;
  }
`;

const SectionHeader = ({ title, secondary }) => (
  <Wrapper>
    <span>{title}</span>
    <span>{secondary}</span>
  </Wrapper>
);

export default SectionHeader
