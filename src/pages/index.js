import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import Hero from '../components/hero'
import Header from '../components/header'
import TextBlock from '../components/textBlock'
import ProductList from '../components/productList'
import Ticker from '../components/Ticker'

const Wrapper = styled.div`

`;

const Home = ({ location }) => (
  <Layout location={location}>
    <SEO title='Saint and Center' />
    <Wrapper>
      <Hero/>
      <Header />
      <TextBlock>
        <p>We’ve reimagined the power of hemp to extract cbd with a higher calling - saving the earth, restoring equality. It’s hemp for humans who levitate, create, vibrate.</p>
        <p>Let there be you.</p>
      </TextBlock>
      <Ticker />
      <ProductList />
    </Wrapper>
  </Layout>
);

export default Home;
