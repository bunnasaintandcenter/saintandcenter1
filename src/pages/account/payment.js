import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout'
import SectionHeader from '../../components/sectionHeader'
import AccountNav from '../../components/accountNav'
import { device } from '../../utils/devices'

const Section = styled.section`
  margin: 0 auto;
  font-weight: 200;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, 1fr);
  }

  h2 {
    font-weight: 300;
    text-transform: uppercase;
  }
`;

const Main = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;

  p {
    margin-bottom: 2rem;
    line-height: 1.6em;

    a {
      color: rgb(51,51,51);
    }
  }
`;

const Payment = ({ location, data }) => {

  const user = useSelector(state => state.user)

  console.log(user)

  const tabs = [
    { url: 'orders', title: 'Orders'},
    { url: 'subscriptions', title: 'Subscriptions'},
    { url: 'payment', title: 'Payment'},
    { url: 'address-book', title: 'Address Book'},
    { action: () => console.log('logout'), title: 'Logout'}
  ]

  return (
    <Layout>
      {user.id ?
        <>
        <SectionHeader title='Account' secondary={`Hello, ${user.first_name}`} />
        <Section cols={2}>
          <AccountNav
            tabs={tabs}
          />
          <Main>
          </Main>
        </Section>
        </>
        : <span>Please log in</span>
      }
    </Layout>
  )
}

export default Payment;