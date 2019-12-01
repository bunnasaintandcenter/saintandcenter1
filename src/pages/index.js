import React, { createRef } from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ImageHero from "../components/ImageHero"
import SectionHeader from "../components/sectionHeader"
import TextBlock from "../components/textBlock"
import TextBlockWithImage from "../components/textBlockWithImage"
import ProductList from "../components/productList"
import Benefits from "../components/benefits"
import holyHemp from "../images/holy-hemp.svg"
import humanRites from "../images/human-rites.svg"

import tincture from "../images/tincture.jpg"

const Wrapper = styled.div``

const Home = ({ location }) => {
  const intro = createRef()

  const handleHeroScroll = () => {
    intro.current.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <Layout location={location}>
      <SEO title="Saint and Center" />
      <Wrapper>
        <Hero title="We have a mission" handleHeroScroll={handleHeroScroll} />
        <ImageHero src={tincture} alt="Tincture" />
        <TextBlock>
          <p>Your world is always on.</p>
          <p>Giving rise to pain, stress, distractons, restlessness.</p>
          <p>Changing you from a human being to a human doing.</p>
          <p>CBD revives you and brings you to the center.</p>
          <p>When you shine, we all shine.</p>
          <p>Welcome to the Revival. Let there be you.</p>
        </TextBlock>
        <SectionHeader title="Shop" />
        <ProductList />
        <Benefits />
        <SectionHeader title="Learn" secondary="Our Beliefs" />
        <TextBlockWithImage
          title="Holy Hemp"
          bgColor="rgb(0,51,37)"
          textColor="rgb(2, 210, 161)"
          image={holyHemp}
          url="/holy-hemp"
          actionText="To Holy Hemp"
        >
          <p>
            Saint and Center delves into the past to inform the future of CBD.
            Holy Hemp explores the roots and stems of this versatile Cannabius
            plant that is good for all human and plant kind.
          </p>
        </TextBlockWithImage>
        <br />
        <br />
        <br />
        <br />
        <TextBlockWithImage
          title="Human Rites"
          image={humanRites}
          reverse
          url="/human-rites"
          bgColor="rgb(38,33,97)"
          textColor="rgb(167,201,253)"
          actionText="To Human Rites"
        >
          <p>
            We believe a company profiting from the culvation and production of
            hemp products should support fair legislation. We help create
            equitable solution for people and communities unfairly harmed by
            cannabis laws.
          </p>
        </TextBlockWithImage>
      </Wrapper>
    </Layout>
  )
}

export default Home
