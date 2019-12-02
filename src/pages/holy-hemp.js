import React, { useState } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { device } from "../utils/devices"
import { Waypoint } from "react-waypoint"

import image from "../images/holy-hemp.jpg"
import image1 from "../images/holy-hemp1.jpg"
import image2 from "../images/holy-hemp2.jpg"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${device.laptop} {
    padding-top: calc(1.5vw + 3rem);
  }
`
const Image = styled.div`
  position: sticky;
  top: calc(1.5vw + 3rem);
  height: calc(100vh - 1.5vw - 3rem);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Text = styled.div`
  div {
    box-sizing: border-box;
    font-weight: 300;
    font-size: 30px;
    line-height: 48px;
    padding: 1rem;
    height: calc(100vh - 1.5vw - 3rem);
  }
`

const data = [
  {
    image: image,
    text: `Up until the last century, hemp (or Cannabis Sativa) has been one of the most significant crops of humankind. Its usefulness has been recorded by ancient civilizations worldwide for 10,000 years. Before people found out about all the compounds that make up hemp, they knew the plant itself could provide spiritual, medicinal and practical benefits.`,
  },
  {
    image: image1,
    text: `The oldest record of hemp is the pharmacopeia Pen Ts'ao Ching — Chinese traditional medicine passed down since pre-historic times. In it, dioecious hemp complemented the philosophy of yin/yang. Hemp originated in the steppes of Asia, and the Chinese were one of the first to notice the Cannabis’ balancing effect. The psychoactive flowering buds of the female plant were known as "yin", and strong CBD-infused non-flowering male plant as "yang". CBD and THC is one of the 100+ phytocannabinoids in hemp and other cannabis. Our bodies produce their own cannabinoids called endocannabinoid, which go into a regulatory system that keeps us balanced. When ingested, CBD acts as a supplement to the endocannabinoid system.`,
  },
  {
    image: image2,
    text: `From the start of WW2 to the 1970's war on drugs campaign, the 20th century has seen a complete twist on perspective. However, the farm bill passed in 2014 seeks to reverse those effects. The future seems promising. Scientists and researchers have only begun to tap into what we already seem to know. As long as there are humans, there is hemp.`,
  },
]

const HolyHemp = ({ location }) => {
  const [slide, setSlide] = useState(0)

  return (
    <Layout location={location}>
      <Wrapper>
        <Image>
          <img src={data[slide].image} />
        </Image>
        <Text>
          {data.map((p, index) => (
            <div key={index}>
              <Waypoint onEnter={() => setSlide(index)} />
              <p>{p.text}</p>
            </div>
          ))}
        </Text>
      </Wrapper>
    </Layout>
  )
}
export default HolyHemp
