import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Block = styled.section`

  @media ${device.laptop}{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  span {
    display: block;
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 2rem;

    @media ${device.laptop}{
      font-size: 24px;
    }
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 200;
  padding: 1rem;
  line-height: 24px;

  a {
    color: rgb(51,51,51);
    text-decoration: none;
  }

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
    height: 30vh;
    margin: 0 auto;

    @media ${device.laptop}{
      height: 60vh;
    }
  }
`;

const TextBlockWithImage = ({bgColor, textColor, children, image, title, reverse, actionText, url}) => (
  <Block reverse={reverse}>
    <Image bg={bgColor} color={textColor}><img src={image} alt='placer' /></Image>
    <Text>
      {children}
      {url
        ? <Link to={url}><p><span>{actionText} &rarr;</span></p></Link>
        : <p><span>{actionText} &rarr;</span></p>
      }
    </Text>
  </Block>
);

export default TextBlockWithImage;
