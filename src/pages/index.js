import React, { useState } from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Header from '../components/header'
import TextBlock from '../components/textBlock'
import TextBlockWithImage from '../components/textBlockWithImage'
import ProductList from '../components/productList'
import Banner from '../components/banner'
import hemp from '../images/hemp.png'
import arch from '../images/arch.svg'
import banner from '../images/banner.jpg'
import image from '../images/hero.jpg'
import Carousel from '../components/carousel'
import sliderOne from '../images/slider-1.jpg'
import sliderTwo from '../images/slider-2.jpg'
import productOne from '../images/product-1.jpg'
import productTwo from '../images/product-2.jpg'
import SectionHeader from '../components/sectionHeader'

const Wrapper = styled.div`

`;

const Home = ({ location, theme }) => {

  const [cart, updateCart] = useState([])

  const addToCart = (productId, variationId, quantity) => {

    const item = {
      product_id: productId,
      variation_id: variationId,
      quantity: quantity
    }

    updateCart([...cart, item])
  }

  return (
    <Layout location={location}>
      <SEO title='Saint and Center' />
      <Wrapper>
        <Hero
          image={image}
          title='We have a mission.'
        />
        <Header cart={cart} />
        <TextBlock>
          <p>Your body and mind need to shine.</p>
          <p>Taking organically grown hemp, we extract CBD with a high potency and an even higher calling.</p>
          <p>Zero % THC. Sustainably processed. Supporting hemp equality and justice for all.</p>
          <p>Feel good. Do better. Create more.</p>
        </TextBlock>
        <Carousel cover title='Let there be you.'>
          <div>
            <img src={sliderOne} alt='slider 1' />
          </div>
          <div>
            <img src={sliderTwo} alt='slider 2' />
          </div>
        </Carousel>
        <SectionHeader title='Shop' />
        <Carousel arrows bg='#E1D6D6'>
          <div>
            <img src={productOne} alt='product 1' />
          </div>
          <div>
            <img src={productTwo} alt='product 2' />
          </div>
        </Carousel>
        <ProductList updateCart={addToCart} />
        <SectionHeader
          title='Learn'
          secondary='ABC'
        />
        <TextBlockWithImage
          title='Holy Hemp'
          bgColor='rgb(0,51,37)'
          textColor='rgb(2, 210, 161)'
          image={hemp}
          actionText='See How CBD Works'
        >
          <p>We use organically grown hemp to extract a pure, non-psychoactive CBD that works with our body’s endocannabinoid system to help regulate our mood, stress, anxiety and pain sensations.</p>
        </TextBlockWithImage>
        <TextBlockWithImage
          title='Human Rites'
          image={arch}
          reverse
          bgColor='rgb(38,33,97)'
          textColor='rgb(167,201,253)'
          actionText='Get Active'
        >
          <p>We believe that all companies profiting from the cultivation and production of hemp products have a responsibility to supporting fair legislation and creating equitable solutions for people and
  communities unfairly harmed by cannabis laws.</p>
        </TextBlockWithImage>
      </Wrapper>
    </Layout>
  )
}

export default Home;
