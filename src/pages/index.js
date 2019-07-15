import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Header from '../components/header'
import TextBlock from '../components/textBlock'
import TextBlockWithImage from '../components/textBlockWithImage'
import ProductList from '../components/productList'
import Ticker from '../components/ticker'
import Banner from '../components/banner'
import hemp from '../images/hemp.png'
import arch from '../images/arch.svg'
import banner from '../images/banner.jpg'
import image from '../images/hero.jpg'

const Wrapper = styled.div`

`;

const Home = ({ location, theme }) => (
  <Layout location={location}>
    <SEO title='Saint and Center' />
    <Wrapper>
      <Hero
        image={image}
        title='Your Higher Self'
        subtitle='(Without the High)'
        buttonText='Discover CBD'
        url='/learn'
      />
      <Header />
      <TextBlock>
        <p>You have a mission.</p>
        <p>And whatever your solemn quest or craft might be, you’ll need to shine inside and out in order.</p>
        <p>So we’ve reimagined the power of hemp to extract CBD with a higher calling.</p>
        <p>0% THC. Organically grown. Sustainably processed. And supporting hemp equality and justice for all.</p>
        <p>We’re making human essentials to grow and glow.</p>
        <p><strong>Let there be you.</strong></p>
      </TextBlock>
      <Ticker />
      <ProductList />
      <TextBlockWithImage
        title='Holy Hemp'
        bgColor='rgb(0,51,37)'
        textColor='rgb(0, 162, 123)'
        image={hemp}
      >
        <p>We use organically grown hemp to extract a pure, non-psychoactive CBD that works with our body’s endocannabinoid system to help regulate our mood, stress, anxiety and pain sensations.</p>
      </TextBlockWithImage>
      <Banner title='123 ABC CBD' image={banner} />
      <TextBlockWithImage
        title='Human Rites'
        image={arch}
        reverse
        bgColor='rgb(38,33,97)'
        textColor='rgb(74,144,226)'
      >
        <p>Hemp freedom and justice for all.</p>
        <p>We believe that all companies profiting from the cultivation and production of hemp products have a responsibility to supporting fair legislation and creating equitable solutions for people and
communities unfairly harmed by cannabis laws.</p>
      </TextBlockWithImage>
    </Wrapper>
  </Layout>
);

export default Home;
