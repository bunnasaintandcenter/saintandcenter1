import React from "react"
import styled from "styled-components"
import { device } from "../utils/devices"

const Wrapper = styled.div`
  max-width: 800px;
  width: 90vw;
  margin-bottom: 1rem;
`

const Text = styled.div`
  margin-bottom: 0.5rem;
  font-size: 13px;
  letter-spacing: 0;

  p {
    margin-bottom: 0rem;

    &:last-of-type {
      color: ${props => props.color};
    }
  }

  @media ${device.laptop} {
    display: flex;
    font-size: 16px;
    justify-content: space-between;
  }
`

const Form = styled.form`
  border: 1px solid white;
  display: grid;
  grid-template-columns: 8fr 1fr;
  margin: 0;
`

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
`

const Submit = styled.button`
  outline: 0;
  height: 100%;
  background-size: 30%;
  background: transparent;
  text-transform: uppercase;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  padding: 1rem;
  cursor: pointer;
  color: white;

  &:hover {
    color: ${props => props.color};
  }
`

const Subscribe = ({ email, handleSubmit, handleChange, phrase, color }) => (
  <Wrapper>
    <Text color={color}>
      <p>Get A Free CBD Sample and</p>
      <p>{phrase}</p>
    </Text>
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Email Us"
      />
      <Submit color={color}>{email !== "" ? "SEND" : ""}</Submit>
    </Form>
  </Wrapper>
)

export default Subscribe
