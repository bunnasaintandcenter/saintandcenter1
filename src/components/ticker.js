import React from 'react'
import styled from 'styled-components'
import Ticker from 'react-ticker'
import usa from '../images/icon-usa.svg'
import organic from '../images/icon-organic.svg'
import spectrum from '../images/icon-spectrum.svg'


const Wrapper = styled.div`
  margin: 6rem 0;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-right: 8rem;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 200;

  span {
    margin-bottom: 2rem;
  }
`;

const Marquee = () => {

  const content = [
    {
      icon: <img src={usa} alt='Made in USA' />,
      text: 'Made in USA'
    },
    {
      icon: <img src={organic} alt='Organically grown' />,
      text: 'Organically Grown'
    },
    {
      icon: <img src={spectrum} alt='Broad Spectrum' />,
      text: 'Broad Spectrum'
    },
  ]

  let index = 0;

  return (
    <Wrapper>
      <Ticker>
        {() => {
          if(index === content.length -1 ){
            index = 0;
          } else {
            index = index + 1;
          }
          return (
            <Block>
              <span>{content[index].icon}</span>
              <p>{content[index].text}</p>
            </Block>
          )
        }}
      </Ticker>
    </Wrapper>
  )
};

export default Marquee;
