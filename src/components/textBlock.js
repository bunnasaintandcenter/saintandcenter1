import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Block = styled.section`
  font-size: 18px;
  line-height: 24px;
  width: 90vw;
  margin: 2rem auto;
  /* max-width: 1440px; */
  font-weight: 200;

  @media ${device.laptop}{
    font-size: 36px;
    margin: 4rem auto;
    line-height: 60px;
  }

  p {
    margin-bottom: 3rem;
  }

  strong {
    font-size: 30px;
    font-weight: 500;

    @media ${device.laptop}{
      font-size: 48px;
    }
  }
`;

const TextBlock = forwardRef(({ children }, ref) => (
  <Block ref={ref}>
    {children}
  </Block>
));

export default TextBlock;
