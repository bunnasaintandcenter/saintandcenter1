import React, { createRef } from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TextBlock from '../components/textBlock'
import TextBlockWithImage from '../components/textBlockWithImage'
import ProductList from '../components/productList'
import Benefits from '../components/benefits'
import holyHemp from '../images/holy-hemp.svg'
import humanRites from '../images/human-rites.svg'
import Carousel from '../components/carousel'
import productOne from '../images/product-1.jpg'
import productTwo from '../images/product-2.jpg'
// import storyboard from '../images/storyboard.gif'
// import BlockQuote from '../components/blockQuote'
import SectionHeader from '../components/sectionHeader'
import { isBrowser } from 'react-device-detect'

const Wrapper = styled.div`
`;

// const Gif = styled.div`
//   background: white;
//
//   img {
//     margin: 0;
//     width: 100%;
//     display: flex;
//
//     @media ${device.laptop}{
//       height: calc(100vh - 2rem - 4vw);
//       object-fit: contain;
//     }
//   }
//
// `;

const Home = ({ location, theme }) => {

  const intro = createRef()

  const handleHeroScroll = () => {
    console.log('scrolling')
    console.log(intro.current.scrollIntoView({behavior: "smooth", block: "center"}))
  }

  return (
    <Layout location={location}>
      <SEO title='Saint and Center' />
      <Wrapper>
        <Hero
          title='We have a mission'
          handleHeroScroll={handleHeroScroll}
        />
        <TextBlock ref={intro}>
          <p>From organically grown hemp,<br/>we've extracted CBD with a high potency{isBrowser && <br/> }and an even higher calling.</p>
          <p>Supporting hemp equality and justice.<br/> Sustainably processed. And 0% THC.</p>
          <h2>Your higher self<br/>without the high.</h2>
        </TextBlock>
        <SectionHeader title='Shop' />
        <Carousel arrows bg='#E1D6D6'>
          <div>
            <img src={productOne} alt='product 1' />
          </div>
          <div>
            <img src={productTwo} alt='product 2' />
          </div>
        </Carousel>
        <ProductList />
        <Benefits />
        <SectionHeader
          title='Learn'
          secondary='ABC'
        />
        <TextBlockWithImage
          title='Holy Hemp'
          bgColor='rgb(0,51,37)'
          textColor='rgb(2, 210, 161)'
          image={holyHemp}
          url='/holy-hemp'
          actionText='Learn More About Hemp'
        >
          <p>A natural way to feel uplifted. We use organically grown hemp to extract a pure, non-psychoactive CBD that works with our body's endocannabinoid system to help regulate mood, stress, anxiety and pain sensations.</p>
        </TextBlockWithImage>
        <TextBlockWithImage
          title='Human Rites'
          image={humanRites}
          reverse
          url='/human-rites'
          bgColor='rgb(38,33,97)'
          textColor='rgb(167,201,253)'
          actionText='See How CBD Works'
        >
          <p>We believe that all companies profiting from the cultivation and production of hemp products have a responsibility to supporting fair legislation and creating equitable solutions for people and
  communities unfairly harmed by cannabis laws.</p>
        </TextBlockWithImage>
      </Wrapper>
    </Layout>
  )
}

export default Home;
