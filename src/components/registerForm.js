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

const RegisterForm = () => {

  const [name, handleName] = useState('')
  const [email, handleEmail] = useState('')
  const [password, handlePassword] = useState('')
  const [passwordConfirm, handlePasswordConfirm] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = e => {

    e.preventDefault()

    axios.get('https://andnone.co/saintcenter/api/get_nonce/?controller=user&method=register')
    .then((res) => {

      const { nonce } = res.data
      console.log(nonce)

      return axios.post(`https://andnone.co/saintcenter/api/user/register/?username=${name}&email=${email}&display_name=${name}&nonce=${nonce}&user_pass=${password}`)
      .then(res => {
        const { status, cookie } = res.data;
        console.log('status', status)
        if(status === 'ok'){
          localStorage.setItem('cookie', cookie)
          localStorage.setItem('user', {
            email: email,
            displayName: name
          })

          dispatch({
            type: 'USER_SIGNIN',
            payload: {
              email: email,
              displayName: name
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

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type='text' value={name} placeholder='Name' onChange={e => handleName(e.target.value)} />
      <input type='email' value={email} placeholder='Email address' onChange={e => handleEmail(e.target.value)} />
      <input type='password' value={password} placeholder='Password' onChange={e => handlePassword(e.target.value)} />
      <input type='password' value={passwordConfirm} placeholder='Confirm password' onChange={e => handlePasswordConfirm(e.target.value)} />
      <Button disabled={email === '' || password === '' || passwordConfirm === ''}>Register</Button>
    </Form>
  )
}

export default RegisterForm;
