import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout'
import SectionHeader from '../../components/sectionHeader'
import Subscriptions from '../../components/subscriptions'
import AccountNav from '../../components/AccountNav'

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  margin: 0 auto;
  font-weight: 200;

  h2 {
    font-weight: 300;
    text-transform: uppercase;
  }
`;

const Settings = ({ location, data }) => {

  const user = useSelector(state => state.user)

  const tabs = [
    { url: 'orders', title: 'Orders'},
    { url: 'subscriptions', title: 'Subscriptions'},
    { url: 'payment', title: 'Payment'},
    { url: 'address-book', title: 'Address Book'},
    { action: () => console.log('logout'), title: 'Logout'}
  ]

  return (
    <Layout>
      {user.id &&
        <>
        <SectionHeader title='Account' secondary={`Hello, ${user.first_name}`} />
        <Section cols={2}>
          <AccountNav
            tabs={tabs}
          />
          <Subscriptions />
        </Section>
        </>
      }
    </Layout>
  )
}

export default Settings;
