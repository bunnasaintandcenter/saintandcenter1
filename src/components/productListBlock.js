import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import logoType from '../images/logotype-vertical.svg'
import ProductSelect from './productSelect'
import ProductInfo from './productInfo'
import { device } from '../utils/devices'
import stripHtml from 'string-strip-html'

const Product = styled.div`
  cursor: default;
`;

const Block = styled.div`
  background: ${props => props.color};
  color: white;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: repeat(3, 1fr);
  box-sizing: border-box;
  padding: 5vw;
  align-items: center;

  @media ${device.laptop}{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5vw;
    height: calc(100vh - 24px - 2rem);
  }
`;

const Col = styled.div`
  line-height: 30px;
  font-size: 30px;
  display: flex;
  justify-content: center;

  @media ${device.laptop}{
    line-height: 48px;
    font-size: 48px;
  }

  &:first-of-type {
    justify-content: start;
    align-self: start;
  }

  &:last-of-type {
    justify-content: flex-end;

    @media ${device.laptop}{
      align-self: end;
    }
  }

`;

const Mock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
  border: 2px solid white;
  align-items: center;
  box-sizing: border-box;
  padding: 2.5vw;
  width: 24vh;

  .logo {
    width: 5vw;

    @media ${device.laptop}{
      width: 2vw;
    }
  }

  .logotype {
    height: 50vw;

    @media ${device.laptop}{
      height: 13vw;
    }
  }

  div {
    text-align: center;
    text-transform: uppercase;
    font-size: 3vw;
    line-height: 4vw;
    font-weight: 400;

    @media ${device.laptop}{
      font-size: 0.75vw;
      line-height: 1.4vw;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`;

const Desc = styled.div`
  padding: 2rem 5vw;
  font-size: 18px;
  color: rgb(51,51,51);
`;

const productListBlock = ({ products, color, updateCart, info }) => {

  return (
    <Product>
      <Block color={color}>
        <Col>
          A daily<br/>
          microdose<br/>
          of joy
        </Col>
        <Col>
          <Mock>
            <img className='logo' src={logo} alt='logo' />
            <img className='logotype' src={logoType} alt='logotype' />
            <div>
              <p>CBD {products[0].title}</p>
              <p>{products[0].variations[0].attributes[0].option}</p>
            </div>
          </Mock>
        </Col>
        <Col>
          Redrop<br/>
          Rejoice
        </Col>
      </Block>
      <Desc>{stripHtml(products[0].description)}</Desc>
      <ProductSelect
        id={products[0].id}
        updateCart={updateCart}
        options={products[0].variations}
        products={products}
      />
      <ProductInfo info={info} />
    </Product>
  )
}

export default productListBlock;
