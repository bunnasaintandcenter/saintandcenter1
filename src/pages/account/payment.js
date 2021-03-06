import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout'
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

const Payment = ({ location }) => {

  const user = useSelector(state => state.user)

  return (
    <Layout location={location}>
      {user.id ?
        <>
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
