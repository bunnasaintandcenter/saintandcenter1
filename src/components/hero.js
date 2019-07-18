import React from 'react'
import styled from 'styled-components'
import Button from './button'
import { Link } from 'gatsby'
import logotype from '../images/logotype.svg'
import PropTypes from 'prop-types'
import { device } from '../utils/devices'

const Wrapper = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: black;
  background-size: cover;
  background-position: center center;
  color: white;
  text-transform: uppercase;
  text-align: center;
  position: relative;

  @media ${device.laptop}{
    height: 80vh;
  }

  h2 {
    font-size: 36px;
    font-weight: 300;
    position: relative;
    z-index: 1;

    @media ${device.laptop}{
      font-size: 96px;
    }
  }

  p {
    font-weight: 300;
    margin-top: 4rem;
    position: relative;
    z-index: 1;
  }

  .logotype {
    z-index: 1;
    width: 70vw;

    @media ${device.laptop}{
      width: 20vw;
    }
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

`;

const Hero = ({ title, subtitle, buttonText, url, image }) => (
  <Wrapper data-testid='hero'>
    <img className='logotype' src={logotype} alt='Saint and Center' />
    <picture><img src={image} alt={title} /></picture>
    <div>
      <h2 data-testid='title'>{title}</h2>
      {subtitle &&
        <p data-testid='subtitle'>{subtitle}</p>
      }
    </div>
    {buttonText && url &&
      <Link to={url}><Button ghost>{buttonText}</Button></Link>
    }
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  url: PropTypes.string,
}

export default Hero;
