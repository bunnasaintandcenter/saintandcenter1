import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Header from '../components/header'
import TextBlock from '../components/textBlock'
import TextBlockWithImage from '../components/textBlockWithImage'
import ProductList from '../components/productList'
import Button from '../components/button'
import Ticker from '../components/Ticker'
import placerGreen from '../images/placer-green.jpg'
import placerGold from '../images/placer-gold.jpg'

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
        <Link to='/shop'><Button>Shop CBD</Button></Link>
      </TextBlock>
      <Ticker />
      <ProductList />
      <TextBlockWithImage
        title='Holy Hemp'
        image={placerGreen}
      >
        <p>You won’t feel high, but you will feel uplifted.</p>
        <p>We use organically grown hemp to extract a pure, non-psychoactive CBD that works with our body’s endocannabinoid system to help regulate our mood, stress, anxiety and pain- sensations.</p>
      </TextBlockWithImage>
      <TextBlockWithImage
        title='Holy Hemp'
        image={placerGold}
      >
        <p>You won’t feel high, but you will feel uplifted.</p>
        <p>We use organically grown hemp to extract a pure, non-psychoactive CBD that works with our body’s endocannabinoid system to help regulate our mood, stress, anxiety and pain- sensations.</p>
      </TextBlockWithImage>
    </Wrapper>
  </Layout>
);

export default Home;
