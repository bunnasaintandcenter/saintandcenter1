import React from 'react'
import styled from 'styled-components'
import Button from './button'
import { Link } from 'gatsby'

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

const Hero = () => (
  <Wrapper>
    <br/>
    <div>
      <h2>Your Higher Self</h2>
      <p>(Without the High)</p>
    </div>
    <Link to='/learn'><Button ghost>Discover CBD</Button></Link>
  </Wrapper>
);

export default Hero;
