import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 40vh;

  &:nth-child(odd){
    background: #E1D6D6;
  }
`;

const Product = ({name}) => (
  <Wrapper>
    {name}
  </Wrapper>
);

export default Product;
