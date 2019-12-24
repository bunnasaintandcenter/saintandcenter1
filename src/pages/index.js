import React, { useState, useEffect, createRef } from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { device } from "../utils/devices"
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

const Wrapper = styled.div`
  min-height: 500vh;

  @media ${device.laptop} {
    min-height: calc(400vh);
  }
`

const Spacer = styled.div`
  margin-top: 300vh;
`

const Page = styled.div`
  position: ${props => (props.fixed ? `fixed` : `static`)};
  top: 56px;
  left: 0;
  width: 100vw;
  height: calc(100vh);
  z-index: ${props => (props.raiseUp ? 100 : 1)};
  background: rgb(248, 249, 244);
  margin-top: ${props => (props.fixed ? 0 : `calc(300vh + 56px)`)};
`

const Feature = styled.div`
  background: ${props => props.theme.color.gold};

  .gatsby-image-wrapper {
    height: 30vh;

    @media ${device.laptop} {
      height: 100vh;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 0;
    display: block;
  }
`

const Home = ({ location }) => {
  const hemp = createRef()
  const human = createRef()

  const [pageFixed, setPageFixed] = useState(true)
  const [raiseUp, setRaiseUp] = useState(false)

  const listenScrollEvent = () => {
    if (window.scrollY > window.innerHeight) {
      setRaiseUp(true)
    } else {
      setRaiseUp(false)
    }

    if (window.scrollY > window.innerHeight * 3) {
      setPageFixed(false)
    } else {
      setPageFixed(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    // return window.removeEventListener("scroll", listenScrollEvent)
  })

  const handlePageScroll = section => {
    switch (section) {
      case "intro":
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        })
        break
      case "shop": {
        window.scrollTo({
          top: window.innerHeight * 3,
          behavior: "smooth",
        })
        break
      }
      case "hemp":
        window.scrollTo({
          top: hemp.current.offsetTop - 56 - 32 + window.innerHeight * 3,
          behavior: "smooth",
        })
        break
      default:
        window.scrollTo({
          top: human.current.offsetTop - 56 - 32 + window.innerHeight * 6,
          behavior: "smooth",
        })
    }
  }

  const images = useStaticQuery(graphql`
    query HeroQuery {
      tincture: file(relativePath: { eq: "tincture.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1800) {
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

  return (
    <Layout location={location}>
      <SEO title="Saint and Center" />
      <Wrapper>
        <ImageHero
          handlePageScroll={handlePageScroll}
          img={images.tincture}
          alt="Tincture"
        />
        <Hero title="We have a mission" handlePageScroll={handlePageScroll} />
        {!pageFixed && <Spacer />}
        <Page raiseUp={raiseUp} fixed={pageFixed}>
          <SectionHeader title="Shop" />
          <ProductList />
          <Benefits />
          <SectionHeader title="Learn" secondary="Our Beliefs" />
          <TextBlockWithImage
            title="Holy Hemp"
            bgColor="rgb(0,51,37)"
            image={holyHemp}
            ref={hemp}
            url="/holy-hemp"
            actionText="To Holy Hemp"
          >
            <p>
              Saint and Center delves into the past to inform the future of CBD.
              Holy Hemp explores the roots and stems of this versatile Cannabis
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
            ref={human}
            url="/human-rites"
            bgColor="rgb(139,41,4)"
            actionText="To Human Rites"
          >
            <p>
              We believe in the fundamental freedom of natural plant wellness
              therapies and its fair legislation. Our mission is to help create
              equitable solutions for people and communities unfairly harmed by
              cannabis laws.
            </p>
          </TextBlockWithImage>
        </Page>
      </Wrapper>
    </Layout>
  )
}

export default Home
