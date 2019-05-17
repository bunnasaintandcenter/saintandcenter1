import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import { device } from '../utils/devices'

const Wrapper = styled.div`
  max-width: 800px;
  width: 90vw;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 0rem;

    @media ${device.laptop}{
      margin-bottom: 1.45rem;
    }
  }

  @media ${device.laptop}{
    display: flex;
    text-align: left;
    margin-bottom: 0;
    justify-content: space-between;
  }
`;

const Form = styled.form`
  border: 2px solid white;
  display: grid;
  grid-template-columns: 8fr 1fr;
  margin: 0;
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  appearance: none;
  outline: 0;
  font-size: 16px;
  padding: 1rem;
  color: white;
  width: 100%;
  box-sizing: border-box;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const Submit = styled.button`
  outline: 0;
  background: url(${arrow});
  height: 100%;
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  padding: 1rem;
  cursor: pointer;
`;

const Subscribe = ({ email, handleSubmit, handleChange }) => (
  <Wrapper>
    <Text>
      <p>Your Higher Self — Without the High</p>
      <p>Get Our Free CBD Sample</p>
    </Text>
    <Form onSubmit={handleSubmit}>
      <Input type='email' value={email} onChange={handleChange} placeholder='Email Address' />
      <Submit />
    </Form>
  </Wrapper>
);

export default Subscribe
