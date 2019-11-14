import React from "react"
import Layout from "../components/layout"
import qs from "qs"
import styled from "styled-components"
import useOrder from "../hooks/useOrder"
import Order from "../components/order"

const Wrapper = styled.div`
  width: 90vw;
  margin: 4rem auto;

  h2 {
    font-weight: 300;
    text-transform: uppercase;
  }
`

const OrderReceived = ({ location }) => {
  let query = ""

  if (location && location.search) {
    query = qs.parse(location.search.slice(1))
  }

  const { loaded, order } = useOrder(query.order)

  console.log(order)

  return (
    <Layout location={location}>
      <Wrapper>
        <h2>Order Received #{query.order}</h2>
        <p>Thank you! Your order has been received.</p>
        {loaded && (
          <Order
            id={query.order}
            date={order.date_created}
            total={order.total}
            lineItems={order.line_items}
            status={order.status}
          />
        )}
      </Wrapper>
    </Layout>
  )
}

export default OrderReceived
