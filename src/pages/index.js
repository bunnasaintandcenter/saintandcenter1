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
import Ticker from '../components/ticker'
import Banner from '../components/banner'
import placerGreen from '../images/placer-green.jpg'
import placerGold from '../images/placer-gold.jpg'
import banner from '../images/banner.jpg'

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
        <Button>See How CBD Works</Button>
      </TextBlockWithImage>
      <Banner title='123 ABC CBD' image={banner} />
      <TextBlockWithImage
        title='Human Rites'
        image={placerGold}
        reverse
      >
        <p>Hemp freedom and justice for all.</p>
        <p>We believe that all companies profiting from the cultivation and production of hemp products have a responsibility to supporting fair legislation and creating equitable solutions for people and
communities unfairly harmed by cannabis laws.</p>
        <Button>Get Active</Button>
      </TextBlockWithImage>
    </Wrapper>
  </Layout>
);

export default Home;
