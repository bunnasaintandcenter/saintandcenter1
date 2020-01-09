import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../utils/devices"

const Wrapper = styled.div`
  padding-top: 56px;
`

const Intro = styled.div`
  width: 90vw;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 48px 24px;
  font-weight: 200;
  font-size: 18px;
  line-height: 30px;

  @media ${device.laptop} {
    padding: 100px 24px;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }
`

const About = ({ location }) => (
  <Layout location={location}>
    <Wrapper>
      <Intro>
        <h2>Returns</h2>
        <p>
          Saint and Center offers a 60-day return policy because we genuinely
          believe in our products and their ability to improve people's lives.
          If CBD wasn't the best fit for your wellness ritual, let us know and
          we'll help you get a refund.
        </p>
        <br />
        <h2>RETURN/REFUND TERMS & CONDITIONS:</h2>
        <ol>
          <li>Each customer is allowed one refund&nbsp;</li>
          <li>Shipping cost on a returned item will not be refunded</li>
          <li>
            The return request must be submitted within 90 days of receiving
            your order
          </li>
          <li>
            Once your return is received, please allow 48 – 72 hours for your
            refund to be processed. Credit times will vary depending on your
            bank or credit card provider.
          </li>
          <li>
            If you received products damaged during shipping, you must notify us
            within 48 hours of shipment delivery to qualify for an exchange of
            the exact product using the form above. Once the damaged product has
            been received a new order will be shipped out to you free of charge.
          </li>
          <li>
            If you have any questions or concerns, please contact us at
            hi@saintandcenter.com
          </li>
        </ol>
      </Intro>
    </Wrapper>
  </Layout>
)

export default About
