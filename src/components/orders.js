import React from 'react'
import styled from 'styled-components'
import useOrders from '../hooks/useOrders'
import Moment from 'react-moment'

const Wrapper = styled.div`
`;

const List = styled.div`
  margin-top: 6rem;
  padding: 4rem;
  box-sizing: border-box;
`;

const Order = styled.div`
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

const Orders = ({ id }) => {

  const {loaded, orders} = useOrders(id)

  return (
    <Wrapper>
      {loaded && orders.length > 0
        ?
          <List>
            {orders.map(order => {
              const { id, date_created, total, line_items, status } = order;
              return (
                <Order key={id}>
                  <div>
                  <span>Order #{id}</span>
                  <span><Moment format='LL'>{date_created}</Moment></span>
                  <span>${total}</span>
                  <span>{status}</span>
                  </div>
                  <ul>
                    {line_items.map(item => {
                      const { name, subtotal, id } = item;
                      return (
                        <li key={id}>{name} - ${subtotal}</li>
                      )
                    })}
                  </ul>
                </Order>
              )
            })}
          </List>
        : <span>You have no orders</span>
      }
    </Wrapper>
  )
}

export default Orders;
