import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import Layout from "../components/layout"
import ShippingForm from "../components/shippingForm"
import Subscriptions from "../components/subscriptions"
import AccountNav from "../components/accountNav"
import SEO from "../components/seo"

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
`

const Settings = ({ location }) => {
  const user = useSelector(state => state.user)

  return (
    <Layout location={location}>
      <SEO title="Settings | Saint and Center" />
      {user.id && (
        <>
          <AccountNav />
          <Section cols={2}>
            <ShippingForm
              address={user.shipping}
              user={user}
              title="shipping"
            />
            <ShippingForm address={user.billing} user={user} title="billing" />
          </Section>
          <Section>
            <Subscriptions customer_id={user.id} />
          </Section>
        </>
      )}
    </Layout>
  )
}

export default Settings
