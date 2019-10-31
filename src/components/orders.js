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
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  span {
    text-transform: capitalize;
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
                  <span>Order #{id}</span>
                  <span><Moment format='LL'>{date_created}</Moment></span>
                  <span>${total}</span>
                  <span>{status}</span>
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
