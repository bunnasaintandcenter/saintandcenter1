import React, { createRef } from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ImageHero from "../components/imageHero"
import SectionHeader from "../components/sectionHeader"
import TextBlockWithImage from "../components/textBlockWithImage"
import ProductList from "../components/productList"
import Benefits from "../components/benefits"
import holyHemp from "../images/holy-hemp.svg"
import Img from "gatsby-image"
import humanRites from "../images/human-rites.svg"

const Wrapper = styled.div``

const Spacer = styled.div`
  margin-top: 300vh;
`

const Feature = styled.div`
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 0;
    display: block;
  }
`

const Home = ({ location }) => {
  const intro = createRef()

  const handleHeroScroll = () => {
    intro.current.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const images = useStaticQuery(graphql`
    query HeroQuery {
      tincture: file(relativePath: { eq: "tincture.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1800) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
      products: file(relativePath: { eq: "products.jpg" }) {
        childImageSharp {
          fluid(quality: 85, maxWidth: 1800) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `)

  console.log(images.tincture)

  return (
    <Layout location={location}>
      <SEO title="Saint and Center" />
      <Wrapper>
        <ImageHero img={images.tincture} alt="Tincture" />
        <Hero title="We have a mission" handleHeroScroll={handleHeroScroll} />
        <Spacer />
        <SectionHeader title="Shop" />
        <ProductList />
        <Benefits />
        <SectionHeader title="Learn" secondary="Our Beliefs" />
        <TextBlockWithImage
          title="Holy Hemp"
          bgColor="rgb(0,51,37)"
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
        <Feature>
          <Img
            fluid={images.products.childImageSharp.fluid}
            alt="S+C Products"
          />
        </Feature>
        <TextBlockWithImage
          title="Human Rites"
          image={humanRites}
          reverse
          url="/human-rites"
          bgColor="rgb(139,41,4)"
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
