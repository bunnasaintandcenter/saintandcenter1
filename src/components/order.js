import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import { device } from '../utils/devices'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  border: 2px solid rgb(51,51,51);
  padding: 2rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2rem;

    @media ${device.laptop}{
      flex-direction: row;
    }
  }

  span {
    text-transform: capitalize;
    margin-bottom: 1rem;

    @media ${device.laptop}{
      margin: 0;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {

    }
  }
`;

const Order = ({ id, date, total, status, lineItems }) => (
  <Wrapper data-testid='order'>
    <div>
    <span>Order #{id}</span>
    <span><Moment format='LL'>{date}</Moment></span>
    <span>${total}</span>
    <span>{status}</span>
    </div>
    <ul>
      {lineItems.map(item => {
        const { name, subtotal, id } = item;
        return (
          <li key={id}>{name} - ${subtotal}</li>
        )
      })}
    </ul>
  </Wrapper>
);

Order.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  lineItems: PropTypes.array.isRequired
}

export default Order;
