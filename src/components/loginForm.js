import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from './button'
import axios from 'axios'
import { navigate, Link } from 'gatsby'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { device } from '../utils/devices'
import useForm from 'react-hook-form'

const Form = styled.form`
  display: flex;
  padding: 0 5vw 5vw;
  flex-direction: column;
  min-height: 60vh;
  margin: 0;
  border-bottom: 2px solid rgb(51,51,51, 0.2);

  @media ${device.laptop}{
    padding: 4rem 8rem;
  }

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
`;

const Connect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 2rem;
  margin-bottom: 4rem;

  p {
    grid-column: span 2;
    font-weight: 2;
    text-transform: uppercase;
  }

  button {
    padding: 0.5rem;
    width: 100%;
    font-weight: 400;
    color: rgb(51,51,51);
    border: 1px solid rgb(51,51,51);
    font-size: 16px;
    background: transparent;
  }
`;

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
    border: ${props => props.error ? `1px solid red` : `1px solid rgb(51,51,51)`};
    margin-bottom: 1rem;
    outline: 0;
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;
    font-weight: 300;
    background: transparent;
  }
`;

const LoginForm = () => {

  const { handleSubmit, register, errors, reset } = useForm()

  const dispatch = useDispatch()

  const onSubmit = values => {
    const { email, password } = values;

    axios.post('https://andnone.co/saintcenter/wp-json/jwt-auth/v1/token', {
      username: email,
      password: password
    })
    .then(res => {
      const { status } = res;
      console.log('status', status)

      if(res.status === 200){
        console.log('fetching user', email)
        return axios.get(`https://andnone.co/saintcenter/wp-json/wc/v3/customers?email=${email}&consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`)
      } else {
        return false
      }
    })
    .then(res => {
      console.log(res)
      const user = res.data[0]

      dispatch({
        type: 'USER_SIGNIN',
        payload: user
      })

      navigate('/')

    })
    .catch(err => {
      // console.error(err)
      console.log('AHHHH')
    })
  }

  const handleFacebook = async (response) => {
    const { accessToken } = response;

    try {
      const facebookConnect = await axios.post(`https://andnone.co/saintcenter/api/user/fb_connect/?access_token=${accessToken}`)
      const { cookie } = facebookConnect;

      const user = await axios.get(`https://andnone.co/saintcenter/wp-json/wc/v3/customers?email=${response.email}&consumer_key=ck_990f62c74b9f424eb1ecf8b6b1bd3a2b7e180c7a&consumer_secret=cs_0c39f3c5f8db99d8f1493394fffadba7629215cd`)
      const { data } = user;

      localStorage.setItem('cookie', cookie)
      localStorage.setItem('user', data[0])

      dispatch({
        type: 'USER_SIGNIN',
        payload: data[0]
      })

      navigate('/')

    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Connect>
        <p>Connect With</p>
        <FacebookLogin
          appId="595105721025341"
          fields="name, email, picture"
          callback={res => handleFacebook(res)}
          render={renderProps => (
            <Button ghost onClick={renderProps.onClick}>Facebook</Button>
          )}
        />
        <Button ghost>Google</Button>
      </Connect>
      <Field error={errors.email}>
        <label htmlFor='email'>Email Address</label>
        <input
          name='email'
          type='email'
          placeholder='Email Address'
          ref={register({required: true, pattern: /^\S+@\S+$/i})}
        />
        {errors.email && <span>Required</span>}
      </Field>
      <Field error={errors.password}>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          suggested='current-password'
          ref={register({required: true})}
        />
        {errors.password && <span>Required</span>}
      </Field>
      <Button type='submit'>Log in</Button>
      <p>Don't have an account? <Link to='/register'>Register</Link></p>
    </Form>
  )
}

export default LoginForm;
