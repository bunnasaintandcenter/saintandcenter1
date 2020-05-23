import React from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import { isBrowser } from "react-device-detect"
import { Link } from "gatsby"
import Routine from "./routine"
import Subscribe from "./subscribe"
import HumanLink from "./humanLink"
import PetLink from "./petLink"

const Foot = styled.footer`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 50vw 16.66vw 16.66vw;
    grid-template-areas: "sub sub sub pets pets pets" "subscribe subscribe help social other other" "contact contact legal legal legal legal" "bottom bottom bottom bottom bottom bottom";
  }
`
const Block = styled.div`
  padding: 24px;
  box-sizing: border-box;
  border-top: 1px solid black;

  @media ${device.laptop} {
    border-right: 1px solid black;
  }

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

      @media ${device.laptop} {
        display: block;
      }

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

const Bottom = styled.div`
  background: black;
  color: white;
  padding: 6px;
  text-align: center;
  grid-area: bottom;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 12px;

  @media ${device.laptop} {
    font-size: 13px;
    padding: 24px;
  }
`

const Footer = ({ location, user }) => (
  <Foot data-testid="footer">
    <Routine />
    {typeof window !== "undefined" &&
    (location?.pathname === "/shop/pets" ||
      location?.pathname === "/shop/pets") ? (
      <HumanLink />
    ) : (
      <PetLink />
    )}
    <Block className="subscribe">
      <Subscribe />
    </Block>
    <Block className="help">
      {isBrowser && <h4>Help</h4>}
      <ul>
        <li>
          <Link to={user.email === "" ? `/login` : `/account`}>Account</Link>
        </li>
        <li>
          <Link to="/returns">Returns</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
    </Block>
    <Block className="social">
      {isBrowser && <h4>Social</h4>}
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/saintandcenter/"
          >
            {isBrowser ? `Instagram` : `IG`}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/saintandcenter/"
          >
            {isBrowser ? `Facebook` : `FB`}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/saintandcenter/"
          >
            {isBrowser ? `Twitter` : `TW`}
          </a>
        </li>
      </ul>
    </Block>
    <Block className="other">
      {isBrowser && <h4>Other</h4>}
      <ul>
        <li>
          <a
            target="_blank"
            href="https://airtable.com/shrMApCo1H9yvLZY2"
            rel="noopener noreferrer"
          >
            Wholesale
          </a>
        </li>
      </ul>
    </Block>
    <Block className="contact">
      <ul>
        <li>
          <a href="mailto:hi@saintandcenter.com">Email us</a>
        </li>
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
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms-of-use">Terms of Use</Link>
        </li>
        <li>
          <Link to="/lab-results">Lab Results</Link>
        </li>
      </ul>
    </Block>
    <Bottom>
      Distributed by NoahFunk LLC {!isBrowser && <br />} D/B/A Saint and Center
      Atlanta, GA 30312
    </Bottom>
  </Foot>
)

export default Footer
