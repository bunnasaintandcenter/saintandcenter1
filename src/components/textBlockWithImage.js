import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Block = styled.section`
  margin: 2rem 0;
  padding: 2rem 5vw;

  @media ${device.laptop}{
    margin: 4rem 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  span {
    display: block;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 2rem;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  position: relative;
  text-align: center;

  h2 {
    font-size: 5vw;
    font-weight: 300;
    margin: 0 0 2rem;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 200;
  text-align: center;
  padding: 1rem;
  line-height: 24px;

  @media ${device.laptop}{
    font-size: 30px;
    text-align: left;
    padding: 4rem;
    line-height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Image = styled.div`
  background: ${props => props.bg};
  color: ${props => props.color};
  text-align: center;
  padding: 4rem 0;

  img {
    height: 60vh;
    margin: 0 auto;
  }
`;

const TextBlockWithImage = ({bgColor, textColor, children, image, title, reverse, actionText}) => (
  <Block reverse={reverse}>
    <Image bg={bgColor} color={textColor}><img src={image} alt='placer' /></Image>
    <Text>
      {children}
      <p><span>{actionText} &rarr;</span></p>
    </Text>
  </Block>
);

export default TextBlockWithImage;
