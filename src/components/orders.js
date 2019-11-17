import React from "react"
import styled from "styled-components"
import useOrders from "../hooks/useOrders"
import Order from "./order"

const Wrapper = styled.div``

const List = styled.div`
  margin-top: 6rem;
  padding: 4rem;
  box-sizing: border-box;
`

const Orders = ({ id }) => {
  const { loaded, orders } = useOrders(id)

  return (
    <Wrapper data-testid="orders">
      {loaded && orders.length > 0 ? (
        <List>
          {orders.map(order => {
            const { id, date_created, total, line_items, status } = order
            return (
              <Order
                key={id}
                id={id}
                date={date_created}
                total={total}
                lineItems={line_items}
                status={status}
              />
            )
          })}
        </List>
      ) : (
        <span>You have no orders</span>
      )}
    </Wrapper>
  )
}

export default Orders
