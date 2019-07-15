import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 0.5rem;
  text-align: center;
  background: black;
  color: white;
  transform: translateZ(0);
`;

const Promo = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Promo
