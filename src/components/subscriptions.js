import React from "react"
import useSubscriptions from "../hooks/useSubscriptions"
import styled from "styled-components"
import Button from "./button"
import Moment from "react-moment"
import axios from "axios"

const Wrapper = styled.div`
  padding: 2rem;
  margin-top: 2rem;
`

const Sub = styled.div`
  border: 2px solid rgb(51, 51, 51);
  padding: 1rem;
  display: grid;
  grid-gap: 2rem;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
`

const Actions = styled.aside`
  display: flex;
  justify-content: flex-end;

  button {
    &:first-of-type {
      margin-right: 1rem;
    }
  }
`

const Subscriptions = ({ id }) => {
  const { loaded, subscriptions, fetchData } = useSubscriptions(id)

  const handleCancel = async sub_id => {
    const data = {
      status: "cancelled",
    }
    const response = await axios.put(
      `https://andnone.co/saintcenter/wp-json/wc/v1/subscriptions/${sub_id}/?consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`,
      data
    )
    if (response.status === 200) {
      fetchData()
    }
  }

  const handlePause = async sub_id => {
    const data = {
      status: "on-hold",
    }
    const response = await axios.put(
      `https://andnone.co/saintcenter/wp-json/wc/v1/subscriptions/${sub_id}/?consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`,
      data
    )
    if (response.status === 200) {
      fetchData()
    }
  }

  const handleReactivate = async sub_id => {
    const data = {
      status: "active",
    }
    const response = await axios.put(
      `https://andnone.co/saintcenter/wp-json/wc/v1/subscriptions/${sub_id}/?consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`,
      data
    )
    if (response.status === 200) {
      fetchData()
    }
  }

  const renderActions = (status, sub_id) => {
    switch (status) {
      case "active":
        return (
          <Actions>
            <Button onClick={() => handlePause(sub_id)}>Pause</Button>
            <Button onClick={() => handleCancel(sub_id)}>Cancel</Button>
          </Actions>
        )
      case "cancel":
        return (
          <Actions>
            <Button onClick={() => handleReactivate(sub_id)}>Restart</Button>
          </Actions>
        )
      default:
        return (
          <Actions>
            <Button onClick={() => handleReactivate(sub_id)}>Restart</Button>
            <Button onClick={() => handleCancel(sub_id)}>Cancel</Button>
          </Actions>
        )
    }
  }

  const renderStatus = (status, next_payment_date) => {
    switch (status) {
      case "active":
        return (
          <span>
            Renews on <Moment format="LL">{next_payment_date}</Moment>
          </span>
        )
      case "cancelled":
        return <span>Cancelled</span>
      case "on-hold":
        return <span>Paused</span>
      case "pending-cancel":
        return <span>Cancelled</span>
      case "expired":
        return <span>Expired</span>
      default:
        return <span></span>
    }
  }

  return (
    <Wrapper>
      {loaded && subscriptions.length > 0 ? (
        subscriptions.map(sub => {
          const { total, line_items, next_payment_date, status } = sub
          const sub_id = sub.id
          return (
            <Sub key={sub.id}>
              <span>{line_items[0].name}</span>
              <span>${total} per month</span>
              {renderStatus(status, next_payment_date)}
              {renderActions(status, sub_id)}
            </Sub>
          )
        })
      ) : (
        <span>You have no subscriptions</span>
      )}
    </Wrapper>
  )
}

export default Subscriptions
