import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import LoginForm from '../components/loginForm'
import RegisterForm from '../components/registerForm'
import Footer from '../components/footer'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Home = ({ location, theme }) => {

  return (
    <Layout location={location}>
      <SEO title='Login | Saint and Center' />
      <Wrapper>
        <LoginForm />
        <RegisterForm />
      </Wrapper>
      <Footer />
    </Layout>
  )
}

export default Home;
