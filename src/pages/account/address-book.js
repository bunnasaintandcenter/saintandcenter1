import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout'
import ShippingForm from '../../components/shippingForm'
import AccountNav from '../../components/accountNav'
import { device } from '../../utils/devices'
import tabs from '../../utils/tabs'

const Section = styled.section`
  margin: 0 auto;
  font-weight: 200;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, 1fr);
  }

  h3 {
    font-weight: 300;
  }
`;

const Main = styled.div`
  padding: 2rem;
`;

const Settings = ({ location }) => {

  const user = useSelector(state => state.user)

  return (
    <Layout location={location}>
      {user.id &&
        <>
        <Section cols={2}>
          <AccountNav
            tabs={tabs}
          />
          <Main>
            <h3>Edit or update where you'd like your order shipped.</h3>
            <ShippingForm address={user.shipping} user={user} title='shipping' />
            <ShippingForm address={user.billing} user={user} title='billing' />
          </Main>
        </Section>
        </>
      }
    </Layout>
  )
}

export default Settings;
