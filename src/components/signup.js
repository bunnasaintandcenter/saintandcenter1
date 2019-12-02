import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { device } from "../utils/devices"

const Join = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 50vh;
  background: black;
  color: white;

  @media ${device.laptop} {
    height: auto;
  }

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
    font-size: 16px;

    @media ${device.laptop} {
      font-size: 24px;
    }
  }

  button {
    position: absolute;
    bottom: 3rem;
    right: 5vw;
    border: 0;
    appearance: none;
    padding: 0;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 200;
    cursor: pointer;
    color: white;
    background: transparent;
    outline: 0;

    @media ${device.laptop} {
      font-size: 36px;
    }

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
      font-weight: 300;
      font-size: 18px;

      @media ${device.laptop} {
        font-size: 36px;
      }
    }
  }
`

const Signup = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    try {
      console.log("omnisend url", process.env.GATSBY_OMNISEND_FUNCTION)
      const response = await axios.post(process.env.GATSBY_OMNISEND_FUNCTION, {
        email: email,
      })
      console.log(response)
      setSuccess(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Join data-testid="signup">
      {success ? (
        <>
          <span>You're Subscribed!</span>
        </>
      ) : (
        <>
          <span>Get the Good News</span>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
          />
          <button onClick={handleSubmit}>Send</button>
        </>
      )}
    </Join>
  )
}

export default Signup
