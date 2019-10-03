import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import productOne from '../images/product-1.jpg'
import productTwo from '../images/product-2.jpg'

const Foot = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Insta = styled.div`
  width: 50vw;
  position: relative;

  span {
    text-transform: uppercase;

    &:first-of-type {
      position: absolute;
      top: 3rem;
      left: 5vw;
      z-index: 1;
      font-size: 36px;
      font-weight: 300;
    }
  }

  img {
    width: ${props => props.cover ? `100vw` : `auto`};
    height: 70vh;
    object-fit: cover;
    margin: 0;
    display: flex;
    padding: 0;
  }

  .slick-dots {
    position: absolute;
    left: 0;
    bottom: 4rem;
    text-align: left;
    padding: 0 0 0 2rem;
    display: flex;

    img {
      height: 20vh;
      object-fit: cover;
    }

    li {
      width: auto;
      height: auto;

      &.slick-active {
        button {
          background: rgb(51,51,51);
        }
      }

      button {
        border: 2px solid rgb(51,51,51);
        border-radius: 50%;
        transition: 0.2s all ease-in-out;

        &:hover {
          transform: scale(1.1);
        }

        &:before {
          content: none;
        }
      }
    }
  }
`;

const Join = styled.div`
  width: 50vw;
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding: 2rem;
    outline: 0;
    border: 0;
    appearance: none;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 24px;
  }

  button {
    position: absolute;
    bottom: 3rem;
    right: 5vw;
    border: 0;
    appearance: none;
    padding: 0;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 200;
    cursor: pointer;
    background: transparent;

    &:hover {
      opacity: 0.6;
    }
  }

  span {
    text-transform: uppercase;

    &:first-of-type {
      position: absolute;
      top: 3rem;
      left: 5vw;
      z-index: 1;
      font-size: 36px;
      font-weight: 300;
    }
  }
`;

const FooterMenu = styled.div`
  background: white;
  grid-column: span 2;
  padding: 2rem 0;
  display: grid;
  font-size: 14px;
  margin-top: -8px;
  grid-template-columns: repeat(6, 1fr);

  ul {
    list-style: none;
    font-weight: 200;
    text-transform: uppercase;
    line-height: 1em;
    margin: 0;

    li {
      strong {
        display: block;
        font-weight: 500;
        margin-bottom: 2rem;
      }
    }
  }
`;

const Disclaimer = styled.div`
  grid-column: span 2;
  background: white;

  p {
    border: 1px solid rgb(51,51,51);
    padding: 1rem;
    margin: 2rem auto;
    width: 90vw;
    max-width: 900px;
    font-weight: 200;
    font-size: 16px;
  }
`;

const Info = styled.div`
  background: white;
  grid-column: span 2;
  font-size: 14px;
  padding: 0 5vw;

  p {
    text-transform: uppercase;
    font-weight: 500;

    &:last-of-type {
      opacity: 0.6;
    }
  }

  small {
    max-width: 650px;
    display: block;
    margin-bottom: 1rem;
  }
`;

const Legal = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  display: flex;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  grid-column: span 2;
  padding: 2rem 0;
  justify-content: center;

  &.dark {
    background: black;
    color: white;
  }

  li {
    margin-right: 2rem;

    &:last-of-type {
      margin: 0;
    }
  }
`;

const Footer = () => (
  <Foot>
    <Insta>
      <span>Hemp+High Vibes</span>
      <Slider
        dots
        fade
      >
        <img src={productOne} alt='instagram' />
        <img src={productTwo} alt='instagram two' />
      </Slider>
    </Insta>
    <Join>
      <span>Get the Good News</span>
      <input placeholder='Enter your email' type='email' />
      <button>Send</button>
    </Join>
    <FooterMenu>
      <p></p>
      <p></p>
      <ul>
        <li><strong>Saint and Center</strong></li>
        <li>Meet Us</li>
        <li>Contact Us</li>
        <li>Wholesale</li>
        <li>White Label</li>
      </ul>
      <ul>
        <li><strong>Shop</strong></li>
        <li>Account</li>
        <li>Track Your Order</li>
        <li>Lab Results</li>
        <li>Returns</li>
      </ul>
      <ul>
        <li><strong>Learn</strong></li>
        <li>Holy Hemp</li>
        <li>Human Rites</li>
        <li>FAQ</li>
      </ul>
      <ul>
        <li><strong>Connect</strong></li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Twitter</li>
      </ul>
    </FooterMenu>
    <Disclaimer>
      <p>Consult a medical doctor before taking this or any other supplement, if you are pregnant, nursing, have, or suspect a medical condition, or are taking any medications. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnoze, treat, cure or prevent any disease.</p>
    </Disclaimer>
    <Legal>
      <li>&copy; Saint and Center All Rights Reserved</li>
      <li>Privacy Policy</li>
      <li>Terms of Use</li>
    </Legal>
    <Legal className='dark'>
      <li>Distributed by NoahFunk LLC D/B/A Saint and Center Atlanta, GA 30312</li>
    </Legal>
  </Foot>
);

export default Footer;
