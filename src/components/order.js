import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'

const Wrapper = styled.div`
  border: 2px solid rgb(51,51,51);
  padding: 2rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  span {
    text-transform: capitalize;
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
  <Wrapper>
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

export default Order;
