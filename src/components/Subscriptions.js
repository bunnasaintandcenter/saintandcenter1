import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Button from './Button'
import Moment from 'react-moment'

const Wrapper = styled.div`
  padding: 2rem;
`;

const Sub = styled.div`
  border: 2px solid rgb(51,51,51);
  padding: 1rem;
  display: grid;
  grid-gap: 2rem;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
`;

const Actions = styled.aside`
  display: flex;
  justify-content: flex-end;

  button {
    &:first-of-type {
      margin-right: 1rem;
    }
  }
`;

const Subscriptions = ({ customer_id }) => {

  const [subscriptions, setSubscriptions] = useState([])

  useEffect(() => {
    axios.get(`https://andnone.co/saintcenter/wp-json/wc/v1/subscriptions?customerid=${customer_id}&consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`)
    .then(res => {
      setSubscriptions(res.data)
    })
  }, [subscriptions])

  return (
    <Wrapper>
      {subscriptions.length > 0 &&
        subscriptions.map(sub => {
          const { total, line_items, next_payment_date } = sub;
          return (
            <Sub key={sub.id}>
              <span>{line_items[0].name}</span>
              <span>${total} per month</span>
              <span>Renews on <Moment format='LL'>{next_payment_date}</Moment></span>
              <Actions>
                <Button>Pause</Button>
                <Button>Cancel</Button>
              </Actions>
            </Sub>
          )
        })
      }
    </Wrapper>
  )
}

export default Subscriptions;
