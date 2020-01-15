import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../utils/devices"
import axios from "axios"
import arrow from "../images/arrow-right.svg"

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 8fr 1fr;
  margin: 1rem 0;
  width: calc(100% + 48px);
  background: ${props => (props.success ? `transparent` : `white`)};
  transform: ${props =>
    props.success ? `translate(0, 0)` : `translate(-24px, 0)`};
  span {
    font-weight: 300;
    text-transform: uppercase;
  }

  @media ${device.laptop} {
    position: absolute;
    top: 50%;
    transform: ${props =>
      props.success ? `translate(0, -50%)` : `translate(-24px, -50%)`};
  }
`

const Input = styled.input`
  background: white;
  border: 0;
  appearance: none;
  outline: 0;
  font-size: 16px;
  font-weight: 300;
  padding: 24px;
  box-sizing: border-box;
  text-transform: uppercase;
`

const Submit = styled.button`
  outline: 0;
  cursor: pointer;
  border: 0;
  text-indent: -999em;
  background: url(${arrow});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: left;
`

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setSuccess(true)

      console.log("omnisend url", process.env.GATSBY_OMNISEND_FUNCTION)
      const response = await axios.post(process.env.GATSBY_OMNISEND_FUNCTION, {
        email: email,
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Wrapper data-testid="subscribe">
      <h4>Get the good news</h4>
      <p>Stay up to date.</p>
      <Form onSubmit={handleSubmit} success={success}>
        {success ? (
          <span>Thank you for subscribing</span>
        ) : (
          <>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <Submit>Submit</Submit>
          </>
        )}
      </Form>
    </Wrapper>
  )
}

export default Subscribe
