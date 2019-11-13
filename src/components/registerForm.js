import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from './button'
import axios from 'axios'
import { navigate } from 'gatsby'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { device } from '../utils/devices'

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

  h2 {
    font-weight: 400;
    font-size: 36px;
    text-transform: uppercase;
  }

  input {
    padding: 1rem;
    border: 0;
    margin-bottom: 1rem;
    outline: 0;
    font-weight: 300;
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
    font-weight: 400;
    width: 100%;
    color: rgb(51,51,51);
    border: 1px solid rgb(51,51,51);
    font-size: 16px;
    background: transparent;
  }
`;

const RegisterForm = () => {

  const [firstName, handleFirstName] = useState('')
  const [lastName, handleLastName] = useState('')
  const [email, handleEmail] = useState('')
  const [password, handlePassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = e => {

    e.preventDefault()

    axios.get('https://andnone.co/saintcenter/api/get_nonce/?controller=user&method=register')
    .then((res) => {

      const { nonce } = res.data
      console.log(nonce)

      return axios.post(`https://andnone.co/saintcenter/api/user/register/?username=${firstName}${lastName}&email=${email}&display_name=${firstName}${lastName}&nonce=${nonce}&user_pass=${password}`)
      .then(res => {
        const { status, cookie, wp_user_id } = res.data;
        console.log('status', status)
        if(status === 'ok'){
          localStorage.setItem('cookie', cookie)
          localStorage.setItem('user', {
            email: email,
            first_name: firstName,
            last_name: lastName,
            id: wp_user_id
          })

          dispatch({
            type: 'USER_SIGNIN',
            payload: {
              email: email,
              first_name: firstName,
              last_name: lastName,
              id: wp_user_id
            }
          })

          navigate('/')
        } else {
          throw new Error(res)
        }
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.error(err))
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
    <Form data-testid='register-form' onSubmit={handleSubmit}>
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
      <input type='text' value={firstName} placeholder='First Name' onChange={e => handleFirstName(e.target.value)} />
      <input type='text' value={lastName} placeholder='Last Name' onChange={e => handleLastName(e.target.value)} />
      <input type='email' value={email} placeholder='Email address' onChange={e => handleEmail(e.target.value)} />
      <input type='password' value={password} placeholder='Password' onChange={e => handlePassword(e.target.value)} />
      <Button>Register</Button>
    </Form>
  )
}

export default RegisterForm;
