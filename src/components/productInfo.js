import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`;

const Item = styled.div`
  padding: 2rem 5vw;
  border-top: 2px solid rgba(51,51,51);

  &:first-of-type {
    border: 0;
  }

  h4 {
    text-transform: uppercase;
    font-weight: 400;
  }
`;

const ProductInfo = ({ info }) => (
  <Wrapper data-testid='product-info'>
    <Item>
      <h4>Ingredients</h4>
    </Item>
    <Item>
      <h4>Lab Results</h4>
    </Item>
  </Wrapper>
);

export default ProductInfo;
