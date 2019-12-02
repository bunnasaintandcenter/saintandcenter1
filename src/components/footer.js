import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import arrow from "../images/arrow.svg"
import { device } from "../utils/devices"
import Signup from "./signup"
import PetLink from "./petLink"
import HumanLink from "./humanLink"

const Foot = styled.footer`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const FooterMenu = styled.div`
  background: white;
  padding: 2rem 0;
  font-size: 14px;
  margin-top: -8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.laptop} {
    grid-column: span 2;
    grid-template-columns: repeat(6, 1fr);
  }

  a {
    color: rgb(51, 51, 51);
    text-decoration: none;
  }

  ul {
    list-style: none;
    font-weight: 200;
    text-transform: uppercase;
    line-height: 1em;
    margin: 0 0 2rem;
    text-align: center;

    @media ${device.laptop} {
      text-align: center;
      margin: 0;
    }

    li {
      strong {
        display: block;
        font-weight: 500;
        margin-bottom: 2rem;
      }
    }
  }
`

const Disclaimer = styled.div`
  grid-column: span 2;
  background: white;

  p {
    border: 1px solid rgb(51, 51, 51);
    padding: 1rem;
    margin: 2rem auto;
    width: 90vw;
    max-width: 900px;
    font-weight: 200;
    font-size: 16px;
  }
`

const Legal = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  grid-column: span 2;
  padding: 2rem;
  text-align: center;

  @media ${device.laptop} {
    display: flex;
    text-align: left;
    justify-content: center;
    padding: 2rem 0;
  }

  &.dark {
    background: black;
    color: white;
  }

  li {
    @media ${device.laptop} {
      margin-right: 2rem;
    }

    &:last-of-type {
      margin: 0;
    }
  }
`

const SignupSmall = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    margin: 0 0 2rem;
    display: block;
    line-height: 16px;
    text-align: center;

    @media ${device.laptop} {
      text-align: center;
    }
  }

  div {
    position: relative;
    margin-bottom: 2rem;

    @media ${device.laptop} {
      text-align: center;
      margin: 0;
    }

    &:after {
      position: absolute;
      content: "";
      bottom: 0.5rem;
      right: 0.5rem;
      background: url(${arrow});
      height: 30px;
      width: 20px;
      background-size: 100%;
    }
  }

  input {
    width: 100%;
    min-width: 300px;
    background: #ddd;
    border: 2px solid #ddd;
    padding: 0.5rem;
    appearance: none;
    outline: none;

    &:focus {
      background: transparent;
      border: 2px solid rgb(51, 51, 51);
    }
  }

  strong {
    text-transform: uppercase;
    margin: 0 0 2rem;
    font-weight: 500;
  }
`

const Footer = ({ location }) => (
  <Foot data-testid="footer">
    {location && location.pathname === "/shop/pets" ? (
      <HumanLink />
    ) : (
      <PetLink />
    )}
    <Signup />
    <FooterMenu>
      <SignupSmall>
        <div>
          <span>
            <strong>Join Us</strong>
          </span>
          <input type="email" />
        </div>
      </SignupSmall>
      <ul>
        <li>
          <strong>Saint and Center</strong>
        </li>
        <li>Meet Us</li>
        <li>Contact Us</li>
        <li>Wholesale</li>
        <li>White Label</li>
      </ul>
      <ul>
        <li>
          <strong>Shop</strong>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>Track Your Order</li>
        <li>Lab Results</li>
        <li>Returns</li>
      </ul>
      <ul>
        <li>
          <strong>Learn</strong>
        </li>
        <li>
          <Link to="/holy-hemp">Holy Hemp</Link>
        </li>
        <li>
          <Link to="/human-rites">Human Rites</Link>
        </li>
        <li>
          <Link to="/faqs">FAQ</Link>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Connect</strong>
        </li>
        <li>
          <a
            href="https://www.instagram.com/saintandcenter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/saintandcenter/posts/422070068388076"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>Twitter</li>
      </ul>
    </FooterMenu>
    <Disclaimer>
      <p>
        Consult a medical doctor before taking this or any other supplement, if
        you are pregnant, nursing, have, or suspect a medical condition, or are
        taking any medications. These statements have not been evaluated by the
        Food and Drug Administration. This product is not intended to diagnoze,
        treat, cure or prevent any disease.
      </p>
    </Disclaimer>
    <Legal>
      <li>&copy; Saint and Center All Rights Reserved</li>
      <li>Privacy Policy</li>
      <li>Terms of Use</li>
    </Legal>
    <Legal className="dark">
      <li>
        Distributed by NoahFunk LLC D/B/A Saint and Center Atlanta, GA 30312
      </li>
    </Legal>
  </Foot>
)

export default Footer
