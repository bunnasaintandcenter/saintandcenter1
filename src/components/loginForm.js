import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import Button from "./button"
import axios from "axios"
import { navigate, Link } from "gatsby"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import GoogleLogin from "react-google-login"
import { device } from "../utils/devices"
import { useForm } from "react-hook-form"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  padding: 0 5vw 5vw;
  justify-content: center;

  @media ${device.laptop} {
    padding: 4rem 8rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-bottom: 2px solid rgb(51, 51, 51, 0.2);

  &:first-of-type {
    border: 0;
  }

  button {
    background: white;
    border: 0;
    font-size: 24px;
    padding: 1rem;
    font-weight: 300;
  }

  p {
    margin: 2rem 0 0;
    text-align: center;
    font-weight: 300;

    a {
      color: black;
      text-decoration: none;
    }
  }
`

const Connect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 2rem;
  margin-bottom: 4rem;

  p {
    grid-column: span 2;
    font-weight: 2;
    text-transform: uppercase;
    text-align: center;
  }

  button {
    padding: 0.5rem;
    width: 100%;
    font-weight: 400;
    color: rgb(51, 51, 51);
    border: 1px solid rgb(51, 51, 51);
    font-size: 16px;
    background: transparent;
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  span {
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    font-weight: 300;
    font-size: 16px;
  }

  label {
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: ${props =>
      props.error ? `1px solid red` : `1px solid rgb(51,51,51)`};
    margin-bottom: 1rem;
    outline: 0;
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    font-weight: 300;
    background: transparent;

    @media ${device.laptop} {
      font-size: 13px;
    }
  }
`

const LoginForm = () => {
  const { handleSubmit, register, errors, setError, clearError } = useForm()

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const onSubmit = values => {
    clearError(["email", "password"])
    setLoading(true)
    const { email, password } = values

    axios
      .post("https://checkout.saintandcenter.com/wp-json/jwt-auth/v1/token", {
        username: email,
        password: password,
      })
      .then(res => {
        console.log(res)
        const { status } = res
        console.log("status", status)

        if (res.status === 200) {
          console.log("fetching user", email)
          return axios.get(
            `https://checkout.saintandcenter.com/wp-json/wc/v3/customers?email=${email}&consumer_key=${process.env.GATSBY_WOOCOMMERCE_KEY}&consumer_secret=${process.env.GATSBY_WOOCOMMERCE_SECRET}`
          )
        } else {
          return false
        }
      })
      .then(res => {
        console.log(res)
        const user = res.data[0]

        dispatch({
          type: "USER_SIGNIN",
          payload: user,
        })

        navigate("/")
      })
      .catch(err => {
        const { code } = err.response.data
        setLoading(false)
        switch (code) {
          case `[jwt_auth] invalid_email`:
            setError("email", "invalidEmail", "Email is invalid")
            break
          case `[jwt_auth] incorrect_password`:
            setError("password", "invalidPass", "Password is incorrect")
            break
          default:
            console.log(code)
        }
      })
  }

  const handleGoogle = async response => {
    const { email, givenName, familyName } = response

    try {
      const user = await axios.get(
        `https://checkout.saintandcenter.com/wp-json/wc/v3/customers?email=${email}&consumer_key=${process.env.GATSBY_WOOCOMMERCE_KEY}&consumer_secret=${process.env.GATSBY_WOOCOMMERCE_SECRET}`
      )
      console.log(user)
      const { data } = user

      if (data.length > 0) {
        // localStorage.setItem("cookie", cookie)
        localStorage.setItem("user", data[0])

        dispatch({
          type: "USER_SIGNIN",
          payload: data[0],
        })
      } else {
        const password = `TESTING 123 HEY!`

        axios
          .get(
            "https://checkout.saintandcenter.com/api/get_nonce/?controller=user&method=register"
          )
          .then(res => {
            const { nonce } = res.data

            return axios
              .post(
                `https://checkout.saintandcenter.com/api/user/register/?username=${givenName}${familyName}&first_name=${givenName}&last_name=${familyName}&email=${email}&display_name=${givenName}${familyName}&nonce=${nonce}&user_pass=${password}`
              )
              .then(res => {
                console.log(res)
                const { status, cookie, user_id } = res.data
                if (status === "ok") {
                  localStorage.setItem("cookie", cookie)
                  localStorage.setItem("user", {
                    email: email,
                    first_name: givenName,
                    last_name: familyName,
                    id: user_id,
                  })

                  dispatch({
                    type: "USER_SIGNIN",
                    payload: {
                      email: email,
                      first_name: givenName,
                      last_name: familyName,
                      id: user_id,
                    },
                  })

                  navigate("/")
                } else {
                  throw new Error(res)
                }
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.error(err))
      }

      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  const handleFacebook = async response => {
    const { accessToken } = response

    try {
      const facebookConnect = await axios.post(
        `https://checkout.saintandcenter.com/api/user/fb_connect/?access_token=${accessToken}`
      )
      const { cookie } = facebookConnect

      const user = await axios.get(
        `https://checkout.saintandcenter.com/wp-json/wc/v3/customers?email=${response.email}&consumer_key=${process.env.GATSBY_WOOCOMMERCE_KEY}&consumer_secret=${process.env.GATSBY_WOOCOMMERCE_SECRET}`
      )
      const { data } = user

      localStorage.setItem("cookie", cookie)
      localStorage.setItem("user", data[0])

      dispatch({
        type: "USER_SIGNIN",
        payload: data[0],
      })

      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Wrapper>
      <Connect>
        <p>Connect With</p>
        <FacebookLogin
          appId="595105721025341"
          fields="name, email, picture"
          callback={res => handleFacebook(res)}
          render={renderProps => (
            <Button ghost onClick={renderProps.onClick}>
              Facebook
            </Button>
          )}
        />
        <GoogleLogin
          clientId={process.env.GATSBY_GOOGLE_CLIENT_ID}
          fields="name, email, picture"
          onSuccess={({ profileObj }) => {
            handleGoogle(profileObj)
          }}
          onFailure={err => {
            console.log(err)
          }}
          render={renderProps => (
            <Button ghost onClick={renderProps.onClick}>
              Google
            </Button>
          )}
        />
      </Connect>
      <Form data-testid="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Field error={errors.email}>
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </Field>
        <Field error={errors.password}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            suggested="current-password"
            ref={register({ required: true })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </Field>
        <Button loading={loading} type="submit">
          Log in
        </Button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default LoginForm
