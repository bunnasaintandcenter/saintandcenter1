import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout'
import SectionHeader from '../../components/sectionHeader'
import Subscriptions from '../../components/subscriptions'
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

  h2 {
    font-weight: 300;
    text-transform: uppercase;
  }
`;

const Settings = ({ location, data }) => {

  const user = useSelector(state => state.user)

  return (
    <Layout>
      {user.id &&
        <>
        <SectionHeader title='Account' secondary={`Hello, ${user.first_name}`} />
        <Section cols={2}>
          <AccountNav
            tabs={tabs}
          />
          <Subscriptions id={user.id} />
        </Section>
        </>
      }
    </Layout>
  )
}

export default Settings;
