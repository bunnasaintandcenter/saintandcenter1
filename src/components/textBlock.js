import React from 'react'
import styled from 'styled-components'

const Block = styled.section`
  font-size: 36px;
  line-height: 60px;
  text-align: center;
  width: 90vw;
  margin: 4rem auto;
  max-width: 1440px;
  font-weight: 200;

  strong {
    font-size: 48px;
    font-weight: 500;
  }
`;

const TextBlock = ({ children }) => (
  <Block>
    {children}
  </Block>
);

export default TextBlock;
