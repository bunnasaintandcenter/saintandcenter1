import React, { useState } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { device } from "../utils/devices"
import { Waypoint } from "react-waypoint"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { isMobile } from "react-device-detect"

const Wrapper = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 56px;
  }
`
const Image = styled.div`
  position: sticky;
  top: calc(1.5vw + 3rem);
  height: calc(100vh - 1.5vw - 3rem);

  .gatsby-image-wrapper {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Text = styled.div`
  p {
    padding: 0 5vw;
    margin: 0 0 22px;

    @media ${device.laptop} {
      padding: 0;
    }
  }

  .gatsby-image-wrapper {
    margin-bottom: 22px;
  }

  div {
    box-sizing: border-box;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;

    @media ${device.laptop} {
      font-size: 30px;
      line-height: 48px;
      padding: 1rem;
    }
  }
`

const HolyHemp = ({ location }) => {
  const [slide, setSlide] = useState(0)

  const data = useStaticQuery(graphql`
    query HolyHempQuery {
      first: file(relativePath: { eq: "holy-hemp.jpg" }) {
        childImageSharp {
          fluid {
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
      second: file(relativePath: { eq: "holy-hemp1.jpg" }) {
        childImageSharp {
          fluid {
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
      third: file(relativePath: { eq: "holy-hemp2.jpg" }) {
        childImageSharp {
          fluid {
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

  const content = [
    {
      image: data.first,
      text: (
        <>
          <p>
            Up until the last century, hemp (or Cannabis Sativa) has been one of
            the most significant crops of humankind. Its usefulness has been
            recorded by ancient civilizations worldwide for 10,000 years. Before
            people found out about all the compounds that make up hemp, they
            knew the plant itself could provide spiritual, medicinal and
            practical benefits.
          </p>
          <p>
            The oldest record of hemp is the pharmacopeia Pen Ts'ao Ching —
            Chinese traditional medicine passed down since prehistoric times. In
            it, dioecious hemp complemented the philosophy of yin/yang. Hemp
            originated in the steppes of Asia, and the Chinese were one of the
            first to notice the Cannabis’ balancing effect. The psychoactive
            flowering buds of the female plant were known as "yin", and strong
            CBD-infused non-flowering male plant as "yang".
          </p>
        </>
      ),
    },
    {
      image: data.second,
      text: (
        <>
          <p>
            CBD and THC is one of the 100+ phytocannabinoids in hemp and other
            cannabis. Our bodies produce their own cannabinoids called
            endocannabinoid.
          </p>
          <p>
            These endocannabinoids make up the endocannabinoid system (ECS)
            which is a biological network of receptors throughout our body
            controlling vital functions like our immune system, sleep patterns,
            pain-sensation, mood, and even appetite. These bind to cannabinoid
            receptors and proteins that are expressed throughout the central
            nervous system (including the brain) and peripheral nervous system.
          </p>
          <p>
            When ingested or applied, CBD acts as a supplement to the
            endocannabinoid system, which go into our natural regulatory system
            to keeps us balanced. CBD signals the body to self regulate and self
            correct.
          </p>
        </>
      ),
    },
    {
      image: data.third,
      text: (
        <>
          <p>
            CBD has been linked to helping the human body deal with a number of
            modern stresses and illnesses including insomnia, depression,
            anxiety, migraines, fibromyalgia, epilepsy, Alzheimer's,
            Parkinson's, PTSD, hypertension, asthma, acne, arthritis, diabetes,
            Crohn’s disease, IBS, gastrointestinal disorders, chronic joint
            pain, menstrual cramps, menopause, osteoporosis, and that’s not even
            all.
          </p>
          <p>
            The healing power of hemp has been rediscovered. People are once
            again reincorporating hemp into their everyday wellness rituals. CBD
            is not a trend, it is a solution. As we overcome the stigma of hemp
            and the disconnection with our own bodies, what’s revealed is a
            higher you. The future of your wellbeing begins with a return to
            nature, a return to you.
          </p>
        </>
      ),
    },
  ]

  console.log(content)

  return (
    <Layout location={location}>
      <Wrapper>
        {!isMobile && (
          <Image>
            <Img fluid={content[slide].image.childImageSharp.fluid} />
          </Image>
        )}
        <Text>
          {content.map((p, index) => (
            <div key={index}>
              {isMobile ? (
                <Img fluid={p.image.childImageSharp.fluid} />
              ) : (
                <Waypoint onEnter={() => setSlide(index)} />
              )}
              <p>{p.text}</p>
            </div>
          ))}
        </Text>
      </Wrapper>
    </Layout>
  )
}
export default HolyHemp
