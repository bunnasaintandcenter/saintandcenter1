import React from 'react'
import styled from 'styled-components'

const Block = styled.section`
  width: 90vw;
  margin: 4rem auto;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 8fr 8fr;
  grid-template-columns: ${props => props.reverse ? '8fr 8fr 1fr' : '1fr 8fr 8fr' };
  grid-template-areas: ${props => props.reverse ? `"image text title"` : `"title text image"` };
  grid-gap: 2rem;

  h2 {
    transform: ${props => props.reverse ? `rotate(0deg)` : `rotate(180deg)` };
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  position: relative;
  grid-area: title;

  h2 {
    font-size: 48px;
    writing-mode: vertical-lr;
    margin: 0;
    position: absolute;
    left: 0;
    top: 1rem;
  }
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 200;
  line-height: 48px;
  grid-area: text;
`;

const Image = styled.div`
  grid-area: image;

  img {
    width: 100%;
  }
`;

const TextBlockWithImage = ({children, image, title, reverse}) => (
  <Block reverse={reverse}>
    <Title><h2>{title}</h2></Title>
    <Text>{children}</Text>
    <Image><img src={image} alt='placer' /></Image>
  </Block>
);

export default TextBlockWithImage;
