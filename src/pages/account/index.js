import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout'
import SectionHeader from '../../components/sectionHeader'
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

const Settings = ({ location, data }) => {

  const user = useSelector(state => state.user)

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
            <p>Hi {user.first_name}</p>
            <p>Welcome to your Saint and Center account dashboard.</p>
            <p>Here you can track your orders, edit your subscriptions and update your billing and shipping information.</p>
            <p>And, as always, contact us <a href="mailto:test@gmail.com">here</a> if you have any questions.</p>
          </Main>
        </Section>
        </>
        : <span>Please log in</span>
      }
    </Layout>
  )
}

export default Settings;
