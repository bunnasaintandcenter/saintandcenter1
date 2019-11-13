import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout'
import AccountNav from '../../components/accountNav'
import { device } from '../../utils/devices'
import tabs from '../../utils/tabs'
import Orders from '../../components/orders'

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
          <Orders id={user.id} />
        </Section>
        </>
      }
    </Layout>
  )
}

export default Settings;
