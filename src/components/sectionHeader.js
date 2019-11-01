import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const Wrapper = styled.div`
  background: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 74px;
  text-transform: uppercase;
  font-size: 16px;
  color: rgb(51,51,51);
  font-weight: 100;
  z-index: 10;
  display: flex;
  justify-content: space-between;

  @media ${device.laptop}{
    top: calc(3vw + 2rem);
    font-size: 16px;
  }
`;

const SectionHeader = ({ location }) => {

  const renderTitle = (page) => {
    console.log(page.split('/')[2] === 'product')
    switch (true) {
      case page.split('/')[2] === 'product':
        return `Shop / ${page.split('/')[3]}`
      case page.split('/')[1] === 'shop':
        return 'Shop / Products'
      case page.split('/')[1] === 'holy-hemp':
        return 'Learn'
      default:
        return false
    }
  }

  return (
    <Wrapper>
      {location && renderTitle(location.pathname)}
    </Wrapper>
  )
}

export default SectionHeader
