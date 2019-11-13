import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './button'
import { useDispatch } from 'react-redux'
import Expandable from './expandable'
import stripHtml from 'string-strip-html'
import { device } from '../utils/devices'
import axios from 'axios'
import PropTypes from 'prop-types'
import { MdAttachFile } from 'react-icons/md'

const Wrapper = styled.div`
  font-weight: 300;

  button {
    grid-column: span 2;
    border: 0;
    background: white;
    padding: 1.5rem;

    &:hover {
      transform: none;
    }
  }
`;

const Select = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .option {
    &:first-of-type {
      grid-column: ${props => props.options < 2 ? `span 2` : `auto` }
    }
  }
`;

const Price = styled.div`
  padding: 2rem 5vw;
  font-size: 16px;
  grid-column: ${props => props.recurrence === 'once' ? `span 1` : `span 2`};
  text-transform: uppercase;
  border-top: 2px solid rgba(51,51,51, 1);

  @media ${device.laptop}{
    font-size: 18px;
  }
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-top: 2px solid rgba(51,51,51, 1);

  @media ${device.laptop}{
    font-size: 18px;
  }

  span {
    width: 36px;
    height: 36px;
    border-top: 1px solid rgb(51,51,51);
    border-bottom: 1px solid rgb(51,51,51);
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.laptop}{
      width: 48px;
      height: 48px;
    }
  }

  button {
    cursor: pointer;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(51,51,51,1);
    padding: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    font-weight: 400;
    font-size: 20px;

    @media ${device.laptop}{
      width: 48px;
      height: 48px;
      font-size: 24px;
    }
  }
`;

const Option = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  padding: 1rem 0;
  cursor: pointer;
  border-top: 2px solid rgba(51,51,51, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: ${props => props.selected ? `rgb(51,51,51)` : `transparent` };
  color: ${props => props.selected ? `white` : `rgb(51,51,51)` };

  @media ${device.laptop}{
    font-size: 18px;
    padding: 2rem 0;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  input {
    display: none;
  }

  &:nth-of-type(2n){
    border-left: 2px solid rgb(51,51,51);
  }
`;

const ProductSelect = ({ options, products }) => {

  console.log(products)

  const dispatch = useDispatch()

  const [selectedOption, selectOption] = useState(0)
  const [recurrence, selectRecurrence ] = useState('once')
  const [count, updateCount] = useState(1)

  const addToCart = async () => {

    const response = await axios.get(`https://andnone.co/saintcenter/wp-json/wc/v3`,
      { withCredentials: true}
    )

    console.log(response)

    const item = {
      product_id: products[recurrence === 'monthly' ? 0 : 1].wordpress_id,
      variation_id: products[recurrence === 'monthly' ? 0 : 1].product_variations[selectedOption].id,
      quantity: count
    }

    const res = await axios.post(`https://andnone.co/saintcenter/wp-json/cocart/v1/add-item`, item)
      console.log(res)
    dispatch({ type: 'ADD_TO_CART', payload: item})
  }

  const addToCount = () => {
    updateCount(count + 1)
  }

  const subtractfromCount = () => {
    updateCount(count - 1)
  }

  const handleSwitchOption = (type) => {
    selectRecurrence(type)
  }

  return (
    <Wrapper data-testid='product-select'>
      <Select options={options.length}>
      {options.map((option, index) => {
        return (
          <Option selected={selectedOption === index} className='option' key={index} onClick={() => selectOption(index)}>
            <input
              name='option'
              type="radio"
              value={index}
              onChange={value => console.log(value)}
              checked={selectedOption === index}
            />
            <label htmlFor='option'>{products[0].product_variations[index].attributes[0].option}</label>
          </Option>
        )
      })}
      </Select>
      <Select>
      <Option selected={recurrence === 'once'} onClick={() => handleSwitchOption('once')}>
        <input name='recurrence' type="radio" value='once' checked={recurrence === 'once'} onChange={value => console.log(value)}/>
        <label htmlFor='recurrence'>Once</label>
      </Option>
      <Option selected={recurrence === 'monthly'} onClick={() => handleSwitchOption('monthly')}>
        <input name='recurrence' type="radio" value='monthly' checked={recurrence === 'monthly'} onChange={value => console.log(value)} />
        <label htmlFor='recurrence'>Monthly</label>
      </Option>
      <Price recurrence={recurrence}>
        {recurrence === 'monthly'
          ? <>Coming soon</>
          : <>${(products[1].product_variations[selectedOption].price) * count}</>
        }
      </Price>
      {recurrence === 'once' &&
        <Counter>
          <button disabled={count < 2} onClick={subtractfromCount}>-</button>
          <span>{count}</span>
          <button onClick={addToCount}>+</button>
        </Counter>
      }
      <Button disabled={recurrence === 'monthly'} className='btn' onClick={() => addToCart()}>Add to cart</Button>
      <Expandable padded title='Ingredients'>
        <p>{stripHtml(products[1].short_description)}</p>
      </Expandable>
      <Expandable padded title='Lab Results'>
        {products[1].acf.product_lab_results &&
          <a target="_blank" rel="noopener noreferrer" href={products[1].acf.product_lab_results.url }><MdAttachFile size={24} /> Product Lab Results</a>
        }
        {products[1].acf.bulk_cbd_lab_results &&
          <a target="_blank" rel="noopener noreferrer" href={products[1].acf.bulk_cbd_lab_results.url }><MdAttachFile size={24} /> Bulk CBD Lab Results</a>
        }
      </Expandable>
      </Select>
    </Wrapper>
  )
}

ProductSelect.propTypes = {
  options: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
}

export default ProductSelect;
