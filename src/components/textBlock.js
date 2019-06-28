import React from 'react'
import styled from 'styled-components'

const Block = styled.section`
  text-transform: uppercase;
  font-size: 48px;
  line-height: 60px;
  width: 90vw;
  margin: 4rem auto;
  max-width: 1440px;
  font-weight: 200;
`;

const TextBlock = ({ children }) => (
  <Block>
    {children}
  </Block>
);

export default TextBlock;
