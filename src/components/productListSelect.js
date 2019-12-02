import React, { useState } from "react"
import styled from "styled-components"
import Button from "./button"
import { useDispatch } from "react-redux"
import { device } from "../utils/devices"
import axios from "axios"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  font-weight: 300;

  button {
    font-weight: 200;
    grid-column: span 2;
    border: 0;
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

const Option = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  padding: 1rem 0;
  cursor: pointer;
  border-top: 1px solid rgba(51, 51, 51, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: transparent;
  color: rgb(51, 51, 51);
  text-decoration: ${props => (props.selected ? `underline` : `none`)};

  @media ${device.laptop} {
    font-size: 18px;
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
    border-left: 1px solid rgb(51, 51, 51);
  }
`

const ProductSelect = ({ options, products }) => {
  const dispatch = useDispatch()

  const [selectedOption, selectOption] = useState(0)
  const [recurrence, selectRecurrence] = useState("once")
  const [count, updateCount] = useState(1)

  const addToCart = async () => {
    const response = await axios.get(
      `https://andnone.co/saintcenter/wp-json/wc/v3`,
      { withCredentials: true }
    )

    const item = {
      product_id: products[recurrence === "monthly" ? 0 : 1].wordpress_id,
      variation_id:
        products[recurrence === "monthly" ? 0 : 1].product_variations[
          selectedOption
        ].id,
      quantity: count,
    }

    const res = await axios.post(
      `https://andnone.co/saintcenter/wp-json/cocart/v1/add-item`,
      item
    )
    dispatch({ type: "ADD_TO_CART", payload: item })
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
        <Button
          disabled={recurrence === "monthly"}
          className="btn"
          onClick={() => addToCart()}
        >
          Add to cart
        </Button>
      </Select>
    </Wrapper>
  )
}

ProductSelect.propTypes = {
  options: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
}

export default ProductSelect
