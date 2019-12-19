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
          Saint and Center believes in a natural high, that pure and inspired
          feeling you get when you’re reaching toward your potential and helping
          others to do the same.
        </p>

        <p>
          From seed to spirit, Saint and Center was birthed out of the rhythmic
          individuality and activism of Atlanta, Georgia.
        </p>

        <p>
          Inspired by the restful contentedness of southern Sundays, creativity,
          responsibility and rebellion, we make products for personal
          transformation that support collective elevation.
        </p>

        <p>Welcome to the revival. </p>
      </Intro>
    </Wrapper>
  </Layout>
)

export default About
