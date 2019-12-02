import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../utils/devices"

const Wrapper = styled.div`
  @media ${device.laptop} {
    padding-top: calc(1.5vw + 3rem);
  }
`

const Intro = styled.div`
  width: 90vw;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem;
  font-weight: 300;
  font-size: 51px;
  line-height: 72px;
`

const About = ({ location }) => (
  <Layout location={location}>
    <Wrapper>
      <Intro>
        <p>
          Saint and Center is about personal transformation. We believe in a
          natural ‘high’, the pure and inspired feeling we get when we’re
          reaching towards our potential.
        </p>

        <p>
          While CBD isn’t a miracle, cure-all, it has helped us (and thousands
          of people) to alleviate stress, anxiety and pain that are obstacles to
          living more vibrantly.
        </p>

        <p>
          We all have the right to do the feel-good things that contribute to a
          more meaningful existence.
        </p>

        <p>Our CBD is a good start.</p>
      </Intro>
    </Wrapper>
  </Layout>
)

export default About
