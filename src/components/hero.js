import React from 'react'
import styled from 'styled-components'
import Button from './button'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  height: 80vh;
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

  h2 {
    font-size: 72px;
    font-weight: 300;
  }

  p {
    font-weight: 300;
    margin-top: 4rem;
  }

`;

const Hero = ({ title, subtitle, buttonText, url }) => (
  <Wrapper data-testid='hero'>
    <br/>
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
