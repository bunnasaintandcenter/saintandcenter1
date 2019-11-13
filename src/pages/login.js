import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import LoginForm from '../components/loginForm'
import { device } from '../utils/devices'

const Wrapper = styled.div`

  @media ${device.laptop}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  aside {
    border-right: 2px solid black;
    padding: 5vw;
    box-sizing: border-box;
    text-transform: uppercase;

    h2 {
      font-weight: 400;
      font-size: 36px;
      text-transform: uppercase;
      text-align: center;

      @media ${device.laptop}{
        text-align: left;
      }
    }
  }
`;

const Home = ({ location }) => {

  return (
    <Layout location={location}>
      <SEO title='Login | Saint and Center' />
      <Wrapper>
        <aside>
          <h2>Log in</h2>
        </aside>
        <LoginForm />
      </Wrapper>
    </Layout>
  )
}

export default Home;
