import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './button'
import { useDispatch } from 'react-redux'
import Expandable from './expandable'
import stripHtml from 'string-strip-html'

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
  font-size: 24px;
  grid-column: ${props => props.recurrence === 'once' ? `span 1` : `span 2`};
  text-transform: uppercase;
  border-top: 2px solid rgba(51,51,51, 1);
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-top: 2px solid rgba(51,51,51, 1);

  span {
    width: 48px;
    height: 48px;
    border-top: 1px solid rgb(51,51,51);
    border-bottom: 1px solid rgb(51,51,51);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
    width: 48px;
    height: 48px;
    border: 1px solid rgba(51,51,51,1);
    padding: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    font-weight: 400;
    font-size: 24px;
  }
`;

const Option = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  padding: 2rem 0;
  cursor: pointer;
  border-top: 2px solid rgba(51,51,51, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: ${props => props.selected ? `white` : `transparent` };

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

const ProductSelect = ({ options, updateCart, id, products }) => {

  console.log(products)

  const dispatch = useDispatch()

  const [selectedOption, selectOption] = useState(0)
  const [recurrence, selectRecurrence ] = useState('once')
  const [count, updateCount] = useState(1)

  const addToCart = () => {

    const item = {
      product_id: products[recurrence === 'monthly' ? 0 : 1].wordpress_id,
      variation_id: products[recurrence === 'monthly' ? 0 : 1].variations[selectedOption].id,
      quantity: count
    }

    console.log(item)
    dispatch({ type: 'ADD_TO_CART', payload: item})
  }

  const addToCount = () => {
    updateCount(count + 1)
  }

  const subtractfromCount = () => {
    updateCount(count - 1)
  }

  const handleSwitchOption = (type) => {
    console.log(type)
    selectRecurrence(type)

  }

  return (
    <Wrapper>
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
            <label htmlFor='option'>{products[0].variations[index].attributes[0].option}</label>
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
          ? <>${products[0].variations[selectedOption].price} per month</>
          : <>${(products[1].variations[selectedOption].price) * count}</>
        }
      </Price>
      {recurrence === 'once' &&
        <Counter>
          <button disabled={count < 2} onClick={subtractfromCount}>-</button>
          <span>{count}</span>
          <button onClick={addToCount}>+</button>
        </Counter>
      }
      <Button className='btn' onClick={() => addToCart()}>Add to cart</Button>
      <Expandable title='Ingredients'>
        <p>{stripHtml(products[1].short_description)}</p>
      </Expandable>
      <Expandable title='Lab Results'>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
      </Expandable>
      </Select>
    </Wrapper>
  )
}

export default ProductSelect;
