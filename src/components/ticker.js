import React from 'react'
import styled from 'styled-components'
import Ticker from 'react-ticker'
import { FaFlagUsa, FaLeaf, FaCertificate } from 'react-icons/fa'

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
  font-size: 24px;

  span {
    margin-bottom: 2rem;
  }
`;

const Marquee = () => {

  const content = [
    {
      icon: <FaFlagUsa />,
      text: 'Made in the USA'
    },
    {
      icon: <FaLeaf />,
      text: 'Organically Grown'
    },
    {
      icon: <FaCertificate />,
      text: 'Non-GMO'
    }
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
