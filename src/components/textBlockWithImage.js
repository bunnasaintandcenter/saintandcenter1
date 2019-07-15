import React from 'react'
import styled from 'styled-components'

const Block = styled.section`
  margin: 4rem 0;
  padding: 0 5vw;
  background: ${props => props.bg};
  color: ${props => props.color};
`;

const Title = styled.div`
  text-transform: uppercase;
  position: relative;
  text-align: center;

  h2 {
    font-size: 10vw;
    font-weight: 300;
    margin: 0 0 2rem;
  }
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 200;
  text-align: center;
  line-height: 48px;
`;

const Image = styled.div`
  width: 600px;
  margin: 2rem auto;

  img {
    width: 100%;
  }
`;

const TextBlockWithImage = ({bgColor, textColor, children, image, title, reverse}) => (
  <Block bg={bgColor} color={textColor} reverse={reverse}>
    <Title><h2>{title}</h2></Title>
    <Text>
      {children}
    </Text>
    <Image><img src={image} alt='placer' /></Image>
  </Block>
);

export default TextBlockWithImage;
