import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from './button'
import axios from 'axios'
import { navigate } from 'gatsby'

const Form = styled.form`
  display: flex;
  padding: 4rem;
  flex-direction: column;
  min-height: 60vh;
  justify-content: center;
  margin: 0;
  border-bottom: 2px solid rgb(51,51,51, 0.2);

  &:first-of-type {
    background: #BDB3B2;
    border: 0;
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

const LoginForm = () => {

  const [email, handleEmail] = useState('')
  const [password, handlePassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

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
    .catch(err => console.error(err))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type='email' value={email} placeholder='Email address' onChange={e => handleEmail(e.target.value)} />
      <input type='password' value={password} placeholder='Password' onChange={e => handlePassword(e.target.value)} />
      <Button disabled={email === '' || password === ''}>Login</Button>
    </Form>
  )
}

export default LoginForm;
