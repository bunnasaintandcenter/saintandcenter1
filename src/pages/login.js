import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import LoginForm from '../components/loginForm'
import Footer from '../components/footer'
import SectionHeader from '../components/sectionHeader'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  aside {
    border-right: 2px solid black;
    padding: 5vw;
    box-sizing: border-box;
    text-transform: uppercase;

    h2 {
      font-weight: 400;
      font-size: 36px;
      text-transform: uppercase;
    }
  }
`;

const Home = ({ location, theme }) => {

  return (
    <Layout location={location}>
      <SEO title='Login | Saint and Center' />
      <SectionHeader title='Account' />
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
