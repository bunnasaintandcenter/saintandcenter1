import React from "react"
import styled from "styled-components"

const Foot = styled.footer`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 16.66vw);
  grid-template-areas: "subscribe subscribe help social other other" "contact contact legal legal legal legal";
`

const Block = styled.div`
  padding: 24px;
  box-sizing: border-box;
  border-right: 1px solid black;
  border-top: 1px solid black;

  h4 {
    text-transform: uppercase;
    font-weight: 800;
    margin: 0 0 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-weight: 300;
      line-height: 18px;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }

  p {
    font-weight: 300;
    margin: 0;
  }

  &.subscribe {
    grid-area: subscribe;
  }

  &.help {
    grid-area: help;
  }

  &.social {
    grid-area: social;

    ul {
      display: flex;

      li {
        margin-right: 12px;

        &:last-of-type {
          margin: 0;
        }
      }
    }
  }

  &.other {
    grid-area: other;
  }

  &.contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: contact;

    small {
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 500;
      line-height: 13px;
    }
  }

  &.legal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: legal;

    ul {
      display: flex;
      text-transform: uppercase;
      font-size: 13px;

      li {
        font-weight: 500;
        margin: 0 12px 0 0;

        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
`

const Footer = () => (
  <Foot>
    <Block className="subscribe">
      <h4>Get the Good News</h4>
      <p>Stay up to date.</p>
    </Block>
    <Block className="help">
      <h4>Help</h4>
      <ul>
        <li>Account</li>
        <li>Track</li>
        <li>Returns</li>
        <li>FAQ</li>
      </ul>
    </Block>
    <Block className="social">
      <h4>Social</h4>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/saintandcenter/"
          >
            IG
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/saintandcenter/"
          >
            FB
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/saintandcenter/"
          >
            TW
          </a>
        </li>
      </ul>
    </Block>
    <Block className="other">
      <h4>Other</h4>
      <ul>
        <li>Wholesale</li>
        <li>White Label</li>
      </ul>
    </Block>
    <Block className="contact">
      <ul>
        <li>Call us</li>
        <li>Email us</li>
      </ul>
      <small>&copy; Saint and Center All Rights Reserved</small>
    </Block>
    <Block className="legal">
      <p>
        Consult a medical doctor before taking this or any other supplement, if
        you are pregnant, nursing, have, or suspect a medical condition, or are
        taking any medications. These statements have not been evaluated by the
        Food and Drug Administration. This product is not intended to diagnoze,
        treat, cure or prevent any disease.
      </p>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>Lab Results</li>
      </ul>
    </Block>
  </Foot>
)

export default Footer
