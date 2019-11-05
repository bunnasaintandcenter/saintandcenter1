import React from 'react'
import Layout from '../components/Layout'
import qs from 'qs'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 90vw;
  margin: 4rem auto;

  h2 {
    font-weight: 300;
    text-transform: uppercase;
  }
`;

const OrderReceived = ({ location }) => {
  let query = ''

  if(location && location.search){
    query = qs.parse(location.search.slice(1))
  }
  return (
    <Layout location={location}>
      <Wrapper>
        <h2>Order Received #{query.order}</h2>

      </Wrapper>
    </Layout>
  )
}

export default OrderReceived;
