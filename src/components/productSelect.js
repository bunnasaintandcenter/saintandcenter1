import React, { useState } from "react"
import styled from "styled-components"
import Button from "./button"
import { useDispatch } from "react-redux"
import Expandable from "./expandable"
import stripHtml from "string-strip-html"
import { device } from "../utils/devices"
import axios from "axios"
import PropTypes from "prop-types"
import { MdAttachFile } from "react-icons/md"

const Wrapper = styled.div`
  font-weight: 300;

  button {
    grid-column: span 2;
    border: 0;
    font-size: 24px;
    font-weight: 200;
    background: white;
    padding: 1.5rem;

    &:hover {
      transform: none;
    }
  }
`

const Select = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .option {
    &:first-of-type {
      grid-column: ${props => (props.options < 2 ? `span 2` : `auto`)};
    }
  }
`

const Price = styled.div`
  padding: 24px;
  font-size: 18px;
  grid-column: ${props => (props.recurrence === "once" ? `span 1` : `span 2`)};
  text-transform: uppercase;
  border-top: 1px solid black;
  text-align: center;

  @media ${device.laptop} {
    font-size: 24px;
  }
`

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-top: 1px solid black;

  @media ${device.laptop} {
    font-size: 18px;
  }

  span {
    width: 33px;
    height: 33px;
    border-top: 1px solid rgb(51, 51, 51);
    border-bottom: 1px solid rgb(51, 51, 51);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
    width: 33px;
    height: 33px;
    border: 1px solid black;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    font-weight: 100;
    font-size: 20px;
  }
`

const Option = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  padding: 12px 0;
  cursor: pointer;
  border-top: 1px solid black;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: ${props => (props.selected ? `white` : `transparent`)};
  color: black;
  text-decoration: ${props => (props.selected ? `underline` : `none`)};

  @media ${device.laptop} {
    font-size: 16px;
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

  &:nth-of-type(2n) {
    border-left: 1px solid black;
  }
`

const ProductSelect = ({ options, products, selectOption, selectedOption }) => {
  const dispatch = useDispatch()

  const [recurrence, selectRecurrence] = useState("once")
  const [count, updateCount] = useState(1)

  const addToCart = async () => {
    const response = await axios.get(
      `https://checkout.saintandcenter.com/wp-json/wc/v3`,
      { withCredentials: true }
    )
    if (response) {
      const item = {
        product_id: products[recurrence === "monthly" ? 0 : 1].wordpress_id,
        variation_id:
          products[recurrence === "monthly" ? 0 : 1].product_variations[
            selectedOption
          ].id,
        quantity: count,
      }

      const res = await axios.post(
        `https://checkout.saintandcenter.com/wp-json/cocart/v1/add-item`,
        item,
        { withCredentials: true }
      )
      if (res) {
        console.log(res)
        const hash = res.data.data_hash
        console.log("hash", hash)
        dispatch({ type: "ADD_TO_CART", payload: item })
      }
    }
  }

  const addToCount = () => {
    updateCount(count + 1)
  }

  const subtractfromCount = () => {
    updateCount(count - 1)
  }

  const handleSwitchOption = type => {
    selectRecurrence(type)
  }

  return (
    <Wrapper data-testid="product-select">
      <Select options={options.length}>
        {options.map((option, index) => {
          return (
            <Option
              selected={selectedOption === index}
              className="option"
              key={index}
              onClick={() => selectOption(index)}
            >
              <input
                name="option"
                type="radio"
                value={index}
                onChange={value => console.log(value)}
                checked={selectedOption === index}
              />
              <label htmlFor="option">
                {products[0].product_variations[index].attributes[0].option}
              </label>
            </Option>
          )
        })}
      </Select>
      <Select>
        <Option
          selected={recurrence === "once"}
          onClick={() => handleSwitchOption("once")}
        >
          <input
            name="recurrence"
            type="radio"
            value="once"
            checked={recurrence === "once"}
            onChange={value => console.log(value)}
          />
          <label htmlFor="recurrence">Once</label>
        </Option>
        <Option
          selected={recurrence === "monthly"}
          onClick={() => handleSwitchOption("monthly")}
        >
          <input
            name="recurrence"
            type="radio"
            value="monthly"
            checked={recurrence === "monthly"}
            onChange={value => console.log(value)}
          />
          <label htmlFor="recurrence">Monthly</label>
        </Option>
        <Price recurrence={recurrence}>
          {recurrence === "monthly" ? (
            <>
              $
              {products[0] &&
                products[0].product_variations[selectedOption].price * count}
            </>
          ) : (
            <>
              $
              {products[1] &&
                products[1].product_variations[selectedOption].price * count}
            </>
          )}
        </Price>
        {recurrence === "once" && (
          <Counter>
            <button disabled={count < 2} onClick={subtractfromCount}>
              -
            </button>
            <span>{count}</span>
            <button onClick={addToCount}>+</button>
          </Counter>
        )}
        <Button className="btn" onClick={() => addToCart()}>
          Add to cart
        </Button>
        <Expandable padded title="Ingredients">
          <p>{stripHtml(products[1].short_description)}</p>
        </Expandable>
        <Expandable padded title="Lab Results">
          {products[1].acf.product_lab_results && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={products[1].acf.product_lab_results.url}
            >
              <MdAttachFile size={24} /> Product Lab Results
            </a>
          )}
        </Expandable>
      </Select>
    </Wrapper>
  )
}

ProductSelect.propTypes = {
  options: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
}

export default ProductSelect
