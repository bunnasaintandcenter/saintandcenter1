import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Layout from '../components/layout'
import SectionHeader from '../components/sectionHeader'
import ShippingForm from '../components/ShippingForm'
import Subscriptions from '../components/Subscriptions'

const Section = styled.section`
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-gap: 4rem;
  margin: 0 auto;
  padding: 4rem 0;
  font-weight: 200;

  h2 {
    font-weight: 300;
    text-transform: uppercase;
  }
`;

const Settings = ({ location, data }) => {

  const user = useSelector(state => state.user)
  console.log(user)

  return (
    <Layout>
      {user.id &&
        <>
          <SectionHeader title='Settings' secondary={`Hello, ${user.first_name}`} />
          <Section cols={3}>
            <ShippingForm address={user.shipping} user={user} title='shipping' />
            <ShippingForm address={user.billing} user={user} title='billing' />
          </Section>
          <SectionHeader title='Subscriptions' />
          <Section>
            <Subscriptions customer_id={user.id} />
          </Section>
        </>
      }
    </Layout>
  )
}

export default Settings;
