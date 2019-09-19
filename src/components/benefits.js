import React from 'react'
import styled from 'styled-components'
import usa from '../images/icon-usa.svg'
import organic from '../images/icon-organic.svg'
import spectrum from '../images/icon-spectrum.svg'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5vw;
  width: 70vw;
  margin: 2rem auto;
`;

const Item = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 18px;

  img {
    margin: 0 auto 2rem;
    display: block;
    width: 3vw;
  }
`;

const benefits = [
  {
    title: 'Free Shipping',
  },
  {
    title: 'Flexible Subscriptions',
  },
  {
    title: '3rd Party Tested'
  },
  {
    title: 'Made in USA',
    icon: usa
  },
  {
    title: 'Organically Grown',
    icon: organic
  },
  {
    title: 'Broad Spectrum',
    icon: spectrum
  },
  {
    title: 'No GMO'
  },
  {
    title: 'Zero THC'
  }
]

const Benefits = () => (
  <Wrapper>
    {benefits.map(item => (
      <Item key={item.title}>
        {item.icon &&
          <img src={item.icon} alt={item.title} title={item.title} />
        }
        {item.title}
      </Item>
    ))}
  </Wrapper>
);

export default Benefits
