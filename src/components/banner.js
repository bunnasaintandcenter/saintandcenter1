import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 6rem auto;
  width: 90vw;
  max-width: 1440px;

  h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 48px;
  }
`;

const Banner = ({title, image}) => (
  <Wrapper>
    {title &&
      <h2>{title}</h2>
    }
    <img src={image} alt={title} />
  </Wrapper>
);

export default Banner;
